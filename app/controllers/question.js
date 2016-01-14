import Ember from 'ember';

export default Ember.Controller.extend({
	selectedOption : '',
	score : 0,
	isTransitionToRoute : false,
	isTransitionToRouteChanged: Ember.observer('isTransitionToRoute', function() {
		if(this.get('isTransitionToRoute')) {
			this.transitionToRoute('result');
		}
  	}),
	actions:{
        	nextQuestion: function(page_id, answer, isPassButton){
                	console.log('Selected Option : ' + this.get('selectedOption') + " Ans : " + answer + " IsPassButton : " + isPassButton);
                	if(this.get('selectedOption') === '' && !isPassButton) {
                        	alert('Please select the answer');
                	} else {
				if(page_id === 1) {
					this.set('score', 0);
				}
				if(this.get('selectedOption') === answer) {
					this.set('score', this.score+1);
				}
				this.set('selectedOption', '');
                        	if(page_id === 10) {
                                	this.transitionToRoute('result');
                        	} else {
                                	var nextQuestionId = page_id + 1;
                                	this.transitionToRoute('question', nextQuestionId);
                        	}
                	}
        	},
        	quitGame: function(){
                	this.transitionToRoute('index');
        	},
        	passQuestion: function(){
                	this.transitionToRoute('question','2');
        	}
	}

});
