import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
                name: null,
                startGame() {
                        var name = this.get('name');
                        if(name !== "" && name !== undefined) {
				sessionStorage.setItem('username', name);
                                this.transitionToRoute('question','1');
                        } else {
                                alert('Please enter your name');
                        }
           	}
	}
});
