const { MongoClient, ObjectID } = require('mongodb');
const MONGOID = process.env.MONGOID;

const uri = `mongodb+srv://${MONGOID}@cluster0.j3vho.mongodb.net/mydb?retryWrites=true&w=majority`;

exports.deleteAppointment = async (request, response) => {
    const { id } = request.params;

    console.log('DELETE api/appointments/id called...', id);

    const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await mongoClient.connect();
    
    var dbo = mongoClient.db("mydb");
    // find all
    var o_id = new ObjectID(id);
    const result = await dbo.collection("appointments")
            .deleteOne({ "_id": o_id });
    console.log(result);
    response.json(result);

    mongoClient.close();
};
