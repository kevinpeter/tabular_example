AutoForm.addHooks('afUpdateAlbum', {

	onSuccess: function(formType, result) {

		$('#updateModal').modal('hide')

		var data = Albums.findOne({_id: Session.get('albumID')});

		var title = "Album is Updated";

		var msg = data.artistName + " / " + data.albumTitle;

		toastr.success(msg, title);

	}

});





Template.UpdateAlbumForm.helpers({

	selectedAlbumDoc: function(){

		return Albums.findOne({_id: Session.get('albumID')});

	}

});
