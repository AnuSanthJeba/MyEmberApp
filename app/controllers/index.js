
import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
                name: null,
                startGame() {
                        var name = this.get('name');
                        if(name !== "" && name !== undefined) {
                                console.log("name" + name);
				sessionStorage.setItem('username', name);
                                this.transitionToRoute('question','1');
                        } else {
                                alert('Please enter your name');
                                console.log("empty" + name);
                        }
           	}
	}
});
