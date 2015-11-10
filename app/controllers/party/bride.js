import Ember from 'ember';

export default Ember.Controller.extend({

  name: 'Bonna',
  location: "Paraguay",
  from: 'Helena, MT',
  affiliation: 'Bride',
  info: 'While we initially met in high school youth group, our friendship was built on Morning Light coffee, eating ginger snacks, and singing along to HelloGoodbye while driving around Helena!',
  img: 'https://s3.amazonaws.com/wedding-site-images/bonnaprofile.png',


  actions: {

    bonnaCall: function() {
      this.setProperties({'name': "Bonna", 'location': "Paraguay", 'from': 'Helena, MT',
      'affiliation': 'Bride', 'info': 'While we initially met in high school youth group, our friendship was built on Morning Light coffee, eating ginger snacks, and singing along to HelloGoodbye while driving around Helena!', 'img': 'https://s3.amazonaws.com/wedding-site-images/bonnaprofile.png'});
    },
    joannaCall: function() {
      this.setProperties({'name': "JoAnna", 'location': "Helena, MT", 'from': 'Helena, MT',
      'affiliation': 'Bride', 'img': 'https://s3.amazonaws.com/wedding-site-images/JoVery.jpg',
      'info': 'JoAnna was Kyrstin’s first friend in kindergarten and their close friendship has lasted over the years!'});
    },
    hawleyCall: function() {
      this.setProperties({'name': "Hawley", 'location': "Worcester, MA", 'from': 'RENO!',
      'affiliation': 'Bride', 'img': 'https://s3.amazonaws.com/wedding-site-images/hawley.jpg',
      'info': 'Kyrstin dressed Hawley in Cuba and an instant friendship was born.'});
    },
    kimCall: function() {
      this.setProperties({'name': "Kim", 'location': "Spokane, WA", 'from': 'Helena, MT',
      'affiliation': 'Bride', 'img': 'https://s3.amazonaws.com/wedding-site-images/Kimmie.jpg',
      'info': 'We met in middle school confirmation, when Kim threw a Bible at a mutual friend. Our friendship has been sustained over the years by dancing to “A Friend Like Me” from Aladdin.'});
    }
  }
});
