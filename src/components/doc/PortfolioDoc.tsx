import { Noto_Sans } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
// import { Document, Page, pdfjs } from "react-pdf";

/**
 * [Portfoilio Doc window용 doc 컴포넌트]
 */

// TODO(20240829/완료) 포트폴리오 페이지 추가 - 이미지 추가 완료

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PortfoilioDoc() {
  const portfolioSlides = [
    "slide1.jpeg",
    "slide2.jpeg",
    "slide3.jpeg",
    "slide4.jpeg",
    "slide5.jpeg",
    "slide6.jpeg",
    "slide7.jpeg",
    "slide8.jpeg",
    "slide9.jpeg",
    "slide10.jpeg",
    "slide11.jpeg",
    "slide12.jpeg",
  ];
  // const [numPages, setNumPages] = useState<number>();
  // const [pageNumber, setPageNumber] = useState<number>(1);

  // function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
  //   setNumPages(numPages);
  // }

  return (
    <div>
      <div className="folder-content flex-col items-center bg-[#FDFDF9] pb-[100px]">
        {portfolioSlides.map((slide, idx) => (
          <div className="my-[50px]" key={idx}>
            <Image
              src={require(`../../../public/images/${slide}`)}
              alt={`porfolio ${slide}`}
              // layout="responsive"
              width={800}
              height={600}
              priority={idx === 0}
            />
          </div>
        ))}
        {/* <div style={{ height: "100vh", overflow: "hidden" }}>
          <div>
            <Document
              file="../../../public/portfolio.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
