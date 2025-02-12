const mongoose = require("mongoose");

const DbUrl = "mongodb+srv://hassanahmedadekunle1:Kunzzy_01@cluster.cjlx1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster";

const connectToDB =async () => {

    try {
        await  mongoose.connect(DbUrl);
        console.log("my database is ok");
    }
    catch (err) {
            console.log(err);
    }
};

module.exports = connectToDB;