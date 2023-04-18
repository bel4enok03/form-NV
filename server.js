const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://Chuvakova:px87fbhx4usGDaV8@cluster0.lvaqyxd.mongodb.net/?retryWrites=true&w=majority');

const messageSchema = {
	name: String,
	email: String,
	message: String,
};

const Message = mongoose.model('MyMessages', messageSchema);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
	let newMessage = new Message({
		name: req.body.name,
		email: req.body.email,
		message: req.body.message,
	});
	newMessage.save();
	res.sendFile(__dirname + '/answer.html');
});

app.listen(8000, () => {
	console.log('Server is work');
});
