window.Trellino.Views.ListShow = Backbone.CompositeView.extend({
	template: JST["lists/show"],
	
	events: {
		"click .addCard" : "addCard",
		"click .deleteList" : "deleteList",
		"click .deleteCard" : "deleteCard"
	},
	
	initialize: function() {
		this.listenTo(this.model, "add sync", this.render);
		this.listenTo(this.model.cards(), "add sync remove", this.render);
	},
	
	render: function() {
		var content = this.template({
			list: this.model,
		})
		this.$el.html(content);
		
		this.renderCards();
			
		return this
	},
	
	addCard: function() {
		var cardTitle = this.$(".add-card").val();
		
		this.model.cards().create({
			title: cardTitle,
			rank: this.model.cards().length + 1,
			list_id: this.model.id
		});
	},
	
	deleteList: function() {
		this.model.destroy()
	},
	
	renderCards: function() {
        this.model.cards().each(function (card) {
          var view = new Trellino.Views.CardShow({
            model: card
          });
          this.addSubView('.cards', view.render());
        }, this);
	}
	
})