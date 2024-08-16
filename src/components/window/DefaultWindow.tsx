/**
 * [DefaultWindowType]
 * 기본 창으로 쓰이는 컴포넌트.
 * @returns
 */

interface DefaultWindowType {
  title: string;
  contents: string;
  isShow: boolean;
  setIsShow: (target: boolean) => void;
  isSelected: boolean;
  setIsSelected: (target: boolean) => void;
}
export default function DefaultWindow({
  title,
  contents,
  isShow,
  setIsShow,
  isSelected,
  setIsSelected,
}: DefaultWindowType) {
  return (
    <div
      className={`card card-tertiary z-9999 fixed left-1/4 top-1/2 h-[100px] w-[500px] ${
        isShow ? "block" : "hidden"
      }`}
    >
      <div className="card-header align-center flex w-full justify-between pr-[3px] text-left">
        <span className="text-center text-[10px] text-white">{title}</span>
        <div>
          {/* 물음표버튼 */}
          <button className="btn-control relative mr-2 p-0" type="button">
            <span className="w95-btn-q absolute left-[-1px] top-0"></span>
          </button>
          {/* 닫기버튼 */}
          <button
            className="btn-control relative mr-[3px] p-0"
            onClick={() => setIsShow(false)}
          >
            <span className="w95-btn-x absolute left-[-1px] top-0"></span>
          </button>
        </div>
      </div>
      <div className="h-full w-full p-[10px]">
        <div className="h-full w-full">
          {/* <div> */}
          <p className="text-bold text-[15px]">{contents}</p>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
