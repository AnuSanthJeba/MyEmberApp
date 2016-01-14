import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
	var name = sessionStorage.getItem("username");
	if(name === null) {
		console.log("User name is empty");
		this.transitionTo('index');
	} else {
		var quesJSON = this.store.findRecord('question', params.id);
		return quesJSON;
	}
  	}
});
