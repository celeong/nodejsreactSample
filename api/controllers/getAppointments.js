const { MongoClient } = require('mongodb');
const MONGOID = process.env.MONGOID;

const uri = `mongodb+srv://${MONGOID}@cluster0.j3vho.mongodb.net/mydb?retryWrites=true&w=majority`;

exports.getAppointments = async (request, response) => {
    console.log('api/appointments called...');
    // res.json(appointments);

    const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await mongoClient.connect();
    
    var dbo = mongoClient.db("mydb");
    // find all
    const result = await dbo.collection("appointments")
            .find({}).toArray();
            
    // console.log(result);
    response.json(result);
    mongoClient.close();
};
