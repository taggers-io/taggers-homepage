import React from "react";
import thumbnailEvent from "../../static/images/feature-event.png";
import thumbnailBoard from "../../static/images/feature-board.png";
import thumbnailNews from "../../static/images/feature-news.png";

const OurProduct = () => (
  <div className={"container"}>
    <div className={"features"}>
      <div className={"feature__item"}>
        <div className={"row"}>
          <div className={"col-6 first"}>
            <div className={"thumbnail"}>
              <img alt={"Event"} src={thumbnailEvent} />
            </div>
          </div>

          <div className={"col-6"}>
            <div className={"feature__content"}>
              <h2>통합 픽셀 설치</h2>
              <p>30여가지의 사용자 행동 분석과 정확한 광고 성과 추적을 위해 태거스 통합 픽셀을 설치합니다.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={"feature__item"}>
        <div className={"row"}>
          <div className={"col-6"}>
            <div className={"feature__content"}>
              <h2>광고 운영 최적화</h2>
              <p>한 곳에서, 한 눈에. 모든 매체와 여러 유형의 광고를 만들고 성과를 분석할 수 있습니다.</p>
            </div>
          </div>

          <div className={"col-6 first"}>
            <div className={"thumbnail"}>
              <img alt={"Board"} src={thumbnailBoard} />
            </div>
          </div>
        </div>
      </div>

      <div className={"feature__item"}>
        <div className={"row"}>
          <div className={"col-6 first"}>
            <div className={"thumbnail"}>
              <img alt={"News"} src={thumbnailNews} />
            </div>
          </div>

          <div className={"col-6"}>
            <div className={"feature__content"}>
              <h2>소재 간편 제작</h2>
              <p>총 17개의 템플릿 제공으로 쉽고 빠르게, 한번에 모든 매체 규격에 맞는 소재 제작이 가능합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OurProduct;
