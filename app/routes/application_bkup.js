export default Ember.Route.extend({
  model() {
    this.store.pushPayload({
      data: [{
        question_id: 1,
        type: 'questions',
        attributes: {
          question: 'Fewer Moving Parts',
          options: 'David Bazan'
        }
      }, {
        question_id: 2,
        type: 'questions',
        attributes: {
          question: 'Calgary b/w I Can\'t Make You Love Me/Nick Of Time',
          options: 'Bon Iver'
        }
      }]
    });
  }
});
