import { create } from "zustand";

/**
 * [전역상태관리 store]
 *  활성화된 Window창 상태관리
 */

// window상태 Type
interface windowsStateType {
  id: number;
  title: string;
  contentKey: string;
  isShow: boolean;
  isSelected: boolean;
  isHide: boolean;
}

// store타입
interface windowsStateListType {
  windows: windowsStateType[];
  addWindow: (newWindow: {
    title: string;
    contentKey: string;
    isShow: boolean;
    isSelected: boolean;
    isHide: boolean;
  }) => void;
  removeWindow: (id: number) => void;
  toggleShow: (id: number) => void;
  toggleSelected: (id: number) => void;
  toggleHide: (id: number) => void;
}

// store생성.
export const useWindowStore = create<windowsStateListType>((set) => ({
  // 활성화된 window 리스트
  windows: [],
  // window추가 action
  // TODO(20240822/x) Window 중복 안되게 수정
  addWindow: ({ title, contentKey, isShow, isSelected, isHide }) =>
    set((state) => ({
      windows: [
        ...state.windows,
        {
          id: state.windows.length + 1,
          contentKey,
          isShow,
          title,
          isSelected,
          isHide,
        },
      ],
    })),
  // window삭제 action
  removeWindow: (id) =>
    set((state) => ({
      windows: state.windows.filter((window) => window.id !== id),
    })),
  // 선택된 window 변경 action => 선택은 요소들 중 한개만 true
  toggleSelected: (id) =>
    set((state) => ({
      windows: state.windows.map((window) =>
        window.id === id
          ? { ...window, isSelected: true }
          : { ...window, isSelected: false },
      ),
    })),
  // window show제어 action
  toggleShow: (id) =>
    set((state) => ({
      windows: state.windows.map((window) =>
        window.id === id ? { ...window, isShow: !window.isShow } : window,
      ),
    })),
  // window숨김처리 action
  toggleHide: (id) =>
    set((state) => ({
      windows: state.windows.map((window) =>
        window.id === id
          ? { ...window, isShow: !window.isShow, isHide: !window.isHide }
          : window,
      ),
    })),
}));
