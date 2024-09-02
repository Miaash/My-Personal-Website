import { Noto_Sans } from "next/font/google";

/**
 * [Portfoilio Doc window용 content 컴포넌트]
 */

// TODO(20240829/x) 포트폴리오 페이지 추가

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function PortfoilioContent() {
  return (
    <div className={notoSans.className}>
      <div className="folder-content">
        <div className="doc-box"></div>
      </div>
    </div>
  );
}
