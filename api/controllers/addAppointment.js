const { MongoClient } = require('mongodb');
const MONGOID = process.env.MONGOID;

const uri = `mongodb+srv://${MONGOID}@cluster0.j3vho.mongodb.net/mydb?retryWrites=true&w=majority`;

exports.addAppointment = async (request, response) => {
    console.log('api/appointment called...');

    const appointment = request.body.appointment;
    console.log('Adding appointment : ', appointment);

    const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await mongoClient.connect();
    
    var dbo = mongoClient.db("mydb");
    await dbo.collection("appointments")
        .insertOne(appointment);
    console.log("1 document inserted");

    //response.json(appointment);

    if (mongoClient.isConnected()) {
        console.log("closing connection");
        mongoClient.close(); 
    }
};
