import { useEffect, useRef, useState } from "react";
import { createStore } from "zustand";
import { ThreadListManager } from "../types";

// this is to create zustand store on top of input thread list manager,
// it enables us to expose dev friendly api using context and not give up on optimisations
export const useThreadListManagerStore = (inputThreadListManager: ThreadListManager) => {
  const inputThreadListManagerRef = useRef(inputThreadListManager);
  inputThreadListManagerRef.current = inputThreadListManager;

  const [threadListManagerStore] = useState(() =>
    createStore<ThreadListManager>(() => {
      return {
        threads: inputThreadListManagerRef.current.threads,
        isLoading: inputThreadListManagerRef.current.isLoading,
        error: inputThreadListManagerRef.current.error,
        selectedThreadId: inputThreadListManagerRef.current.selectedThreadId,

        switchToNewThread: () => inputThreadListManagerRef.current.switchToNewThread(),
        load: () => inputThreadListManagerRef.current.load(),
        updateThread: (...props) => inputThreadListManagerRef.current.updateThread(...props),
        deleteThread: (...props) => inputThreadListManagerRef.current.deleteThread(...props),
        selectThread: (...props) => inputThreadListManagerRef.current.selectThread(...props),
        loadMore: () => inputThreadListManagerRef.current.loadMore(),
      };
    }),
  );

  useEffect(() => {
    threadListManagerStore.setState({
      threads: inputThreadListManager.threads,
      isLoading: inputThreadListManager.isLoading,
      error: inputThreadListManager.error,
      selectedThreadId: inputThreadListManager.selectedThreadId,
    });
    // no dependency array, since we want to update these values on each render
  });

  return threadListManagerStore;
};
