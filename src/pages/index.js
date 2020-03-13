import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import featureImage from "../../static/images/hero.png";
import thumbnailEvent from "../../static/images/feature-event.png";
import thumbnailBoard from "../../static/images/feature-board.png";
import thumbnailNews from "../../static/images/feature-news.png";
import thumbnailTeams from "../../static/images/feature-team.png";
import thumbnailStaff from "../../static/images/feature-user.png";
import OurProduct from "../components/ourProduct";

const IndexPage = () => (
  <Layout>
    <SEO title="쇼핑몰 그로스해킹은 태거스" />

    <div className={"page-header home"}>
      <h1>Data-driven Marketing Solution <br />
        for E-Commerce</h1>
      <p>이커머스 쇼핑몰 광고의 모든 어려움을 해결해주는 솔루션은 오직 태거스 뿐입니다.</p>
      <img alt={"Dashboard"} src={featureImage} />
    </div>

    <OurProduct />

    <div className={"call-to-action"}>
      <div className={"container"}>
        <div className={"call-to-action__content"}>
          <h2>1 month Free-trial</h2>
          <p>이 모든 기능을 한 달간 무료로 체험하실 수 있습니다!</p>
        </div>

        <div className={"button"}>
          <a href="https://app.histaff.io" target={"_blank"}>무료 한 달 체험하기</a>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
