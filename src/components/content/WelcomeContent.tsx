/**
 * [Welcome window용 content 컴포넌트]
 */

export default function WelcomeContent() {
  return (
    <div className="w-full" style={{ height: `calc(100% - 38px)` }}>
      <h1 className="text-title mx-[10px] my-[20px] pl-[20pxs]">
        Welcome to My WebSite <span className="text-gray-100">2024</span>
      </h1>
      <div className="mt-[30px] flex h-full w-full justify-center">
        <div className="bg-light-yellow flex h-full w-full flex-col justify-center p-[30px]">
          <div className="flex items-center justify-center text-center">
            <span className="w95-smile mr-[10px] inline-block"></span>
            <p className="text-[15px]">Did you know...</p>
          </div>
          <div className="mt-[20px] flex flex-col items-center justify-center text-[12px]">
            <p className="text-[13px]">
              To open a program, you just click the Start button, and then click
              the program&apos;s icon.
            </p>
            <span className="w95-img-computer inline-block"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
