import React from 'react'
import PropTypes from 'prop-types'
import MaterialIcon from 'material-icons-react';
import './Button.css';

export default function Button({ icon, btnText, bg, color, onClick, title, noPadding, className }) {
  return (
      <button
         className={`button ${noPadding ? "-no-padding" : ""} ${className}`} 
         onClick={onClick} 
         style={{backgroundColor: bg }} 
         title={title}
      >
         <MaterialIcon icon={icon} color={color} />
         {btnText && <span style={{ color: `${color}` }}>{btnText}</span>}
      </button>
  )
}

Button.propTypes = {
   icon: PropTypes.string,
   bg: PropTypes.string,
   color: PropTypes.string,
   title: PropTypes.string,
   btnText: PropTypes.string,
   className: PropTypes.string,
}

Button.defaultProps = {
   bg: '#006064',
   color: '#FAFAFA',
};