import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <StaticQuery
      query={graphql`
        query {
          allStrapiDish {
            edges {
              node {
                id
                name
                price
              }
            }
          }
        }
      `}
      render={(data) => {
        {console.log(data)}
        return(
          <div>hello</div>
        )
      }}
      />
  </Layout>
)

export default IndexPage


{/* <h1>Hi people</h1>
<p>Welcome to your new Gatsby site.</p>
<p>Now go build something great.</p>
<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  <Image />
</div>
<Link to="/page-2/">Go to page 2</Link> */}