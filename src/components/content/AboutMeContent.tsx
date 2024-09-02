import Icon from "../common/Icon";
/**
 * [AboutMe window용 content 컴포넌트]
 */

export default function AboutMeContent() {
  const folderItems = [
    {
      iconNm: "Resume",
      contentKey: "resume",
      iconImgNm: "w95-resume",
      textColor: "black",
    },
    {
      iconNm: "Miasoft PowerPoint - Portfolio",
      contentKey: "portfolio",
      iconImgNm: "w95-ppt",
      textColor: "black",
    },
    {
      iconNm: "Noname",
      contentKey: "noname",
      iconImgNm: "w95-closed-file",
      textColor: "black",
    },
  ];
  return (
    <div
      className="folder-content"
      style={{
        overflow: "hidden",
      }}
    >
      <div
        className="folder-box"
        style={{
          overflow: "hidden",
          height: "100vh",
          // position: "fixed",
        }}
      >
        {folderItems.map((folder, idx) => (
          <Icon
            key={idx}
            iconNm={folder.iconNm}
            contentKey={folder.contentKey}
            iconImgNm={folder.iconImgNm}
            textColor={folder.textColor}
            isDoc={true}
          />
        ))}
      </div>
    </div>
  );
}
