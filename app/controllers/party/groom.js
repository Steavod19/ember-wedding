import Ember from 'ember';

export default Ember.Controller.extend({

  // name: 'Steve',
  // location: "MA",
  // from: 'Weymouth, MA',
  // affiliation: 'Groom',
  // img: 'https://s3.amazonaws.com/wedding-site-images/stevemac.png',
  // info: 'Steve Mac and I grew up across the street from each other in Weymouth. We met in kindergarden and also went to CSC together. He also broke my nose once.',


  actions: {
    budCall: function() {
      this.setProperties({'name': "Bud", 'location': "FL", 'from': 'Weymouth, MA',
      'affiliation': 'Groom', 'info': 'My quirky oldest brother', 'img': 'https://s3.amazonaws.com/wedding-site-images/bnb.jpg'});
    },
    billCall: function() {
      this.setProperties({'name': "Bill", 'location': "VA", 'from': 'Weymouth, MA',
      'affiliation': 'Groom', 'info': 'My quirky middle brother', 'img': 'https://s3.amazonaws.com/wedding-site-images/billnpey.jpg'});
    },
    steveCall: function() {
      this.setProperties({'name': "Steve", 'location': "MA", 'from': 'Weymouth, MA',
      'affiliation': 'Groom', 'info': 'Steve Mac and I grew up across the street from each other in Weymouth. We met in kindergarden and also went to CSC together. He also broke my nose once', 'img': 'https://s3.amazonaws.com/wedding-site-images/stevemac.png'});
    },
    jeffCall: function() {
      this.setProperties({'name': "Jeff", 'location': "Somewhere, GA", 'from': 'NH(?)',
      'affiliation': 'Groom', 'img': 'https://s3.amazonaws.com/wedding-site-images/jeff.jpg',
      'info': 'Classes from Berts to Babs. Jeff \'was\' the trouble of CSC. He doesn\'t date boys that wear red hats because he is one.'});
    },
    trentCall: function() {
      this.setProperties({'name': "Trent", 'location': "Milwaukee", 'from': 'Burlington, VT',
      'affiliation': 'Groom', 'img': 'https://s3.amazonaws.com/wedding-site-images/trent.jpg',
      'info': 'Another art nerd with me. Trent was a pretty good designer and he had a sweet man bun for a while.'});
    },
    adamCall: function() {
      this.setProperties({'name': "Adam", 'location': "Newburyport, MA", 'from': 'NHish',
      'affiliation': 'Groom', 'img': 'https://s3.amazonaws.com/wedding-site-images/adam.jpg',
      'info': 'My freshman roommate at CSC. My usual partner in crime except when he\'s stealing snacks from the lodge'});
    },
    peteCall: function() {
      this.setProperties({'name': "Peter", 'location': "HipsterLand, VT", 'from': 'Vergennes, VT',
      'affiliation': 'Groom', 'img': 'https://s3.amazonaws.com/wedding-site-images/peter.jpg',
      'info': 'Dependable Petey a Graphic designer with me. Last to go to bed, first at church the next morning, probably because he takes so many naps. '});
    }
  }
});
