import mongoose from 'mongoose';
import '../models/Card';

const Card = mongoose.model('Card');

export function setUpConnection() {
   mongoose.connect('mongodb://localhost/cards');
}

export function cardsList(sortType) {
   let sort = {};
   switch (sortType) {
      case 'saved-date':
         sort = { savedDate: -1 };
         break;
      case 'nickname':
         sort = { "user.name": 1 };
         break;
      default:
         sort = { created_at: -1 }
         break;
   }
   return Card.find().sort(sort);
}

export function addCard(data) {
   const card = new Card(data);
   return card.save();
}

export function removeCard(id) {
   return Card.findById(id).remove();
}