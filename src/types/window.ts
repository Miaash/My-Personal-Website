/**
 * [window관련 type모음]
 */
export type WindowType = "folder" | "doc" | "childFolder" | "notice" | "info";

// window - folder, doc 타입
export interface FolderItemsType {
  iconNm: string;
  contentKey: string;
  iconImgNm: string;
  textColor: string;
  windowType: WindowType;
  folderItems: FolderItemsType[]; // 없는 경우도 있음
  width: string;
  height: string;
  // parentFolderKey: string;
}

// window 상태 타입
export interface WindowState {
  id: number;
  title: string;
  contentKey: string;
  isShow: boolean;
  isSelected: boolean;
  isHide: boolean;
  windowType: WindowType;
  folderItems: FolderItemsType[];
  width: string;
  height: string;
  // parentFolderKey: string;
}

export interface WindowStore {
  windows: WindowState[];
  addWindow: (newWindow: Omit<WindowState, "id">) => void;
  removeWindow: (id: number) => void;
  toggleShow: (id: number) => void;
  toggleSelected: (id: number) => void;
  toggleHide: (id: number) => void;
}
