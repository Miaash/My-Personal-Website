import { FolderItemsType } from "@/types/window";
import Icon from "../common/Icon";

/**
 * [FolderContainer]
 * 폴더 윈도우용 컨테이너 박스
 */

interface FolderContainerPropsType {
  folderItems: FolderItemsType[];
  // onFolderClick: (contentKey: string) => void;
}

// interface FolderItemType {
//   iconNm: string;
//   contentKey: string;
//   iconImgNm: string;
//   textColor: string;
//   windowType: WindowType;
//   folderItems: FolderItemType[];
//   width: string;
//   height: string;
//   left: string;
//   top: string;
//   // parentFolderKey: string;
// }

export default function FolderContainer({
  folderItems,
  // onFolderClick,
}: FolderContainerPropsType) {
  return (
    <div className="folder-content">
      <div
        className="folder-box"
        style={{
          overflow: "hidden",
          height: "100vh",
        }}
      >
        {folderItems.length > 0 ? (
          folderItems.map((folder, idx) => (
            <div key={idx}>
              <Icon
                iconNm={folder.iconNm}
                contentKey={folder.contentKey}
                iconImgNm={folder.iconImgNm}
                textColor={folder.textColor}
                windowType={folder.windowType}
                folderItems={folder.folderItems}
                width={folder.width}
                height={folder.height}
                left={folder.left}
                top={folder.top}
                // onFolderClick={onFolderClick}
                // parentFolderKey={folder.parentFolderKey}
              />
            </div>
          ))
        ) : (
          <div>폴더가 비어있습니다.</div>
        )}
      </div>
    </div>
  );
}
