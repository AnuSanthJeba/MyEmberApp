import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
//	this.store.createRecord('
	var name = sessionStorage.getItem("username");
	if(name === null) {
		console.log("user name is empty");
		this.transitionTo('index');
	} else {
		var quesJSON = this.store.findRecord('question', params.id);
		return quesJSON;
	}
  	}
    /*	actions:{
	nextQuestion: function(page_id, selectedOption){
		console.log('in nextQuestion' + this.get('myRadio')); 
		console.log('in nextQuestion' + selectedOption);
		if(selectedOption === undefined) {
			alert('Please select the answer');
		} else {
			if(page_id === 5) {
				this.transitionTo('result');
			} else {
				var nextQuestionId = page_id + 1;
				this.transitionTo('question', nextQuestionId);
			}
		}
	},
	quitGame: function(){
                console.log('in quitGame');
                this.transitionTo('index');
        },
	passQuestion: function(){
                console.log('in nextQuestion');
                this.transitionTo('question','2');
        },
	checkEmpty: function() {
		console.log(".....");
		var selectedOption = this.selectedOption;
		if(selectedOption === 'undefined' || selectedOption === '') {
			return true;
		} else { 
			console.log(selectedOption + "..." );
			return false;	
		}
	},
	emptyOption: function() {
		this.selectedOption = '';
	}
	} */
});
