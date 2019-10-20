import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "./about.module.css"
import tellus_host from "../images/tellus_host.jpg"

export default ({ data }) => (
  <div>
    <Layout>
      <div>
        <h3 className={styles[`tellus__titel`]}>
          Tellus Kodare - Programmeringklubb
        </h3>
        <img
          className={styles[`centered_image_with_table`]}
          src={tellus_host}
          alt="Autumn tree with golden colors"
        />
      </div>

      <p>
        Här hittar du (snart) alla program som Tellus Kodare gjorde med
        respektive datum!
      </p>

      <h4>{data.allMarkdownRemark.totalCount} Tellus Kodare aktiviteter</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <p>
              {node.frontmatter.title} - {node.frontmatter.date}
            </p>
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
