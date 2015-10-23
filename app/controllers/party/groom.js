import Ember from 'ember';

export default Ember.Controller.extend({

  name: 'Steve',
  location: "MA",
  from: 'Weymouth, MA',
  affiliation: 'Groom',
  img: 'https://s3.amazonaws.com/wedding-site-images/stevemac.png',
  info: 'some more stuff some more stuff some more stuff some more stuff some more stuff some more stuff',


  actions: {

    steveCall: function() {
      this.setProperties({'name': "Steve", 'location': "MA", 'from': 'Weymouth, MA',
      'affiliation': 'Groom', 'info': 'its steve', 'img': 'https://s3.amazonaws.com/wedding-site-images/stevemac.png'})
    },
    jeffCall: function() {
      this.setProperties({'name': "Jeff", 'location': "Somewhere, GA", 'from': 'NH(?)',
      'affiliation': 'Groom', 'img': 'https://s3.amazonaws.com/wedding-site-images/jeff.jpg',
      'info': 'some more stuff some more stuff some more stuff some more stuff some more stuff some more stuff'})
    },
    trentCall: function() {
      this.setProperties({'name': "Trent", 'location': "Milwaukee", 'from': 'Burlington, VT',
      'affiliation': 'Groom', 'img': 'https://s3.amazonaws.com/wedding-site-images/trent.jpg',
      'info': 'some more stuff some more stuff some more stuff some more stuff some more stuff some more stuff'})
    },
    adamCall: function() {
      this.setProperties({'name': "Adam", 'location': "Newburyport, MA", 'from': 'NHish',
      'affiliation': 'Groom', 'img': 'https://s3.amazonaws.com/wedding-site-images/adam.jpg',
      'info': 'some more stuff some more stuff some more stuff some more stuff some more stuff some more stuff'})
    },
    peteCall: function() {
      this.setProperties({'name': "Peter", 'location': "HipsterLand, VT", 'from': 'Vergennes, VT',
      'affiliation': 'Groom', 'img': 'https://s3.amazonaws.com/wedding-site-images/peter.jpg',
      'info': 'some more stuff some more stuff some more stuff some more stuff some more stuff some more stuff'})
    }
  }
});
