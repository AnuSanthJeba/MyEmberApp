import DS from 'ember-data';

export default DS.Model.extend({
  	questionname: DS.attr('string'),
 	options: DS.attr(),
 	questionid: DS.attr('number'),
	answer: DS.attr('string')  
});
