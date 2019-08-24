import React from "react"
import Bio from "../components/bio"
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
          padding: rhythm(0.5),
          margin: 0,
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
        }}
      >
        © {new Date().getFullYear()}, Built with a lot of patience and very
        little experience. <Bio />
      </div>
    )
  }
}

export default Footer
