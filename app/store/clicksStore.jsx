import { create } from "zustand";

const useClicksStore = create((set) => ({
  message: false,
  setMessage: (newMessage) => set({ message: newMessage }),
}));

export default useClicksStore;
