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
	var content = this.template({ boards: this.collection });
    this.$el.html(content);
	
	// this.renderBoards()
	
    return this;
  },

  add: function() {
    var boardTitle = this.$('.add-board').val();
	console.log(boardTitle)
    this.collection.create({
      title: boardTitle
    });
  },
  
  // renderBoards : function() {
  // 	  this.collection.each(function(board) {
  // 		  var boardView = new Trellino.Views.BoardShowView({
  // 			  model: board
  // 		  });
  // 		  this.addSubView('.boards', view.render());
  // 	  }, this);
  // },
  
  delete: function() {
	  console.log("ddelte board")
  }
});