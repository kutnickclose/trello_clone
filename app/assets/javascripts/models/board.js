window.Trellino.Models.Board = Backbone.Model.extend({
  urlRoot: '/api/boards',
  
  initialize: function() {
    this.lists();
  },
  
  parse: function(response) {
    if(response['lists']){
      this.lists().set(response['lists']);
      delete response['lists'];
    }
    return response;
  },
  
  lists: function() {
    if(!this.get('lists')) {
      var lists = new Trellino.Collections.Lists([], {
        board: this
      });
      this.set({
        lists: lists
      });
    }
    return this.get('lists')
  }
  
})