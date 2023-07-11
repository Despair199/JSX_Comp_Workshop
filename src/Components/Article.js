import React from 'react'
import { PropTypes } from 'prop-types'

const Article = (props) => {
  return (
    <div>
        <h2>{props.name}</h2>
        <h3>{props.city}</h3>
        <p>Country: {props.country}</p>

        {props.children}
    </div>
  )
}


Article.propTypes = {
    name: PropTypes.string
}


    Article.defaultProps = {
        country: "Tunisia"
    }
export default Article