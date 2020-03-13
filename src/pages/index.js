import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import featureImage from "../../static/images/hero.png";
import OurProduct from "../components/ourProduct";
import logo from "../../static/images/logo.png";
import facebook from "../../static/images/taggers/media/Facebook.png";
import googleAds from "../../static/images/taggers/media/Google-Ads.png";
import instagram from "../../static/images/taggers/media/Instagram.png";
import kakao from "../../static/images/taggers/media/Kakao.png";
import youtube from "../../static/images/taggers/media/Youtube.png";
import facebookPartner from "../../static/images/taggers/partner/Facebook.png";
import googlePartner from "../../static/images/taggers/partner/Google.png";

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

    <div className={"all-in-one-place"}>
      <div className={"container"}>
        <div className={"all-in-one-place__content"}>
          <h2>All in one place</h2>
          <p>페이스북, 인스타그램, 구글, 유튜브, 카카오까지, <br />한 곳에서 만들고 관리하세요!</p>
          <div>
            <img alt={"Facebook"} src={facebook} />
            <img alt={"GoogleAds"} src={googleAds} />
            <img alt={"Instagram"} src={instagram} />
            <img alt={"Kakao"} src={kakao} />
            <img alt={"Youtube"} src={youtube} />
          </div>
        </div>
      </div>
    </div>

    <div className={"partner"}>
      <div className={"container"}>
        <div className={"partner__content"}>
          <h2>태거스는 구글 & 페이스북의 공식 파트너사입니다.</h2>
          <div>
            <img alt={"FacebookPartner"} src={facebookPartner} />
            <img alt={"GooglePartner"} src={googlePartner} />
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
