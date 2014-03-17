window.Trellino.Views.BoardIndexView = Backbone.View.extend({
  template: JST['boards/index'],

  initialize: function() {
    this.listenTo(this.collection, 'sync add remove', this.render)
  },

  events: {
    'click .addBoard': 'add'
  },

  render: function() {
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
  }
});