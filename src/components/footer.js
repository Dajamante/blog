import React from "react"
import Bio from "../components/bio"

class Footer extends React.Component {
  render() {
    return (
      <div id="footer" style={{ margin: 0, textAlign: "center" }}>
        © {new Date().getFullYear()}, Built with a lot of patience and very
        little experience.
        <div style={{ margin: 0, textAlign: "center" }}>
          {" "}
          <Bio style={{ margin: 0, textAlign: "center" }} />
        </div>
      </div>
    )
  }
}

export default Footer
