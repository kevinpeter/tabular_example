Meteor.publish("singleAlbum", function (id) {
    return Albums.find({_id: id});
});
