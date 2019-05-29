import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CardSchema = new Schema({
   user: {
      type: Object,
   },
   'user.name': {
      type: String,
   },
   'user.screen_name': {
      type: String,
   },
   'user.profile_image_url': {
      type: String,
   },
   entities: {
      type: Object,
   },
   'entities.media': {
      type: Array,
   },
   'entities.media.$.type': {
      type: String,
   },
   'entities.media.$.media_url': {
      type: String,
   },
   text: {
      type: String,
   },
   created_at: {
      type: Date,
   },
   id_str: {
      type: String,
   },
   savedDate: {
      type: Date,
   }
})

mongoose.model('Card', CardSchema);