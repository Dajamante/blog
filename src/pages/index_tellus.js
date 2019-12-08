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
        <p>
          Tellus is a programming club for girls (and their moms) that I started
          in September 2019. All the information below is in Swedish!
          <span role="img" aria-label="sweden">
            {" "}
            🇸🇪
          </span>
        </p>
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
      <p>
        Vi följer boken{" "}
        <a href="https://www.bokus.com/bok/9789177797128/programmering-for-nyborjare-med-python/">
          Programmering för Nybörjare med Python
        </a>{" "}
        och{" "}
        <a href="https://nostarch.com/pythoncrashcourse2e">
          Python Crash Course.
        </a>
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
        <Link to={`/`}>Tillbaka </Link>
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
