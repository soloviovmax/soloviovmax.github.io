import React, { Component } from 'react'

import firebase from '../../firebase.js'
import Button from '../Button/Button.jsx'
import './CreateForm.css';

export default class CreateForm extends Component {
   constructor(props) {
      super(props);

      this.state = {
         value: "",
      }

      this.onSubmit = this.onSubmit.bind(this);
      this.onChange = this.onChange.bind(this);
   }

   onSubmit(e) {
      e.preventDefault();
      
      if (this.state.value === "") {
         return;
      }

      const itemsRef = firebase.database().ref('items');
      const item = {
         title: this.state.value,
         description: ''
      }
      
      itemsRef.push(item).catch(error => console.log(error));

      this.setState({ value: '' });
   }

   onChange(e) {
      this.setState({ value: e.target.value });
   }

   render() {
      return (
         <form className="create-form" onSubmit={this.onSubmit}>
            <input
               onChange={this.onChange} 
               className="create-form__input" 
               type="text" 
               value={this.state.value} 
               placeholder="New task"
               autoFocus
            />
            <Button icon="add" title="Add to list" />
         </form>
      )
   }
}
