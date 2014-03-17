window.Trellino.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
	this.boards = options.boards;
  },

  routes: {
    "": "boardIndex",
    "boards/:id": "boardShow"
  },

  boardIndex: function() {
    var indexView = new Trellino.Views.BoardIndexView({
      collection: Trellino.boards
    });

    this._swapView(indexView);
  },
  
  

  boardShow: function(id) {
	  var that = this
	  this._getBoard(id, function(board) {
	      var showView = new Trellino.Views.BoardShowView({
			collection: Trellino.boards,
			model: board
	      });
  
	      that._swapView(showView);
	  })
  },
  
  _getBoard: function (id, callback) {
	  var that = this
	  var board = Trellino.boards.get("id")
	  if (!board) {
		  board = new Trellino.Models.Board({
			  id: id
		  });
		  board.collection = this.boards
		  board.fetch({
			  success: function () {
				  that.boards.add(board)
				  callback(board)
			  }
		  });
	  } else {
		  board.fetch()
		  callback(board)
	  }
  },
  
  // _getPost: function (id, callback) {
  //   var that = this;
  //   var post = PostApp.posts.get(id);
  //   if (!post) {
  //     post = new PostApp.Models.Post({
  //       id: id
  //     });
  //     post.collection = this.posts;
  //     post.fetch({
  //       success: function () {
  //         that.posts.add(post);
  //         callback(post);
  //       }
  //     });
  //   } else {
  //     callback(post);
  //   }
  // },

  _swapView: function(newView) {
    this.currentView && this.currentView.remove();
    this.currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }
});