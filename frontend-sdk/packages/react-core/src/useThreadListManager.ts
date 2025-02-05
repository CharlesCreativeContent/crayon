import { useMemo, useRef } from "react";
import { createStore, useStore } from "zustand";
import { Thread, ThreadListManager, UserMessage } from "./types";

type Props = {
  fetchThreadList: () => Promise<Thread[]>;
  deleteThread: (id: string) => Promise<void>;
  updateThread: (updated: Thread) => Promise<Thread>;
  // allows user to clear chat state when switched to new thread
  onSwitchToNew: () => void;
  onSelectThread: (threadId: string) => void;
  createThread: (firstMessage: UserMessage) => Promise<Thread>;
};

type DefaultManager = ThreadListManager;

export const useThreadListManager = (props: Props): DefaultManager => {
  const propsRef = useRef(props);
  propsRef.current = props;

  const store = useMemo(() => {
    return createStore<DefaultManager>((set) => {
      const updateThreadRunningStatus = (id: string, isRunning: boolean) => {
        set((state) => ({
          threads: state.threads.map((t) => {
            if (t.threadId !== id) {
              return t;
            }
            return {
              ...t,
              isRunning,
            };
          }),
        }));
      };

      return {
        selectedThreadId: null,
        shouldLoadThread: false,
        threads: [] as Thread[],
        error: null,
        isLoading: true,
        selectThread: (threadId, shouldLoadThread = true) => {
          set({ selectedThreadId: threadId, shouldLoadThread });
          propsRef.current.onSelectThread(threadId);
        },
        load: () => {
          set({ isLoading: true });
          propsRef.current
            .fetchThreadList()
            .then((threads) => {
              set({ isLoading: false, threads });
            })
            .catch((e) => {
              set({ isLoading: false, error: e });
            });
        },
        createThread: async (firstMessage: UserMessage) => {
          const thread = await propsRef.current.createThread(firstMessage);
          set((state) => ({
            threads: [thread, ...state.threads],
          }));
          return thread;
        },
        deleteThread: (id) => {
          updateThreadRunningStatus(id, true);
          propsRef.current
            .deleteThread(id)
            .then(() => {
              set((state) => ({
                threads: state.threads.filter((t) => t.threadId !== id),
              }));
            })
            .catch(() => {
              updateThreadRunningStatus(id, false);
            });
        },
        updateThread: (thread) => {
          updateThreadRunningStatus(thread.threadId, true);

          propsRef.current
            .updateThread(thread)
            .then((thread) =>
              set((state) => ({
                threads: state.threads.map((t) => (t.threadId === thread.threadId ? thread : t)),
              })),
            )
            .catch(() => {
              updateThreadRunningStatus(thread.threadId, false);
            });
        },
        switchToNewThread: () => {
          set({ selectedThreadId: null });
          propsRef.current.onSwitchToNew();
        },
      };
    });
  }, []);

  return useStore(store);
};
