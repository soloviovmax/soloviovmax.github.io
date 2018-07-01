import React, { Component } from 'react'
import PropTypes from 'prop-types'
import firebase from '../../firebase.js'
import onClickOutside from "react-onclickoutside";

import './ToDoItemIcon.css';

class ToDoItemIcon extends Component {
   constructor(props) {
      super(props);

      this.state = {
         isOpen: false,
      }

      this.openPopup = this.openPopup.bind(this);
      this.setNewIcon = this.setNewIcon.bind(this);
   }

   handleClickOutside = () => {
      this.setState({ isOpen: false });
   };

   openPopup(e) {
      e.stopPropagation();
      this.setState({ isOpen: !this.state.isOpen });
   };

   setNewIcon(newIcon) {
      if ( this.props.icon !== newIcon) {
         const itemRef = firebase.database().ref(`/items/${this.props.itemId}`);
         itemRef.update({
            icon: newIcon,
         })
      }
   };

   render() {
      const { isOpen } = this.state;
      const { icon, iconIsHidden } = this.props;

      if (iconIsHidden) {
         return null;
      }

      const icons = [
         'business-card',
         'notebook',
         'paper-clip',
         'paper-shredder',
         'pin',
         'post-it',
         'printer',
         'telephone',
         'trash-can',
      ]
      
      return (
         <div className="icon img-wrap" onClick={this.openPopup}>
            <img src={`/icons/${icon}.svg`} alt={icon} />
            {
               isOpen && <div className="pop-up">
                  {
                     icons.map(i => {
                        return <div className="img-wrap" key={i} onClick={() => this.setNewIcon(i)} ><img src={`/icons/${i}.svg`} alt={i} /></div>
                     })
                  }
               </div>
            }
         </div>
      )
   }
}
ToDoItemIcon.propTypes = {
   icon: PropTypes.string,
}
ToDoItemIcon.defaultProps = {
   icon: '',
}

export default onClickOutside(ToDoItemIcon);
