

Template.Albums.onCreated(function () {

  Meteor.subscribe("singleAlbum", Session.get('albumID'));

});
