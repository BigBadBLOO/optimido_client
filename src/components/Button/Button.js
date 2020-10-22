import React from 'react'
import PropTypes from "prop-types";

Button.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  classNameText: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}

export default function Button({icon, type, text, onClick, className, disabled, classNameText}) {
  const classes = [
    'rounded-md px-2 py-1 m-2 place-content-center focus:outline-none'
  ]

  classes.push(className)

  if (type === 'primary') {
    classes.push('text-white bg-gold ')
  } else if (type === 'secondary') {
    classes.push('text-white bg-gray-500')
  } else if (type === 'withoutText') {
    classes.push('text-gray-600 bg-gray-200')
  }

  if(disabled){
    classes.push(' cursor-not-allowed bg-opacity-50')
  }
  return (
    <button className={classes.join(' ')} onClick={onClick} disabled={disabled}>
      {icon ? <i className="material-icons ml-auto float-left">{icon}</i> : ''}
      <span className={"my-auto mr-auto " + classNameText}>{text}</span>
    </button>
  )
}