import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Bio from "../components/bio"
import styles from "./about.module.css"
import wrongwrongwrong from "../images/wrongwrongwrong.png"

export default ({ data }) => (
  <div>
    <Layout>
      <h3>
        About those <div className={styles[`sad__word`]}>(Many many)</div>{" "}
        {data.site.siteMetadata.title}
        <div className={styles[`sad__word`]}>(s) </div>...
      </h3>
      <div>
        <img
          src={wrongwrongwrong}
          alt="same problem submitted several times with different mistakes"
        />
      </div>
      <h4> ... and their author.</h4>

      <p>
        This blog is a collection of solutions to programming problems from
        different competitive programming websites, mostly
        <a href="www.kattis.com"> kattis</a>.
      </p>

      <p>
        I struggled with most of those and they taught me a lot (painfully). My
        solutions are in no way (thank goodness!) a set of best practices or
        best solutions. It is just a way to learn programming and have fun.
      </p>

      <p>
        More about me: I live in Stockholm, and some days my programming go as
        smoothly as A&#65284;AP's routine visit to our beautiful city.
      </p>
      <p>
        My French is also very good, so my dream is to make it to the National
        French Team of Sweden (of whatever is available...){" "}
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

      <br />
      <div className={styles[`bio__frame`]}>
        <Bio />
      </div>
    </Layout>
  </div>
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
