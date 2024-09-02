import { Noto_Sans } from "next/font/google";
import { FaCircle } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";

/**
 * [Resume window용 content 컴포넌트]
 */

// TODO(20240827/완료) 이력서 페이지 추가
// TODO(20240901/완료) full화면일 때, content 중앙배치 -> project부분부터 중앙정렬되는 부분 수정
// TODO(20240902/x) 중복코드 리팩토링 필요

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function ResumeContent() {
  return (
    <div className={notoSans.className}>
      <div className="folder-content">
        <div className="doc-box">
          <div className="w-[700px] px-[50px]">
            {/* Title */}
            <div className="flex flex-col pb-[50px] pt-[80px] text-[33px]">
              프론트엔드 개발자 | 홍성아
            </div>
            {/* Profile */}
            <div className="mb-[50px] flex flex-col">
              <div className="py-[20px] text-[25px] font-semibold text-[#347EA8]">
                프로필.
              </div>
              <div className="mb-[40px]">
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
            </div>
            {/* Intro */}
            <div className="mb-[90px] flex flex-col">
              <div className="py-[17px] text-[25px] font-semibold text-[#347EA8]">
                주니어 프론트엔드 개발자 &apos;홍성아&apos; 입니다.
              </div>
              <div className="flex flex-col">
                <div className="mb-[5px] font-normal">
                  지난 1년 간 스타트업 SI개발팀에서 Vue.js를 활용해 웹 서비스를
                  개발하였습니다.
                </div>
                <div className="mb-[5px] font-normal">
                  여러프로젝트에 프론트엔드와 백엔드 모두에 기여하며, 빠른 학습
                  능력과 데이터 및 서버에 대한 추가적인 학습을 바탕으로 효율적인
                  기능 구현을 이끌어냈습니다.
                </div>
                <div className="mb-[5px] font-normal">
                  그리고 성실함을 바탕으로 새로운 기술을 학습하고 기록하며
                  성장해왔습니다.
                </div>
                <div className="mb-[5px] font-normal">
                  사용자 니즈와 경험을 중심으로 한 개발에 집중하며, UX를 반영한
                  UI 개선 작업에도 적극적으로 참여해왔습니다.
                </div>
                <div className="font-normal">
                  최근에는 웹 성능 최적화에 관심을 가지고 Next.js를 활용해 개인
                  사이트를 제작하면서 SSR(Server-Side Rendering)을 통해 초기
                  로딩 속도를 개선하고 SEO를 최적화하기 위한 실무 역량을
                  강화하고 있습니다.
                </div>
              </div>
            </div>
            {/* Career */}
            <div className="mb-[70px] flex flex-col">
              <div className="py-[20px] text-[25px] font-semibold text-[#347EA8]">
                경력.
              </div>
              <div className="mb-[20px] border-b-[1px] pb-[30px]">
                <div className="mb-[12px] flex h-[25px] items-center border-l-[3px] border-l-[#37352f] px-[15px] text-center text-[18px] font-semibold">
                  엘케이비티
                </div>
                <div className="pb-[5px] text-[15px] font-medium text-[#787774]">
                  2023.3 - 2024.8 (총 1년 6개월)
                </div>
                <div className="pb-[5px] text-[15px] font-medium text-[#787774]">
                  SI 개발팀 | 프론트엔드 개발자
                </div>
                <div className="pb-[5px] text-[15px] font-normal">
                  - SI개발팀 소속으로 클라이언트의 요구사항에 맞는 기능과 화면을
                  Vue.js와 Vuex를 활용해 프론트엔드 개발에 적극적으로
                  기여하였습니다.
                </div>
                <div className="pb-[5px] text-[15px] font-normal">
                  - UI 퍼블리싱을 주도하여 일관된 사용자 경험을 제공하고, 이를
                  통해 효율적인 유지보수와 관리의 용이성을 높였습니다.
                </div>
                <div className="pb-[5px] text-[15px] font-normal">
                  - Java, Mybatis를 학습해 RESTful API를 구현했습니다.
                </div>
                <div className="text-[15px] font-normal">
                  - 사용자 UX를 고려한 UI 디자인 개선에 적극적으로 참여했습니다.
                </div>
              </div>
              <div className="mb-[40px]">
                <div className="flex items-center py-[10px] text-center text-[17px] font-medium">
                  <FaCircle />
                  &nbsp;농산물 경매
                </div>
                <div className="pb-[5px] text-[15px] font-normal text-[#787774]">
                  엘케이비티 ∙ 2024년 05월 - 2024년 08월
                </div>
                <div className="pb-[5px] text-[15px] font-normal">
                  농산물 도매시장에서 응찰기로 사용하는 시스템과 공판장 별
                  경매정보를 웹애플리케이션으로 전환.
                </div>
                <div className="pb-[5px] text-[15px] font-semibold text-[#347EA8]">
                  &#91;사용기술&#93; Vue.js, Vuex, Java, Mybatis, Spring
                </div>
                <div className="pb-[5px] text-[15px] font-normal">
                  - 농산물 도매시장 조회 api 및 도매시장 리스트 화면 개발
                </div>
                <div className="pb-[5px] text-[15px] font-normal">
                  - 경매품목 화면 및 경매결과 화면 개발
                </div>
                <div className="pb-[5px] text-[15px] font-normal">
                  - 관리자 시스템 중도매인 승인 api 및 승인결과 조회 화면 개발
                </div>
                <div className="pb-[5px] text-[15px] font-normal">
                  - 농산물경매, 관리자 사이트 퍼블리싱 담당
                </div>
                <div>
                  🔗 &nbsp;
                  <a
                    href="http://agro-market.laboratories.kr/login"
                    target="_blank"
                    className="doc-link"
                  >
                    농산물경매 사이트,
                  </a>
                  &nbsp;
                  <a
                    href="http://agro-market.laboratories.kr/admin/login"
                    target="_blank"
                    className="doc-link"
                  >
                    관리자용 사이트
                  </a>
                </div>
              </div>
              <div className="mb-[40px]">
                <div className="flex items-center py-[10px] text-center text-[17px] font-medium">
                  <FaCircle />
                  &nbsp;COSMAX 샘플 라이브러리 API 구축.
                </div>
                <div className="pb-[5px] text-[15px] font-normal text-[#787774]">
                  엘케이비티 ∙ 2024년 02월 - 2024년 04월
                </div>
                <div className="pb-[5px] text-[15px] font-normal">
                  COSMAX 자사 직원들이 업무적으로 사용하는 화장품 샘플 대여 및
                  반납을 관리하는 시스템 API 구축
                </div>
                <div className="pb-[5px] text-[15px] font-semibold text-[#347EA8]">
                  &#91;사용기술&#93; Java, Mybatis, Spring
                </div>
                <div className="pb-[5px] text-[15px] font-normal">
                  - COSMAX 화장품 샘플 대여, 반납, 샘플목록 조회, 대여목록 조회
                  api 개발
                </div>
                <div className="pb-[5px] text-[15px] font-normal">
                  - API 명세서를 직접 작성하여 팀원들과 공유.
                </div>
              </div>
              <div className="mb-[40px]">
                <div className="flex items-center py-[10px] text-center text-[17px] font-medium">
                  <FaCircle />
                  &nbsp;농협 스마트 축산물 공판장
                </div>
                <div className="pb-[5px] text-[15px] font-normal text-[#787774]">
                  엘케이비티 ∙ 2023년 04월 - 2024년 01월
                </div>
                <div className="pb-[5px] text-[15px] font-normal">
                  농가 또는 출하기사가 공판장에 가축을 출하할 때 작성하는 지류
                  출하통지서를 전자통지서 시스템으로 전환.
                </div>
                <div className="pb-[5px] text-[15px] font-semibold text-[#347EA8]">
                  &#91;사용기술&#93; Vue.js, Vuex, Java, Mybatis, Spring
                </div>
                <div className="pb-[5px] text-[15px] font-normal">
                  - 전자 출하 통지서를 도축일, 농가 별로 조회하는 목록 화면 개발
                </div>
                <div className="pb-[5px] text-[15px] font-normal">
                  - 나의 출하통지서 목록 조회 api 개발 및 화면 개발
                </div>
                <div className="pb-[5px] text-[15px] font-normal">
                  - 출하기사 차량관리 CRUD api 및 화면 개발
                </div>
                <div className="pb-[5px] text-[15px] font-normal">
                  - 마이페이지: 나의정보 조회, 수정, 회원 탈퇴 화면 및 api 개발
                </div>
                <div className="pb-[5px] text-[15px] font-normal">
                  - 사용자의 피드백을 바탕으로 디자인 개선 및 반영
                </div>
                <div>
                  🔗 &nbsp;
                  <a
                    href="https://play.google.com/store/apps/details?id=com.nonghyup.livestockShipment&pcampaignid=web_share"
                    target="_blank"
                    className="doc-link"
                  >
                    구글 플레이스토어,
                  </a>
                  &nbsp;
                  <a
                    href="https://apps.apple.com/kr/app/nh%EC%B6%95%EC%82%B0%EB%AC%BC%EA%B3%B5%ED%8C%90%EC%9E%A5/id6471563208"
                    target="_blank"
                    className="doc-link"
                  >
                    애플 앱스토어
                  </a>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="mb-[70px] flex flex-col">
              <div className="py-[20px] text-[25px] font-semibold text-[#347EA8]">
                개인 프로젝트.
              </div>
              <div className="mb-[40px]">
                <div className="flex items-center py-[10px] text-center text-[17px] font-medium">
                  <FaCircle />
                  &nbsp;나의 웹사이트 제작
                </div>
                <div className="pb-[5px] text-[15px] font-normal text-[#787774]">
                  개인프로젝트 ∙ 2024년 07월 - 2024년 08월
                </div>
                <div className="pb-[5px] text-[15px] font-normal">
                  이력서, 포트폴리오가 담긴 개인 웹사이트
                </div>
                <div className="pb-[5px] text-[15px] font-semibold text-[#347EA8]">
                  &#91;사용기술&#93; Next.js, Zustand, Vercel
                </div>
                <div className="pb-[5px] text-[15px] font-normal">
                  - Next.js를 사용한 window manager 기능 구현
                </div>
                <div className="pb-[5px] text-[15px] font-normal">
                  - Zustand를 이용한 window 상태관리
                </div>
                <div>
                  🔗 &nbsp;
                  <a
                    href="https://hong-seonga-website.vercel.app/main"
                    target="_blank"
                    className="doc-link"
                  >
                    개인 웹사이트
                  </a>
                </div>
              </div>
            </div>
            {/* Skills */}
            <div className="mb-[90px] flex flex-col">
              <div className="py-[20px] text-[25px] font-semibold text-[#347EA8]">
                보유기술.
              </div>
              {/* <div>하드스킬</div> */}
              {/* <div>소프트스킬</div> */}
              <div className="flex items-center py-[8px] text-center text-[15px] font-normal">
                <RxDotFilled />
                &nbsp;<strong>Vue.js, React.js, Next.js, TypeScript</strong>,
                Vuex, Zustand
              </div>
              <div className="flex items-center py-[8px] text-center text-[15px] font-normal">
                <RxDotFilled />
                &nbsp;Tailwind CSS, Styled-components, SCSS
              </div>
              <div className="flex items-center py-[8px] text-center text-[15px] font-normal">
                <RxDotFilled />
                &nbsp;Java, Springboot, Mybatis
              </div>
              <div className="flex items-center py-[8px] text-center text-[15px] font-normal">
                <RxDotFilled />
                &nbsp;SQL
              </div>
            </div>
            {/* Certification */}
            <div className="mb-[90px] flex flex-col">
              <div className="py-[20px] text-[25px] font-semibold text-[#347EA8]">
                자격증.
              </div>
              <div className="mb-[12px] flex h-[25px] items-center border-l-[3px] border-l-[#37352f] px-[15px] text-center text-[18px] font-semibold">
                정보처리기사 필기
              </div>
              <div className="pb-[5px] text-[15px] font-normal text-[#787774]">
                2023년 10월 취득
              </div>
            </div>
            {/* Educations */}
            <div className="mb-[180px] flex flex-col">
              <div className="py-[20px] text-[25px] font-semibold text-[#347EA8]">
                교육.
              </div>
              <div className="mb-[70px]">
                <div className="mb-[12px] flex h-[25px] items-center border-l-[3px] border-l-[#37352f] px-[15px] text-center text-[18px] font-semibold">
                  코드스테이츠 프론트엔드 교육과정 39기
                </div>
                <div className="pb-[5px] text-[15px] font-normal text-[#787774]">
                  2022년 04월 ~ 2022년 10월 수료
                </div>
                <div className="pb-[5px] text-[15px] font-normal">
                  - Javascript ES6 기본 개념 및 메서드 활용법에 대해
                  학습했습니다.
                </div>
                <div className="pb-[5px] text-[15px] font-normal">
                  - React를 활용해 팀프로젝트 기획 및 프론트엔드 개발에
                  참여했습니다.
                </div>
                <div className="pb-[5px] text-[15px] font-normal">
                  - 페어프로그래밍 과제 해결을 통한 협업 능력을 길렀습니다.
                </div>
                <div>
                  🔗 &nbsp;
                  <a
                    href="https://www.notion.so/Main-Proj-Coffee-With-Me-4bf44ac7392c4eb8bc2db5d7a7e77333"
                    target="_blank"
                    className="doc-link"
                  >
                    커피위드미 프로젝트
                  </a>
                </div>
              </div>
              <div className="mb-[40px]">
                <div className="mb-[12px] flex h-[25px] items-center border-l-[3px] border-l-[#37352f] px-[15px] text-center text-[18px] font-medium">
                  고려사이버대학교 디자인공학과 학사
                </div>
                <div className="pb-[5px] text-[15px] font-normal text-[#787774]">
                  2021년 02월 편입학 ~ 2023년 02월 졸업 (학점 3.75 / 4.5)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
