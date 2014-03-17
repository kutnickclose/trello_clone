window.Trellino = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    Trellino.boards = new Trellino.Collections.Boards();
    Trellino.boards.fetch({
      success: function(boards) {
		console.log("hello?")
        new Trellino.Routers.AppRouter({
          $rootEl: $('#content'),
		  boards: Trellino.boards
        });
        Backbone.history.start();
      },
	  
	  error: function() {
		  console.log("fail")
	  }
	  
    });
  }
};

$(document).ready(function(){
  Trellino.initialize();
});
