const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db: any;

export default {
  connectToServer: async function (callback: any) {
    try {
      await client.connect();
    } catch (err) {
      console.error(err);
    }
    _db = client.db("propgo");
    return (_db === undefined ? false: true);
  },

  getDb: function (x?: any) {
    return _db;
  },
};
