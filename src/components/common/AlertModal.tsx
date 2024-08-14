/**
 * [알림모달창 컴포넌트]
 * @returns
 */
export default function AlertModal() {
  return (
    <div className="z-9999 fixed left-1/2 top-1/2 h-[100px] w-[500px]">
      <div className="card card-tertiary">
        <div className="card-header text-center">
          <span>주의하세요</span>
        </div>
        <div className="card-body">
          <p className="card-text">
            Tired of all the new design trends? Fly back in time and use this
            free{" "}
            <span className="text-italic">Windows 95 User Interface Kit</span>{" "}
            to create awesome retro websites. It is based on the latest
            Bootstrap 4 Framework and you can download it for free by creating
            an account at{" "}
            <a href="/main" target="_blank">
              Themesberg.com
            </a>
            .
          </p>
          <div className="text-center">
            <a
              href="/main"
              className="btn btn-sm btn-primary border-dark mr-2"
              role="button"
            >
              <span className="btn-text">Free download</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
