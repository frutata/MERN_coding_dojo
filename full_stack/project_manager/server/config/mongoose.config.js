const mongoose = require("mongoose"); //importing mongoose
const db_name = "project_manager"

//mongoose connection here
mongoose.connect(`mongodb+srv://root:root@clustermerncd.okb11.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to the database: ${db_name}`))
    .catch(err => console.log(`Something went wrong when connecting to the database: ${db_name}`, err));