import React from "react"
import { rhythm } from "../utils/typography"
import { GoOctoface } from "react-icons/go"
import { FaTwitter } from "react-icons/fa"
import styles from "./headerAndFooter.module.css"

class Footer extends React.Component {
  render() {
    return (
      <div
        id="footer"
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          marginTop: `auto`,
          padding: rhythm(1),
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
          bottom: 0,
        }}
      >
        © {new Date().getFullYear()}, built with much more patience than
        experience.
        {` `}
        <a
          href="https://github.com/Dajamante/"
          className={styles[`footer__icon`]}
        >
          <GoOctoface />
        </a>
        {` `}
        <a
          href="https://twitter.com/bestcataccount"
          className={styles[`footer__icon`]}
        >
          <FaTwitter />
        </a>
      </div>
    )
  }
}

export default Footer
