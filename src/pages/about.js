import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>{data.site.siteMetadata.title} About Page</h1>
    <p>This is the about page.</p>
    <p>
      {" "}
      <Link to={`/`}>Back to title </Link>
    </p>
  </Layout>
)

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
