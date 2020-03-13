import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SlackHiStaffImage from "../../static/images/integration/slack-histaff.svg";
import thumbnailEventWebhook from "../../static/images/integration/slack-event-webhook.png";
import thumbnailNewsWebhook from "../../static/images/integration/slack-news-webhook.png";
import thumbnailNoteWebhook from "../../static/images/integration/slack-note-webhook.png";
import thumbnailGuid1 from "../../static/images/integration/slack-guid-1.png";
import thumbnailGuid2 from "../../static/images/integration/slack-guid-2.png";

const AboutPage = () => (
  <Layout>
    <SEO title="Feature" />

    <div className={"page-header"}>
      <img src={SlackHiStaffImage} />
      <h2>Feature</h2>
      <p>한 곳에서, 한 번에 관리하는 광고, 손쉽고 빠른 광고 관리 <br />
        태거스에서 제공하는 기능과 특징을 확인해 보세요.</p>
    </div>

    <div className={"container"}>
      <div className={"features"}>
        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Event"} src={thumbnailEventWebhook} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>통합 픽셀 설치</h2>
                <p>태거스는 온라인 쇼핑몰을 방문한 고객의 행동 데이터를 30여가지 이상 상세하게 수집하여 광고를 최적화합니다.<br /><br />
                  통합 픽셀 설치를 통하여 상세 페이지 조회, 장바구니 담기, 회원가입 등 광고를 통해 유입된 고객의 행동을 추적하고 분석할 수 있습니다.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>다양한 매체와 광고 지원</h2>
                <p>각 매체의 어렵고 복잡한 툴을 학습하실 필요 없습니다. <br />
                  태거스 솔루션으로 쉽고 간편하게 광고를 생성해 보세요. <br /> <br />
                  페이스북 카탈로그 캠페인부터 구글 다이나믹 광고까지. <br />
                  원하는 매체, 예산, 목표만 선택하세요!</p>
              </div>
            </div>

            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Board"} src={thumbnailNewsWebhook} />
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"News"} src={thumbnailNoteWebhook} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>캠페인 성과 리포트</h2>
                <p>모든 매체의 광고 성과를 태거스 솔루션을 통해 확인하고 분석할 수 있습니다. <br /><br />
                  태거스가 집행 가능한 모든 매체의 통합 리포트 기능으로, 각 매체에 로그인할 필요 없이 실시간 현재 성과를 빠르게 파악하여 광고를 최적화할 수 있습니다.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>상품 분석 리포트</h2>
                <p>광고를 통해 노출된 각 상품의 링크 클릭률, 구매 전환율 등 <br />
                  쇼핑몰의 구매 트렌드를 쉽게 확인할 수 있습니다.</p>
              </div>
            </div>

            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Board"} src={thumbnailNewsWebhook} />
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"News"} src={thumbnailNoteWebhook} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>유입 및 구매 리포트</h2>
                <p>고객의 방문부터 최종 구매에 이르기까지, 고객 및 쇼핑몰 내 구매 여정 데이터를 분석합니다. <br /><br />
                  시각화 지표를 통해 고객의 방문 유형, 구매 유형을 쉽고 빠르게 한 눈에 파악할 수 있습니다.<br />
                  또한 페이스북, 구글, 카카오 등 여러 매체를 통해 유입된 고객의 상세한 연령 및 성별 확인이 가능하며, 이를 활용하여 마케팅 고도화가 가능합니다.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>간편한 소재 에디터 기능</h2>
                <p>이미지 비율, 폰트, 색상 …<br />
                  광고 소재 제작에 너무 많은 시간을 뺏기고 있으신가요?<br />
                  태거스 솔루션에서 한 번에 간단하게 제작해보세요.<br /><br />
                  총 17개의 템플릿도 제공됩니다!</p>
              </div>
            </div>

            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Board"} src={thumbnailNewsWebhook} />
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"News"} src={thumbnailNoteWebhook} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>캠페인 자동 운영</h2>
                <p>광고주의 성과 목표와 예산에 따라, 적절한 타겟에게 <br />
                  적합한 상품과 최적의 광고 유형으로 캠페인을 자동 집행합니다. <br /> <br />
                  픽셀부터 소재, 캠페인 셋팅과 운영, 리포팅까지 <br />
                  그동안 원했던 퍼포먼스 광고, 데이터 광고의 모든 것을 <br />
                  하나의 서비스에서 이용해보세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={"call-to-action"}>
      <div className={"container"}>
        <div className={"call-to-action__content"}>
          <h2>1 month Free-trial</h2>
          <p>이 모든 기능을 한 달간 무료로 체험하실 수 있습니다!</p>
        </div>

        <div className={"button"}>
          <a href="https://advertiser.taggers.io/registration" target={"_blank"}>무료 한 달 체험하기</a>
        </div>
      </div>
    </div>
  </Layout>
);

export default AboutPage;
