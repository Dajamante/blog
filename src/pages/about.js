import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Bio from "../components/bio"
import styles from "./about.module.css"
import wrongwrongwrong from "../images/wrongwrongwrong.png"

export default ({ data }) => (
  <div>
    <Layout>
      <div>
        <h3>
          About those <div className={styles[`sad__word`]}>(many, MANY)</div>{" "}
          {data.site.siteMetadata.title}
          <div className={styles[`sad__word`]}>(s) </div>...
        </h3>
        <img
          className={styles[`centered_image_with_table`]}
          src={wrongwrongwrong}
          alt="Same problem submitted several times with different mistakes"
        />
      </div>

      <h4> ... and their author.</h4>

      <h3>What is that all about?</h3>
      <p>
        This blog is a collection of solutions to competitive programming
        problems from different judges online, mostly
        <a href="www.kattis.com"> kattis</a>.
      </p>

      <p>
        I struggled with most of those and they taught me a lot (painfully). My
        solutions are in no way a set of best practices or best solutions (thank
        Goodness!). Competitive programming is just a way to learn programming
        and have fun.
      </p>
      <h3>Why competitive programming?</h3>
      <p>
        It is an amazing way to learn. You are given a problem, and you must
        translate it into programming concepts and datastructures. You see
        immediately if you understood correctly, because if not ... well, it's
        just wrong answer!
      </p>
      <p>
        Solutions are usually very short and straightforward (I did not say
        simple!), so you don't need to design a whole program with lots of
        classes to get things done. Just the core stuff.
      </p>
      <p>The kick of getting it right is the best feeling in the world!</p>

      <h3>About this site</h3>
      <p>
        This blog is made with Gatsby. I wanted something fast, minimal and
        easy, so I considered WordPress. But my friend advised against it (...
        <i>
          "wordpress is a monster of possible mistakes layered on top of each
          other!"
        </i>{" "}
        were his exact words.)
      </p>
      <p>
        I really don't regret Gatsby. It's fast, it has hot reload, and the
        community is great. Problem is:{" "}
        <strong>the learning curve is steep. And downwards sometimes! </strong>
        So expect some agressive maintenance/upgrading along the ride.
      </p>

      <h3>About me</h3>
      <p>
        I live in Stockholm, and some days my programming go as smoothly as
        A&#65284;AP's routine visit to our beautiful city.
      </p>
      <p>
        My French is also very good, so my dream is to make it to the National
        French Team of Sweden (of whatever is available...){" "}
        <span role="img" aria-label="rocket" className={styles[`emo`]}>
          {" "}
          🚀
        </span>
        <span role="img" aria-label="french" className={styles[`emo`]}>
          {" "}
          🇫🇷
        </span>
        <span role="img" aria-label="swedish" className={styles[`emo`]}>
          {" "}
          🇸🇪
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
