import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "./about.module.css"
import edit_kerstin from "../images/editetkerstin.jpg"
import everyone from "../images/ttlemonde.jpg"

export default ({ data }) => (
  <div>
    <Layout>
      <div>
        <h3 className={styles[`tellus__titel`]}>Tellus Programmeringklubb</h3>
        <p>
          Tellus is a programming club for girls (and their moms) started in
          September 2019. We meet once a week and do fun things together with
          Python (at the moment{" "}
          <span role="img" aria-label="sweden">
            {" "}
            🐍💻
          </span>
          ).{" "}
        </p>
        <p>
          All the information below is in Swedish!
          <span role="img" aria-label="sweden">
            {" "}
            🇸🇪
          </span>
        </p>
        <div className={styles[`participant_picture`]}>
          <img src={edit_kerstin} alt="Edit and Kerstin" />
          <img src={everyone} alt="Almost everyone hanging out together" />
        </div>
      </div>
      <div>
        <p>
          Här hittar du några program som Tellus Kodare gjorde med respektive
          datum!
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

        <h4>{data.allMarkdownRemark.totalCount} Aktiviteter</h4>
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
      </div>
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
