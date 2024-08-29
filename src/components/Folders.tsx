import Icon from "./common/Icon";

/**
 * [Folders]
 * MainPage에 나열되는 폴더 아이콘 모음 컴포넌트
 */

// TODO(20240828/x) 폴더 클릭 시, 열린 폴더로 아이콘 변경.
// TODO(20240829/완료) 폴더 아이콘들 중복 코드 정리
export default function Folders() {
  // 폴더아이템 배열
  const folderItems = [
    {
      iconNm: "Projects",
      contentKey: "projects",
      iconImgNm: "w95-closed-file",
      textColor: "white",
    },
    {
      iconNm: "Recycle Bin",
      contentKey: "recycleBin",
      iconImgNm: "w95-bin-empty",
      textColor: "white",
    },
    {
      iconNm: "Computer",
      contentKey: "computer",
      iconImgNm: "w95-computer",
      textColor: "white",
    },
    {
      iconNm: "Music",
      contentKey: "music",
      iconImgNm: "w95-cd",
      textColor: "white",
    },
    {
      iconNm: "Internet",
      contentKey: "internet",
      iconImgNm: "w95-internet",
      textColor: "white",
    },
    {
      iconNm: "About Me",
      contentKey: "aboutMe",
      iconImgNm: "w95-me",
      textColor: "white",
    },
    {
      iconNm: "Photos",
      contentKey: "photos",
      iconImgNm: "w95-camera",
      textColor: "white",
    },
    {
      iconNm: "Calendar",
      contentKey: "calendar",
      iconImgNm: "w95-calendar",
      textColor: "white",
    },
    {
      iconNm: "Paint",
      contentKey: "paint",
      iconImgNm: "w95-paint",
      textColor: "white",
    },
  ];
  return (
    <div className="main absolute left-0 top-0 flex w-[190px] flex-wrap p-[10px]">
      {folderItems.map((folder, idx) => (
        <div key={idx} className="flex flex-col" style={{ flexBasis: "50%" }}>
          <Icon
            iconNm={folder.iconNm}
            contentKey={folder.contentKey}
            iconImgNm={folder.iconImgNm}
            textColor={folder.textColor}
          />
        </div>
      ))}
    </div>
  );
}
