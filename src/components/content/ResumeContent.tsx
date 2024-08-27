/**
 * [Resume window용 content 컴포넌트]
 */

// TODO(20240827/x) 이력서 페이지 추가

export default function ResumeContent() {
  return (
    <div className="h-full w-full">
      <h1 className="text-title mt-[10px] pl-[20pxs]">
        Resume <span className="text-gray-100">2024</span>
      </h1>
      <div className="mt-[30px] flex h-full w-full justify-center">
        <div className="bg-light-yellow h-[600px] w-[700px] justify-center p-[25px]">
          <div className="flex items-center justify-center text-center">
            <span className="w95-smile mr-[10px] inline-block"></span>
            <p className="text-[15px]">Did you know...</p>
            {/* <p className="text-[25px]">안녕하세요.</p> */}
          </div>
          <div className="mt-[20px] flex flex-col items-center justify-center text-[12px]">
            <p className="text-[13px]">
              To open a program, you just click the Start button, and then click
              the program&apos;s icon.
            </p>
            <span className="w95-img-computer inline-block"></span>
          </div>
        </div>
        {/* <div className="h-full flex-col">
        <button
          className="btn btn-sm btn-primary border-dark mr-2"
          type="button"
        >
          <span className="btn-text">Close</span>
        </button>
      </div> */}
      </div>
    </div>
  );
}
