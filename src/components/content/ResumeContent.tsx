import { Noto_Sans } from "next/font/google";

/**
 * [Resume window용 content 컴포넌트]
 */

// TODO(20240827/x) 이력서 페이지 추가

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function ResumeContent() {
  return (
    <div className={notoSans.className}>
      <div className="folder-content">
        <div className="doc-box">
          {/* Profile & Intro */}
          <div className="flex flex-col">
            <div className="pb-[50px] pt-[80px] text-[33px] font-bold">
              프론트엔드 개발자 | 홍성아
            </div>
            <div className="py-[20px]">사진</div>
            <div className="py-[20px] text-[25px] font-semibold text-[#347EA8]">
              프로필.
            </div>
            <div className="w-full">
              <div className="mb-[10px] flex">
                <div className="mr-[30px] w-[50px] font-semibold">Name</div>
                <div className="text-[15px] font-normal text-[#73716e]">
                  홍성아
                </div>
              </div>
              <div className="mb-[10px] flex">
                <div className="mr-[30px] w-[50px] font-semibold">Email</div>
                <a
                  className="doc-link"
                  href="mailto:girl0930h@gmail.com"
                  target="_blank"
                >
                  girl0930h@gmail.com
                </a>
              </div>
              <div className="mb-[10px] flex">
                <div className="mr-[30px] w-[50px] font-semibold">Phone</div>
                <div className="text-[15px] font-normal text-[#73716e]">
                  010-9216-5491
                </div>
              </div>
              <div className="mb-[10px] flex">
                <div className="mr-[30px] w-[50px] font-semibold">GitHub</div>
                <a
                  className="doc-link"
                  href="https://github.com/Miaash"
                  target="_blank"
                >
                  https://github.com/Miaash
                </a>
              </div>
              <div className="mb-[10px] flex">
                <div className="mr-[30px] w-[50px] font-semibold">Blog</div>
                <a
                  className="doc-link"
                  href="https://www.notion.so/Mia-s-Devlog-b60f645c2e054c3ea3419dabd2f3cc3a"
                  target="_blank"
                >
                  Mia&apos;s Devlog
                </a>
              </div>
            </div>
            <div className="mr-[30px] pt-[70px] text-[25px] font-semibold text-[#347EA8]">
              주니어 프론트엔드 개발자 &apos;홍성아&apos; 입니다.
            </div>
            <div></div>
          </div>
          {/* Projects */}
          <div className="flex flex-col">
            <div className="py-[20px] text-[25px] font-semibold text-[#347EA8]">
              프로젝트.
            </div>
            <div>프로젝트내용</div>
          </div>
          {/* Career */}
          <div className="flex flex-col">
            <div className="py-[20px] text-[25px] font-semibold text-[#347EA8]">
              경력.
            </div>
            <div>경력내용</div>
          </div>
          {/* Skills */}
          <div className="flex flex-col">
            <div className="py-[20px] text-[25px] font-semibold text-[#347EA8]">
              스킬.
            </div>
            <div>하드스킬</div>
            <div>소프트스킬</div>
          </div>
          {/* Certification */}
          <div className="flex flex-col">
            <div className="py-[20px] text-[25px] font-semibold text-[#347EA8]">
              자격증.
            </div>
            <div>자격증내용</div>
          </div>
          {/* Educations */}
          <div className="flex flex-col">
            <div className="py-[20px] text-[25px] font-semibold text-[#347EA8]">
              교육.
            </div>
            <div>교육내용</div>
          </div>
        </div>
      </div>
    </div>
  );
}
