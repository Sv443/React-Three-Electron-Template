import { create } from "zustand";

export const useCubeStore = create<{
  clicked: boolean;
  setClicked: (clicked: boolean) => void;
  hovering: boolean;
  setHovering: (hovering: boolean) => void;
    }>((set) => ({
      clicked: false,
      setClicked: (clicked) => set({ clicked }),
      hovering: false,
      setHovering: (hovering) => set({ hovering }),
    }));
