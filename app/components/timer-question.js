import Ember from 'ember';
//import Formatter from 'ember-cli-timer/utils/timeformatter';
import Timer from 'ember-cli-timer/components/x-timer';

export default Timer.extend({
	startTimeStamps: 2*60*1000,
	run: function(){
    var self = this;
    var startTimeStamp = this.get("startTimeStamps");
    this.set('timerId', Ember.run.later(this, function() {
     var timeElapsed = startTimeStamp - 1000;
      var secs = timeElapsed / 1000;
      self.set("duration", this.getTimefromSecs(secs, "MM:SS"));
	this.set("startTimeStamps", timeElapsed);
	var duration = this.get("duration");
	if(duration === "00:00") {
		console.log("..." + duration);
                alert("times up !!!");
                this.willDestroyElement();
		//this.transitionToRoute('result');
		this.set('isTransitionToRoute', true);	
	} else {
      		self.run();
	}
    }, 1000));  
  },

willDestroyElement: function() {
    var timerId = this.get("timerId");
   var duration = this.get("duration");
        console.log("....." + duration + "..." + timerId);
         Ember.run.cancel(timerId);
	 this.set('timerId', null);
  },
getTimefromSecs: function(seconds, format){
    if(format === "seconds"){
      return seconds;
    }
    var m = Math.floor(seconds / 60);
    var s = Math.floor(seconds % 60);
    m = "0" + m;
    s = s < 10 ? "0" + s : s;
    		return m + ":" + s;
  },
	getSecs: function(time){
    var arr = time.split(':');
    var h = arr[0];
    var m = arr[1];
    var s = arr[2]; 
    return (parseFloat(h) * 3600 + parseFloat(m) * 60 + parseFloat(s));
  },
  actions : {
	
stop: function() {
	console.log("innnn");
	this.willDestroyElement();
}
}

  
});
