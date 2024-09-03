import { FolderItemType, InfoType } from "@/types/window";

/**
 * [폴더 content 데이터]
 */

const defaultFolderData = {
  width: "550px",
  height: "300px",
  left: "10%",
  top: "40%",
  folderItems: [] as FolderItemType[],
};

export const contentInfo: Record<string, InfoType> = {
  projects: {
    ...defaultFolderData,
    left: "20%",
    top: "30%",
    folderItems: [
      {
        iconNm: "MyWebSite",
        contentKey: "myWebSite",
        iconImgNm: "w95-resume",
        textColor: "black",
        windowType: "doc",
      },
    ],
  },
  computer: {
    ...defaultFolderData,
    left: "10%",
    top: "40%",
    folderItems: [],
  },
  music: {
    ...defaultFolderData,
    left: "10%",
    top: "40%",
    folderItems: [],
  },
  recycleBin: {
    ...defaultFolderData,
    left: "10%",
    top: "40%",
    folderItems: [],
  },
  aboutMe: {
    ...defaultFolderData,
    left: "50%",
    top: "50%",
    folderItems: [
      {
        iconNm: "Resume",
        contentKey: "resume",
        iconImgNm: "w95-resume",
        textColor: "black",
        windowType: "doc",
      },
      {
        iconNm: "Miasoft PowerPoint - Portfolio",
        contentKey: "portfolio",
        iconImgNm: "w95-ppt",
        textColor: "black",
        windowType: "doc",
      },
      {
        iconNm: "Noname",
        contentKey: "noname",
        iconImgNm: "w95-closed-file",
        textColor: "black",
        windowType: "childFolder",
        folderItems: [],
      },
    ],
  },
  photos: {
    ...defaultFolderData,
    left: "20%",
    top: "8%",
    folderItems: [
      {
        iconNm: "2022",
        contentKey: "2022",
        iconImgNm: "w95-closed-file",
        textColor: "black",
        windowType: "childFolder",
        folderItems: [
          {
            iconNm: "1",
            contentKey: "1",
            iconImgNm: "w95-photo",
            textColor: "black",
            windowType: "doc",
          },
        ],
      },
      {
        iconNm: "2023",
        contentKey: "2023",
        iconImgNm: "w95-closed-file",
        textColor: "black",
        windowType: "childFolder",
        folderItems: [
          {
            iconNm: "1",
            contentKey: "1",
            iconImgNm: "w95-photo",
            textColor: "black",
            windowType: "doc",
          },
          {
            iconNm: "2",
            contentKey: "2",
            iconImgNm: "w95-photo",
            textColor: "black",
            windowType: "doc",
          },
          {
            iconNm: "3",
            contentKey: "3",
            iconImgNm: "w95-photo",
            textColor: "black",
            windowType: "doc",
          },
        ],
      },
      {
        iconNm: "2024",
        contentKey: "2024",
        iconImgNm: "w95-closed-file",
        textColor: "black",
        windowType: "childFolder",
        folderItems: [],
      },
    ],
  },
};
