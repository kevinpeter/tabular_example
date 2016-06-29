

AutoForm.addHooks('afInsertAlbumForm', {

	onSuccess: function(formType, result) {

		var title = "Album is Inserted"

		var msg = this.insertDoc.artistName + " / " + this.insertDoc.albumTitle;

		toastr.success(msg, title);

	}

});
