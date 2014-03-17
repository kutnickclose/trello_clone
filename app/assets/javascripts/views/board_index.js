window.Trellino.Views.BoardIndexView = Backbone.View.extend({
  template: JST['boards/index'],

  initialize: function() {
    this.listenTo(this.collection, 'sync add remove', this.render)
  },

  events: {
    'click .addBoard': 'add',
	"click .deleteBoard" : 'delete'
  },

  render: function() {
	  // this.renderBoards()
    var content = this.template({ boards: this.collection });
    this.$el.html(content);
    return this;
  },

  add: function() {
    var boardTitle = this.$('.add-board').val();
	console.log(boardTitle)
    this.collection.create({
      title: boardTitle
    });
  },
  
  delete: function(event) {
	  console.log(event)
	  console.log("ddelte board")
  }
});