/**
 * [Portfolio window용 content 컴포넌트]
 */

// TODO(20240827/x) 포트폴리오 화면 퍼블리싱 추가
export default function ProjectsContent() {
  return (
    <div
      className="flex w-full p-[15px]"
      style={{ height: `calc(100% - 38px)` }}
    >
      <div className="m-[8px] flex h-[50px] w-[50px] cursor-pointer flex-col items-center">
        <span className="w95-closed-file inline-block h-[50px] w-[50px]"></span>
        <span className="inline-block pt-[5px] text-[9px] text-black">
          projects
        </span>
      </div>
      <div className="m-[8px] flex h-[50px] w-[50px] cursor-pointer flex-col items-center">
        <span className="w95-resume inline-block h-[50px] w-[50px]"></span>
        <span className="inline-block pt-[5px] text-[9px] text-black">
          myWebSite
        </span>
      </div>
    </div>
  );
}
