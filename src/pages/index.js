import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Ernest Saidu Kamara 🇸🇱🧑🏿‍💻🇳🇴" 
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
            <p>
                Ernest is an Android professional, with experience in developing and maintaining high quality scalable Android applications. His journey 
                in mobile application development started nine years ago, just after the birth of Apple's App Store.
            </p>

              <p>
              Following his passion for technology, mainly mobile was one of the best decisions he ever made. He deems himself attractive to the problem-solving aspect of technology and appreciates challenge seeking opportunities to learn and improve his skills. 
            </p>
            <p>
                Ernest is currently working as a Senior Android consultant at DNB(MinBank) via Shortcut, previously EVRY (Digital banking services) and Zedge Inc.
            </p>
            <p>
            In his spare time, Ernest enjoys taking photos and playing soccer with his kids when he is not co-organising meetups for his local developer community.
            </p>
        <h1>
          I blog too! {" "}
          <span role="img" aria-label="blog emoji">
            ✍🏿
          </span>
        </h1>
        <Link to="/blog/">
          <Button marginTop="35px">Vist my Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
