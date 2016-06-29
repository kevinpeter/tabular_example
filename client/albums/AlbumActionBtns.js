Template.AlbumActionBtns.events({

	'click #btnUpdate': function(){

		if (Meteor.userId()) {

			Session.set("albumID", this._id);

		} else {

			var title = "Update not allowed";

			var msg = "Please login to update Albums";

			toastr.warning(msg, title);

		}

	},

	'click #btnRemove': function(){

		if (Meteor.userId()) {

			Session.set("albumID", this._id);

		} else {

			var title = "Remove not allowed";

			var msg = "Please login to remove Albums";

			toastr.warning(msg, title);

		}


	}

});
