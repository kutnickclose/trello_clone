window.Trellino.Collections.Cards = Backbone.Collection.extend({
    initialize: function (models, options) {
      this.list = options.list;
    },

  	model: Trellino.Models.Card,

  	url: function () {
      return 'api/lists/' + this.list.id + '/cards';
    },

    comparator: function (card) {
      return card.get('rank');
    }
	
})