import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import informationImage from "../../static/images/Information-document.svg";
import eventImage from "../../static/images/Event-managment.svg";
import ProductivityImage from "../../static/images/Increase-Productivity.svg";
import happinessImage from "../../static/images/Make-happiness.svg";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />

    <div className={"page-header"}>
      <h2>Our Service</h2>
      <p>오직 이커머스 쇼핑몰을 위한 광고 솔루션, Taggers<br />
        개발자, 마케터, 디자이너 없이도 누구나 손쉽게 데이터를 추적하고, 광고를 만들고, 운영할 수 있습니다.</p>
    </div>

    <div className={"container"}>
      <div className={"targets"}>
        {/*<div className={"title"}>*/}
        {/*  <h2>Our Service</h2>*/}
        {/*</div>*/}

        <div className={"row"}>
          <div className={"col-6"}>
            <div className={"item"}>
              <img alt={"Information"} src={informationImage} />
              <h3>Self-Serve + Support</h3>
              <p>개발자, 마케터, 디자이너가 없는 경우 <br />
                모든 매체의 광고를 관리하기에 손이 부족한 경우<br />
                광고 운영보다 쇼핑몰 운영에 집중하고 싶은 경우
              </p>
            </div>
          </div>

          <div className={"col-6"}>
            <div className={"item"}>
              <img alt={"Event"} src={eventImage} />
              <h3>Managed Service</h3>
              <p>기존 대행사의 단순 광고 집행 서비스에 불만족한 경우 <br />
                제대로 된 데이터 분석과 인사이트를 받고 싶은 경우<br />
                광고 대행을 넘어 그로스해킹 컨설팅을 경험하고 싶은 경우
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default AboutPage;
