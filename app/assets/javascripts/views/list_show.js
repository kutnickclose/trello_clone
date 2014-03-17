window.Trellino.Views.ListShow = Backbone.View.extend({
	template: JST["lists/show"],
	
	events: {
		"click .addCard" : "addCard"
	},
	
	initialize: function() {
		this.listenTo(this.model, "add sync", this.render);
		this.listenTo(this.model.cards(), "add sync", this.render);
	},
	
	render: function() {
		var content = this.template({
			list: this.model,
		})
		this.$el.html(content)
		return this
	},
	
	addCard: function() {
		var cardTitle = this.$(".add-card").val();
		
		this.model.cards().create({
			title: cardTitle,
			rank: this.model.cards().length + 1,
			list_id: this.model.id
		});
	}
	
})