import React from "react"

import { rhythm } from "../utils/typography"
import Header from "../components/header_components/header"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props

    return (
      <div>
        <Header />
        <main
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(0 / 5)} ${rhythm(1 / -1)}`,
          }}
        >
          {children}
        </main>
      </div>
    )
  }
}

export default Layout
