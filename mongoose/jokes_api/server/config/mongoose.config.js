const mongoose = require("mongoose"); //importing mongoose

//mongoose connection here
mongoose.connect('mongodb+srv://root:root@clustermerncd.okb11.mongodb.net/jokesdb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));