import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "./about.module.css"

export default ({ data }) => (
  <Layout>
    <h3>
      About those <div className={styles[`sad__word`]}>(Many many)</div>{" "}
      {data.site.siteMetadata.title}
      <div className={styles[`sad__word`]}>(s) </div>.
    </h3>
    <h4> And their author.</h4>

    <p>
      This blog is a collection of programming problems that I struggled with or
      found really fun, and problems who taught me a lot.
    </p>

    <p>
      Those solutions are in no way (thank goodness!) a set of best practices.
      It is just a way to learn programming and have fun.
    </p>

    <p>
      More about me: I live in Stockholm, and sometimes my programming go as bad
      as the usual night out of A&#65284;AP Rocky in our beautiful town. My
      French is also very good so my dream is to make it to the National French
      Team of Sweden (of whatever is left...){" "}
      <span role="img" aria-label="rocket" className={styles[`emo`]}>
        {" "}
        🚀
      </span>
      .
    </p>

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
