/**
 * [AboutMe window용 content 컴포넌트]
 */

export default function AboutMeContent() {
  return (
    <div className="folder-content">
      <div className="folder-box">
        <div className="m-[8px] flex h-[50px] w-[50px] cursor-pointer flex-col items-center">
          <span className="w95-resume inline-block h-[50px] w-[50px]"></span>
          <span className="inline-block pt-[3px] text-[9px] text-black">
            resume
          </span>
        </div>
        <div className="m-[8px] flex h-[50px] w-[50px] cursor-pointer flex-col items-center">
          <span className="w95-resume inline-block h-[50px] w-[50px]"></span>
          <span className="inline-block pt-[5px] text-[9px] text-black">
            portfolio
          </span>
        </div>
        <div className="m-[8px] flex h-[50px] w-[50px] cursor-pointer flex-col items-center">
          <span className="w95-closed-file inline-block h-[50px] w-[50px]"></span>
          <span className="inline-block pt-[3px] text-[9px] text-black">
            noname
          </span>
        </div>
      </div>
    </div>
  );
}
