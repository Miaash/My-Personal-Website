/**
 * [Photo window용 content 컴포넌트]
 */

// TODO(20240828/x) 여기서 아이콘 클릭하면 새 winㅇ창이 열리는것이 아니라 창에서 화면만 전환된다
export default function PhotosContent() {
  return (
    <div
      className="flex w-full p-[15px]"
      style={{ height: `calc(100% - 38px)` }}
    >
      <div className="m-[8px] flex h-[50px] w-[50px] cursor-pointer flex-col items-center">
        <span className="w95-closed-file inline-block h-[50px] w-[50px]"></span>
        <span className="inline-block pt-[3px] text-[8px] text-black">
          2022
        </span>
      </div>
      <div className="m-[8px] flex h-[50px] w-[50px] cursor-pointer flex-col items-center">
        <span className="w95-closed-file inline-block h-[50px] w-[50px]"></span>
        <span className="inline-block pt-[3px] text-[8px] text-black">
          2023
        </span>
      </div>
      <div className="m-[8px] flex h-[50px] w-[50px] cursor-pointer flex-col items-center">
        <span className="w95-closed-file inline-block h-[50px] w-[50px]"></span>
        <span className="inline-block pt-[3px] text-[8px] text-black">
          2024
        </span>
      </div>
    </div>
  );
}
