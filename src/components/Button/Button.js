import React from 'react'
import PropTypes from "prop-types";

Button.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default function Button({icon, type, text, onClick, className}) {
  const classes = [
    'rounded-md px-2 py-1 m-2 place-content-center focus:outline-none '
  ]

  classes.push(className)

  if (type === 'primary') {
    classes.push('text-white bg-gold ')
  }
  else if(type === 'secondary') {
    classes.push('text-white bg-gray-600')
  }
   else if(type === 'withoutText') {
    classes.push('text-gray-600 bg-gray-200')
  }
  return (
    <button className={classes.join(' ')} onClick={onClick}>
      {icon ? <i className="material-icons mx-1 float-left">{icon}</i> : ''}
      <span className="my-auto">{text}</span>
    </button>
  )
}