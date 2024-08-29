import Icon from "../common/Icon";
/**
 * [Portfolio window용 content 컴포넌트]
 */

// TODO(20240827/x) 포트폴리오 화면 퍼블리싱 추가
export default function ProjectsContent() {
  const folderItems = [
    {
      iconNm: "MyWebSite",
      contentKey: "myWebSite",
      iconImgNm: "w95-resume",
      textColor: "black",
    },
  ];
  return (
    <div className="folder-content">
      <div className="folder-box">
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
