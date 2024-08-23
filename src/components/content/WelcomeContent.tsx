/**
 * [Welcome window용 content 컴포넌트]
 */

export default function WelcomeContent() {
  return (
    <div className="h-full w-full">
      <h1 className="text-title">
        Welcome to My WebSite <span className="text-gray-100">2024</span>
      </h1>
      <div className="mt-[30px] flex h-full w-full justify-between">
        <div className="bg-light-yellow h-[600px] w-[500px] p-[25px]">
          <p className="text-[15px]">Did you know...</p>
          <p className="w-[350px] text-[12px]">
            To open a program, you just click the Start button, and then click
            the program&apos;s icon.
          </p>
          <span className="w95-img-computer inline-block"></span>
        </div>
        <div className="h-full flex-col">
          <button
            className="btn btn-sm btn-primary border-dark mr-2"
            type="button"
          >
            <span className="btn-text">Close</span>
          </button>
        </div>
      </div>
    </div>
  );
}
