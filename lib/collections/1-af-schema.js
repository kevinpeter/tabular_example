Albums = new Mongo.Collection("albums");

Albums.attachSchema(new SimpleSchema({

  artNr: {
    type: Number
  },
  inStock: {
    type: Number,
    min: 0
  },
  albumTitle: {
    type: String,
    max: 200
  },
  artistName: {
    type: String,
    max: 200
  },
  backOrdersPossible: {
    type: String,

    allowedValues: ['true', 'false'],
    autoform: {
      options: [
        {label: "Yes", value: "true"},
        {label: "No", value: "false"}
      ]
    }
  },
  price: {
    type: String
  }
}));

Albums.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});
