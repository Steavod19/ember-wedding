import Ember from 'ember';

export default Ember.Controller.extend({

  name: 'Bonna',
  location: "Paraguay",
  from: 'Helena, MT',
  affiliation: 'Bride',
  info: 'its Bonna',
  img: 'https://s3.amazonaws.com/wedding-site-images/bonnaprofile.png',


  actions: {

    bonnaCall: function() {
      this.setProperties({'name': "Bonna", 'location': "Paraguay", 'from': 'Helena, MT',
      'affiliation': 'Bride', 'info': 'its Bonna', 'img': 'https://s3.amazonaws.com/wedding-site-images/bonnaprofile.png'});
    },
    joannaCall: function() {
      this.setProperties({'name': "JoAnna", 'location': "Helena, MT", 'from': 'Helena, MT',
      'affiliation': 'Bride', 'img': 'https://s3.amazonaws.com/wedding-site-images/JoVery.jpg',
      'info': 'Joanna'});
    },
    hawleyCall: function() {
      this.setProperties({'name': "Hawley", 'location': "Worcester, MA", 'from': 'RENO!',
      'affiliation': 'Bride', 'img': 'https://s3.amazonaws.com/wedding-site-images/hawley.jpg',
      'info': 'its Hawley'});
    },
    kimCall: function() {
      this.setProperties({'name': "Kim", 'location': "Spokane, WA", 'from': 'Helena, MT',
      'affiliation': 'groom', 'img': 'https://s3.amazonaws.com/wedding-site-images/Kimmie.jpg',
      'info': 'its Kim'});
    }
  }
});
