interface AlertModalType {
  title: string;
  text: string;
  isShow: boolean;
  setIsShow: (target: boolean) => void;
}

/**
 * [AlertModal 컴포넌트]
 * 알림 모달창 띄울 때 사용
 * 우선 순위가 가장 높은 창으로 OK혹은 Cancel버튼이 동작하지 않는 한, 창이 닫히지 않음.
 */
export default function AlertModal({
  title,
  text,
  isShow,
  setIsShow,
}: AlertModalType) {
  return (
    <div className="z-100000 fixed left-1/4 top-1/2 h-[100px] w-[500px]">
      <div className="card card-tertiary">
        <div className="card-header text-center">
          <span>{title}</span>
        </div>
        <div className="card-body">
          <p className="card-text">{text}</p>
          <div className="mt-3 flex justify-end">
            <button
              className="btn btn-sm btn-primary border-dark mr-2"
              type="button"
            >
              <span className="btn-text">OK</span>
            </button>
            <button className="btn btn-sm btn-primary" type="button">
              <span className="btn-text">Cancel</span>
            </button>
            {/* <div className="text-center">
                <a
                  href="/main"
                  className="btn btn-sm btn-primary border-dark mr-2"
                  role="button"
                >
                  <span className="btn-text">Free download</span>
                </a>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
