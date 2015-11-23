if (Meteor.isClient) {

	Template.register.events({
		'submit form' : function(event) {
			event.preventDefault();
			var email = $('[name=email]').val();
			var password = $('[name=password]').val();
			Accounts.createUser({
				email: email,
				password: password
			});
			Router.go('home');
		}

	});

	Template.login.events({
		'submit form' : function(event) {
			event.preventDefault();
			var email = $('[name=email]').val();
			var password = $('[name=password]').val();
			Meteor.loginWithPassword(email, password);
		}
	});
}