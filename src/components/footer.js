import React from "react"
import { rhythm } from "../utils/typography"

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
          margin: 0,
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
        }}
      >
        © {new Date().getFullYear()}, built with much more patience than
        experience.
      </div>
    )
  }
}

export default Footer
