import React from "react"
import { kebabCase } from "lodash"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styles from "./index.module.css"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <div>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title="All posts" />
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug}>
                <header>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small className={styles[`date__container`]}>
                    {node.frontmatter.date}
                  </small>
                  {node.frontmatter.tags ? (
                    <div className={styles[`tags__container`]}>
                      Tags:
                      <ul className={styles[`tag__list`]}>
                        {node.frontmatter.tags.map((tag, index) => (
                          <li
                            className={styles[`tag__items`]}
                            key={tag + `tag`}
                          >
                            <Link
                              to={`/tags/${kebabCase(tag)}/`}
                              style={{ textDecoration: "none" }}
                            >
                              #{tag}
                              {node.frontmatter.tags.length === index + 1
                                ? null
                                : ","}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </article>
            )
          })}
        </Layout>
      </div>
    )
  }
}
export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
