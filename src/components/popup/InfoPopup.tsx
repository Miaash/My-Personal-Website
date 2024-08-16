/**
 * [InfoPopup]
 * title, text 받아옴.
 * @returns
 */

interface InfoPopupType {
  title: string;
  text: string;
  isShow: boolean;
  setIsShow: (target: boolean) => void;
}
export default function InfoPopup({
  title,
  text,
  isShow,
  setIsShow,
}: InfoPopupType) {
  return (
    <div className="card card-tertiary z-9999 fixed left-1/4 top-1/2 h-[100px] w-[500px]">
      <div className="card-header align-center flex w-full justify-between pr-[3px] text-left">
        <span className="text-center text-[10px] text-white">{title}</span>
        <div>
          <button className="btn-control relative mr-2 p-0" type="button">
            <span className="w95-btn-q absolute left-[-1px] top-0"></span>
          </button>
          <button className="btn-control relative mr-[3px] p-0">
            <span className="w95-btn-x absolute left-[-1px] top-0"></span>
          </button>
        </div>
      </div>
      <div className="h-full w-full p-[10px]">
        <div className="h-full w-full">
          {/* <div> */}
          <p className="text-bold text-[15px]">환영합니다</p>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
