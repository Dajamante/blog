import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "./about.module.css"
import wrongwrongwrong from "../images/wrongwrongwrong.png"

export default ({ data }) => (
  <div>
    <Layout>
      <div>
        <h3>Tellus Kodare</h3>
        <img
          className={styles[`centered_image_with_table`]}
          src={wrongwrongwrong}
          alt="Same problem submitted several times with different mistakes"
        />
      </div>

      <p>
        Här hittar du (snart) alla program som Tellus Kodare gjorde med
        respektive datum!
      </p>

      <h4>{data.allMarkdownRemark.totalCount} Posts about Tellus Kodare </h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title} - {node.frontmatter.date}
            </h3>
          </Link>
        </div>
      ))}
      <p>
        {" "}
        <Link to={`/`}>Back to title </Link>
      </p>

      <br />
    </Layout>
  </div>
)

export const query = graphql`
  query tellusQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "Tellus" } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            tags
            description
          }
        }
      }
    }
  }
`
