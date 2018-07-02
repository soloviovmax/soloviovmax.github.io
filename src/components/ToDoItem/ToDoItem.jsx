import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ToDoItem.css';

import firebase from '../../firebase.js'
import Button from '../Button/Button.jsx'
import ToDoItemIcon from '../ToDoItemIcon/ToDoItemIcon.jsx'

export default class ToDoItem extends Component {
   constructor(props) {
      super(props);

      this.state = {
         isOpen: false,
         descriptionValue: props.description,
         titleValue: props.title,
      }

      this.onChangeDescription = this.onChangeDescription.bind(this);
      this.onChangeTitle = this.onChangeTitle.bind(this);
      this.removeItem = this.removeItem.bind(this);      
      this.isComplete = this.isComplete.bind(this);
   }
   
   isComplete(e) {
      e.stopPropagation();

      const itemRef = firebase.database().ref(`/items/${this.props.id}`);

      itemRef.update({
         isComplete: !this.props.isComplete,
      })
      .catch(error => console.log(error))
   }

   removeItem(e) {
      e.stopPropagation();

      const itemRef = firebase.database().ref(`/items/${this.props.id}`);
      itemRef.remove()
      .catch(error => console.log(error))
      .then(function() {
         console.log("Remove succeeded.")
      })
   }

   onChangeTitle(e) {
      if ( this.state.titleValue !== e.target.value) {
         this.setState({ titleValue: e.target.value });
      }

      const itemRef = firebase.database().ref(`/items/${this.props.id}`);

      itemRef.update({
         title: this.state.titleValue,
      })
   }

   onChangeDescription(e) {
      if ( this.state.descriptionValue !== e.target.value) {
         this.setState({ descriptionValue: e.target.value });
      }

      const itemRef = firebase.database().ref(`/items/${this.props.id}`);

      itemRef.update({
         description: this.state.descriptionValue,
      })
   }

   render() {

      const { isOpen, descriptionValue, titleValue } = this.state;
      const { id, isComplete, icon } = this.props;
      return (
         <div className="to-do-item">
            <div
               className="to-do-item__header"
               onClick={() => this.setState({ isOpen: !this.state.isOpen })}
               style={(isComplete && !isOpen) ? {opacity: ".4"} : {}}
            >
               <Button
						icon="done_outline" 
						onClick={this.isComplete}
						title={`Mark as ${isComplete ? 'uncompleted' : 'completed'}`}
					/>
               <div className="to-do-item__title-wrap">
                  <div className="to-do-item__title" data-value={titleValue}>
							<input 
								type="text" 
								value={titleValue}
								onClick={e => e.stopPropagation()}
								onChange={this.onChangeTitle}
								className={`${isComplete ? "complete" : "" }`}
							/>
                  </div>
               </div>
               <ToDoItemIcon icon={icon} itemId={id} iconIsHidden={isComplete && !isOpen} />
               <Button
						icon={isOpen ? "keyboard_arrow_up" : 'keyboard_arrow_down'} 
						bg="transparent" 
						color="#006064" 
						title="Open Description"
					/>
            </div>
            
            {
               isOpen && (
                  <div className="to-do-item__descriprion">
                     <textarea value={descriptionValue} onChange={this.onChangeDescription} className="to-do-item__textarea" rows="5" />
							<Button
								icon="delete_forever" 
								onClick={this.removeItem}
								title="Remove"
								bg="transparent"
								color="#ef5350"
								noPadding
							/>
                  </div>
               )
            }

         </div>
      )
   }
}

ToDoItem.propTypes = {
   id: PropTypes.string,
   title: PropTypes.string,
   description: PropTypes.string,
   icon: PropTypes.string,
   isComplete: PropTypes.bool,
}