/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql, Link} from "gatsby"

import Header from "./header"
import "../../static/styles/main.scss"
import logo from "../../static/images/logo.svg"
import iconTwitter from "../../static/images/icon-twitter.svg"
import iconLinkedin from "../../static/images/icon-linkedin.svg"
import iconGitHub from "../../static/images/icon-github.svg"
import iconInstagram from "../../static/images/icon-instagram.svg"

const Layout = ({children}) => (
    <StaticQuery query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `} render={data => (
        <>
            <Header siteTitle={data.site.siteMetadata.title}/>
            <main>{children}</main>
            <footer>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-5"}>
                            <div className={"widget__item"}>
                                <div className={"logo"}>
                                    <Link to="/" title={"HiStaff"}>
                                        <img alt={"Logo"} src={logo}/>
                                    </Link>
                                </div>

                                <div className={"about"}>
                                    {/*<p>A software that was created with the goal of solving the problems of Human Resources in small and medium-sized businesses.</p>*/}
                                    <p>(주) 태거스</p>
                                    <p>대표: 진희종</p>
                                    <p>사업자 등록번호: 516-81-00635</p>
                                    <p>사업장: 서울특별시 서초구 서초대로 78길 22, 현대카드 스튜디오 블랙</p>
                                </div>
                            </div>
                        </div>

                        <div className={"col-2"}>
                            <div className={"widget__item"}>
                                <ul className={"links"}>
                                    <h4>Taggers</h4>
                                    <ul>
                                        <li><Link to="/feature" title={"Feature"}>Feature</Link></li>
                                        <li><Link to="/service" title={"Service"}>Service</Link></li>
                                        <li><Link to="/about" title={"About Us"}>About</Link></li>
                                        <li><a href={"https://histaff.io/blog"}>Blog</a></li>
                                    </ul>
                                </ul>
                            </div>
                        </div>

                        <div className={"col-2"}>
                            <div className={"widget__item"}>
                                <div className={"links"}>
                                    <h4>Support</h4>
                                    <ul>
                                        <li><Link to="/contact" title={"Contact Us"}>Contact</Link></li>
                                        <li><Link to="/privacy" title={"Privacy Policy"}>Privacy</Link></li>
                                        <li><Link to="/terms" title={"Terms Of Use"}>Terms Of Use</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={"col-3"}>
                            <div className={"widget__item"}>
                                <div className={"social"}>
                                    <a href="https://twitter.com/histaffio" target={"_blank"} title={"Twitter"}><img alt={"Twitter"} src={iconTwitter}/></a>
                                    <a href="https://www.linkedin.com/company/histaff/" target={"_blank"} title={"LinkedIn"}><img alt={"LinkedIn"} src={iconLinkedin}/></a>
                                    <a href="https://github.com/histaff" target={"_blank"} title={"GitHub"}><img alt={"GitHub"} src={iconGitHub}/></a>
                                    <a href="https://www.instagram.com/histaff.io/" target={"_blank"} title={"Instagram"}><img alt={"Instagram"} src={iconInstagram}/></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"copyright"}>
                        <p>Copyright {new Date().getFullYear()}, {` `} <a href="https://histaff.io" title={"HiStaff"}>Taggers</a>. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )}/>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
