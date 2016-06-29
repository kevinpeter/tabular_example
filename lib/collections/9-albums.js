


//Albums = new Meteor.Collection("albums");

if (Meteor.isClient) {

  Session.setDefault('albumID', 0);

}

// Define the schema
// This schema is for aldeed:TABULAR

AlbumSchema = new SimpleSchema({
  artNr: {
    type: Number,
    label: "Art. Nr"
  },
  inStock: {
    type: Number,
    label: "In Stock"
  },
  albumTitle: {
    type: String,
    label: "Title",
    max: 200
  },
  artistName: {
    type: String,
    label: "Artist",
    max: 200
  },
  backOrdersPossible: {
    type: Boolean,
    label: "BackOrders Possible",
  },
  price: {
    type: Number,
    label: "Price",
  }
});




/*****************************************************************************/
/* Client and Server Methods */
/*****************************************************************************/
