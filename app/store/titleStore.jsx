import { create } from "zustand";

const useTitleStore = create((set) => ({
  message: [], // State
  setMessage: (newMessage) => set({ message: newMessage }), // Action
}));

export default useTitleStore;
