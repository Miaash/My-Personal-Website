import { create } from "zustand";
import { persist } from "zustand/middleware";
import { WindowStore } from "../types/window";

/**
 * [전역상태관리 store]
 *  활성화된 Window창 상태관리
 */

// store생성.
// TODO(20240830/완료ㄴ) session storage 저장
export const useWindowStore = create<WindowStore>()(
  // persist(
  (set) => ({
    // 활성화된 window 리스트
    windows: [],
    // window추가 action
    // TODO(20240822/완료) Window 중복 안되게 수정필요
    addWindow: ({
      title,
      contentKey,
      isShow,
      isSelected,
      isHide,
      windowType,
    }) =>
      set((state) => {
        // 추가하려는 window가 기존 windowList에 존재하는지
        const existingWindow = state.windows.find(
          (window) => window.title === title,
        );

        // 존재하면 기존 창 isSelected를 true로 변경.
        if (existingWindow) {
          return {
            windows: state.windows.map((window) =>
              window.title === title
                ? { ...window, isShow: true, isSelected: true, isHide: false }
                : { ...window, isSelected: false },
            ),
          };
        }

        return {
          windows: [
            ...state.windows,
            {
              id: state.windows.length + 1,
              contentKey,
              isShow,
              title,
              isSelected,
              isHide,
              windowType,
            },
          ],
        };
      }),
    // window삭제 action
    removeWindow: (id) =>
      set((state) => ({
        windows: state.windows.filter((window) => window.id !== id),
      })),
    // window show제어 action
    toggleShow: (id) =>
      set((state) => ({
        windows: state.windows.map((window) =>
          window.id === id ? { ...window, isShow: !window.isShow } : window,
        ),
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
    // window숨김/보임상태 변환 action
    toggleHide: (id) =>
      set((state) => {
        const newWindows = state.windows.map((window) =>
          window.id === id
            ? {
                ...window,
                isShow: !window.isShow,
                isHide: !window.isHide,
              }
            : window,
        );

        // 숨김상태인 window중에서 해당 window id가 같은지 체크.
        const wasHidden = state.windows.find(
          (window) => window.id === id,
        )?.isHide;

        // 창이 숨김 상태에서 보임 상태로 전환될 때 toggleSelected 실행
        if (wasHidden) {
          return {
            windows: newWindows.map((window) =>
              window.id === id
                ? { ...window, isSelected: true }
                : { ...window, isSelected: false },
            ),
          };
        }

        return { windows: newWindows };
      }),
  }),
  // {
  //   name: "window-storage",
  //   getStorage: () => sessionStorage,
  // },
  // ),
);
