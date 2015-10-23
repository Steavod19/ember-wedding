import Ember from 'ember';

export default Ember.Controller.extend({

weddingParty: true,
name: null,
location: null,
from: null,
affiliation: null,
info: null,
twitter: null,


actions: {
  // groomCall: function() {
  //   this.set('weddingParty', true)
  //   // this.set('infoShow', true)
  // },
  // brideCall: function() {
  //   this.set('weddingParty', false)
  //   // this.set('infoShow', true)
  // },
  

},

people: [
Ember.Object.create({
    person: {
    name: 'Steve',
    location: 'Mass',
    from: 'MA',
    affiliation: 'groom',
    info: 'its steve',
    twitter: 'twitter.com'
  }
}),
Ember.Object.create({
    person: {
    name: 'jeff',
    location: 'georgia',
    from: 'NH',
    affiliation: 'groom',
    info: 'its jeff',
    twitter: 'twitter.com'
  }
}),
Ember.Object.create({
    person: {
    name: 'trent',
    location: 'whereever',
    from: 'VT',
    affiliation: 'groom',
    info: 'its trent',
    twitter: "twitter.com",
  }
})
]


});
