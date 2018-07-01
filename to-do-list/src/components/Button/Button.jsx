import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Button.css';

import MaterialIcon from 'material-icons-react';

export default class Button extends Component {
   render() {

      const { icon, btnText, bg, color, onClick, title, noPadding, className } = this.props;
      
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