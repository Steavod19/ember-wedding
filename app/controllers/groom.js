import Ember from 'ember';

export default Ember.Controller.extend({

  name: null,
  location: null,
  from: null,
  affiliation: null,
  info: null,
  twitter: null,
  actions: {

    steveCall: function() {
      this.setProperties({'name': "steve", 'location': "MA", 'from': 'MA',
      'affiliation': 'groom',
      'info': 'its steve'})
    }
  }
});
