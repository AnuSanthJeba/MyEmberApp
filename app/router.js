import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  //  this.route('question');
  this.route('question', { path: '/question/:id' });
  this.route('result');
});

export default Router;
