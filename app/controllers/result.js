import Ember from 'ember';

export default Ember.Controller.extend({
	questionController: Ember.inject.controller('question'),
  	//question: Ember.computed.reads('questionController'),
	actions:{
		playAgain: function() {
                	this.transitionToRoute('question','1');
		},
		newGame: function() {
			sessionStorage.setItem('username', '');
			this.transitionToRoute('index');
		}
	}
			
});
