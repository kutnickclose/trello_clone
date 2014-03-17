window.Trellino.Collections.Lists = Backbone.Collection.extend({
    initialize: function(models, options) {
      this.board = options.board;
      return options;
    },
	
	model: Trellino.Models.List,
	
	url: function () {
		return this.board.url() + "/lists"
	},
	
    comparator: function (list) {
      return list.get('rank');
    }
	
})