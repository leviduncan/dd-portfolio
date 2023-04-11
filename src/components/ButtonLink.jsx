import React from 'react'

function ButtonLink(props) {
  const { href, text, blank } = props
  return (
    <a href={href} className="btn btn-primary" target={blank} rel="noreferrer">{ text }</a>
  )
}

export default ButtonLink