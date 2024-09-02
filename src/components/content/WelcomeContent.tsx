/**
 * [Welcome window용 content 컴포넌트]
 */

// TODO(20240902/x) Welcome Content는 스크롤, 윈도우 footer 없애기
export default function WelcomeContent() {
  return (
    <div className="w-full" style={{ height: `calc(100% - 38px)` }}>
      <div className="my-[10px] pl-[20px] text-[23px]">
        제 사이트에 와주셔서 감사합니다.
        {/* Welcome to My Website. */}
        {/* <span className="text-gray-100">2024</span> */}
      </div>
      <div className="mt-[30px] flex h-full w-full justify-center">
        <div className="bg-light-yellow flex h-full w-full flex-col justify-center p-[30px]">
          <div className="flex items-center justify-center">
            <span className="w95-tip mr-[10px] mt-[10px] inline-block"></span>
            <p className="inline-block text-center text-[20px]">참고해주세요</p>
          </div>
          <div className="mt-[20px] flex flex-col items-center justify-center text-[12px]">
            <p className="text-[15px]">
              {/* To open a program, you just click the Start button, and then click
              the program&apos;s icon.  */}
              프로그램을 실행하시려면, 시작버튼 또는 화면의 아이콘을 클릭하세요.
            </p>
            <span className="w95-img-computer inline-block"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
