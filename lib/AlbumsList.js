TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.AlbumsList = new Tabular.Table({
  name: "Great Albums List",
  collection: Albums,
  columns: [
    {data: "artNr", title: "Art.Nr", class: "col-md-1"},
    {data: "artistName", title: "Artist", class: "col-md-3"},
    {data: "albumTitle", title: "Title", class: "col-md-4"},
    {data: "inStock", title: "In stock", class: "col-md-1"},
    {data: "backOrdersPossible", title: "Backorders Possible", class: "col-md-1"},
    {data: "price", title: "Price", class: "col-md-1"},
    {
      tmpl: Meteor.isClient && Template.AlbumActionBtns, class: "col-md-1"
    }

  ]
});
