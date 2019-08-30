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
    </p>

    <p>
      More about me: I live in Sweden, my French is very good, so I hope one day
      to make it to the National French Team of Sweden (of wherever there is
      room left...) <span className={styles[`emo`]}> 🚀</span>.
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
