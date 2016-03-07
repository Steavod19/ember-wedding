import Ember from 'ember';

export default Ember.Controller.extend({
  isSmNav: false,
  actions: {
    smNavClick: function() {
      this.toggleProperty('isSmNav');
    },
  },
});
