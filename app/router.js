import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('party', function() {
    this.route('groom', {});
    this.route('bride', {});
  });
  this.route('logistics');
  this.route('registry');
});


export default Router;
