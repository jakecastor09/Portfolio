import { create } from 'zustand';

type State = {
  isOpen: boolean;
};

type Action = {
  setIsOpen: () => void;
};

const useMenuStore = create<State & Action>(set => ({
  isOpen: false,
  setIsOpen: () => set(state => ({ isOpen: !state.isOpen })),
}));

export default useMenuStore;
