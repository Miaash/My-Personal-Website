export default function InfoPopup() {
  return (
    <div className="card card-tertiary z-9999 fixed left-1/4 top-1/2 h-[100px] w-[500px]">
      <div className="card-header align-center flex w-full justify-between pr-[3px] text-left">
        <span className="text-center text-[10px] text-white">Welcome</span>
        <div>
          <button className="btn-close relative mr-2 p-0" type="button">
            <span className="w95-btn-q absolute left-[1px] top-0"></span>
          </button>
          <button className="btn-close ] relative mr-[3px] p-0">
            <span className="w95-btn-x absolute left-[1px] top-0"></span>
          </button>
        </div>
      </div>
      <div className="h-full">
        <div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
