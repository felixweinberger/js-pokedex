const path = require('path'); 
const mongoose = require('mongoose');

const Pokemon = mongoose.model('Pokemon', {
  id: Number,
  name: String,
  sprite: String,
});

mongoose.connect('mongodb://localhost/chat_server', {useNewUrlParser: true});



// const model = {
//   getMessages () {
//     return Message.find({});
//   },
//   addMessage (msg) {
//     const newMsg = new Message({
//       authorId: msg.authorId,
//       content: msg.content,
//       timeStamp: msg.timeStamp
//     });
//     return newMsg.save();
//   }
// };
