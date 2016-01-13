
import Ember from 'ember';

export default Ember.Controller.extend({
	questionController: Ember.inject.controller('question'),
  	question: Ember.computed.reads('questionController'),
	actions:{
		playAgain: function() {
		//	this.controllerFor('question').send('emptyScore');
			console.log('in nextQuestllliii' + this.question.score);
                	this.transitionToRoute('question','1');
		},
		newGame: function() {
			console.log('in newGame');
			sessionStorage.setItem('username', '');
			this.transitionToRoute('index');
		}
	}
			
});
