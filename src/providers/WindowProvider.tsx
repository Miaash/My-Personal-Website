"use client";

import { createContext, ReactNode, useContext, useState } from "react";

/**
 * [윈도우 창 상태관리 provider]
 *
 */

type WindowType = {
  id: string;
  title: string;
  isShow: boolean;
  isSelected: boolean;
};

type WindowContextType = {
  windows: WindowType[];
  openWindow: (window: WindowType) => void;
  closeWindow: (id: string) => void;
};

export const WindowContext = createContext<WindowContextType | undefined>(
  undefined,
);

type WindowProviderType = { children?: ReactNode };

export default function WindowProvider({ children }: WindowProviderType) {
  // 활성화된 windows들 담을 상태 빈배열로 초기화
  const [windows, setWindows] = useState<WindowType[]>([]);

  // window open action
  const openWindow = (window: WindowType) => {
    setWindows([...windows, window]);
  };

  // window close action
  const closeWindow = (id: string) => {
    setWindows(windows.filter((win) => win.id !== id));
  };

  return (
    <WindowContext.Provider value={{ windows, openWindow, closeWindow }}>
      {children}
    </WindowContext.Provider>
  );
}

export const useWindows = () => useContext(WindowContext);
