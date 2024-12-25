import { useStore } from "zustand";
import { useChatContext } from "../internal/ChatContext";
import { ThreadListActions } from "../types";

/**
 * @category Hooks
 *
 * @remarks
 * useThreadListActions
 */
export const useThreadListActions = (): ThreadListActions => {
  const { threadListManager } = useChatContext();
  return {
    load: useStore(threadListManager, (store) => store.load),
    switchToNew: useStore(threadListManager, (store) => store.switchToNew),
    deleteThread: useStore(threadListManager, (store) => store.deleteThread),
    updateThread: useStore(threadListManager, (store) => store.updateThread),
  };
};
