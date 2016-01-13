
import Ember from 'ember';

export default Ember.Controller.extend({
	selectedOption : '',
	score : 0,
	isTransitionToRoute : false,
	isTransitionToRouteChanged: Ember.observer('isTransitionToRoute', function() {
    // deal with the change
	if(this.get('isTransitionToRoute')) {
	this.transitionToRoute('result');
	}
  }),
	actions:{
        nextQuestion: function(page_id, answer, isPassButton){
                console.log('in nextQuestion' + this.get('selectedOption') + "..ans" + answer + "...." + isPassButton);
                if(this.get('selectedOption') === '' && !isPassButton) {
                        alert('Please select the answer');
                } else {
			if(this.get('selectedOption') === answer) {
				this.set('score', this.score+1);
				console.log("score...." + this.score);
			}
			this.set('selectedOption', '');
                        if(page_id === 5) {
                                this.transitionToRoute('result');
                        } else {
                                var nextQuestionId = page_id + 1;
                                this.transitionToRoute('question', nextQuestionId);
                        }
                }
        },
        quitGame: function(){
                console.log('in quitGame');
                this.transitionToRoute('index');
        },
        passQuestion: function(){
                console.log('in nextQuestion');
                this.transitionToRoute('question','2');
        },
	emptyScore: function(){
		console.log('in EmptyScore');
		this.set('score', '');
        }
	}

});
