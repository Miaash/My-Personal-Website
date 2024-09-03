/**
 * [window관련 type모음]
 */
export type WindowType = "folder" | "doc" | "childFolder" | "notice";

export interface FolderItemType {
  iconNm: string;
  contentKey: string;
  iconImgNm: string;
  textColor: string;
  windowType: WindowType;
  folderItems?: FolderItemType[]; // 없는 경우도 있음
}
export interface InfoType {
  width: string;
  height: string;
  left: string;
  top: string;
  folderItems: FolderItemType[];
}

export interface WindowState {
  id: number;
  title: string;
  contentKey: string;
  isShow: boolean;
  isSelected: boolean;
  isHide: boolean;
  windowType: WindowType;
}

export interface WindowStore {
  windows: WindowState[];
  addWindow: (newWindow: Omit<WindowState, "id">) => void;
  removeWindow: (id: number) => void;
  toggleShow: (id: number) => void;
  toggleSelected: (id: number) => void;
  toggleHide: (id: number) => void;
}
