import React, { Component } from 'react';
import './App.css';

import firebase from './firebase.js'
import CreateForm from './components/CreateForm/CreateForm.jsx'
import ToDoItem from './components/ToDoItem/ToDoItem.jsx'
import Preloader from './components/Preloader/Preloader.jsx'
import Button from './components/Button/Button.jsx'


class App extends Component {
   constructor() {
      super();

      this.state = {
         toDoItems: null,
      }

      this.removeAllCompleted = this.removeAllCompleted.bind(this);
   }

   componentDidMount() {
      const itemsRef = firebase.database().ref('items');
      itemsRef.on('value', (snapshot) => {
         let items = snapshot.val();
         let newState = [];
         for (let item in items) {
            newState.push({
               id: item,
               title: items[item].title,
               description: items[item].description,
               isComplete: items[item].isComplete,
               icon: items[item].icon,
            });
         }
         this.setState({
            toDoItems: newState
         });
      });
   }

   removeAllCompleted() {
      this.state.toDoItems.filter(item => item.isComplete === true).forEach(item => {
         const itemRef = firebase.database().ref(`/items/${item.id}`);

         itemRef.remove()
         .catch(error => console.log(error))
         .then(function() {
            console.log("Remove succeeded.")
         })
      })
   }

   render() {

      const { toDoItems } = this.state;

      const toDo = toDoItems && toDoItems.filter(item => item.isComplete !== true);
      const done = toDoItems && toDoItems.filter(item => item.isComplete === true);

      return (
         <div className="to-do-list">
            <div className="container">
               <div className="tile">
                  <CreateForm />
               </div>

               {toDo && toDo.length !== 0 &&
                  <div className="tile">
                     {
                        toDo.reverse().map(item => {
                           return <ToDoItem { ...item } key={item.id} />
                        })
                     }
                  </div>}

               { toDoItems ? <div className="clean"></div> : <Preloader /> }

               {done && done.length !== 0 &&
                  <div className="tile tile--done">
                     {
                        done.reverse().map(item => {
                           return <ToDoItem { ...item } key={item.id} />
                        })
                     }
                     {
                        done.length > 1 ? <Button
                           className="remove-all"
                           icon="delete_forever"
                           btnText="Remove all"
                           color="#fff"
                           bg="#ef5350"
                           onClick={this.removeAllCompleted}
                        /> : null
                     }
                  </div>}
            </div>
         </div>
      );
   }
}

export default App;
