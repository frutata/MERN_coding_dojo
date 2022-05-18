const mongoose = require("mongoose"); //importing mongoose
const db_name = "jokesdb";

//mongoose connection here
mongoose.connect(`mongodb+srv://root:root@clustermerncd.okb11.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));