import React from "react"

const ContentContainer = ({ children }) => {
  return (
    <div
      style={{
        width: `100%`,
        maxWidth: "1200px",
        margin: `0 auto`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
      }}
    >
      {children}
    </div>
  )
}

export default ContentContainer
