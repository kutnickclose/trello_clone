window.Trellino.Views.CardShow = Backbone.View.extend({
	template: JST["cards/show"],
	
	events: {
		"click .deleteCard" : "deleteCard"
	},
	
	initialize: function() {

	},
	
	render: function() {
		var content = this.template({
			card: this.model,
		})
		this.$el.html(content);
		return this
	},
	
	deleteCard: function() {
		this.model.destroy()
	}
	
	
	
	// addCard: function() {
	// 	var cardTitle = this.$(".add-card").val();
	// 	
	// 	this.model.cards().create({
	// 		title: cardTitle,
	// 		rank: this.model.cards().length + 1,
	// 		list_id: this.model.id
	// 	});
	// },
	// 
	// deleteList: function() {
	// 	this.model.destroy()
	// },
	// 
	// renderCards: function() {
	//         this.model.cards().each(function (card) {
	//           var view = new Trellino.Views.ListShow({
	//             model: card
	//           });
	//           this.addSubView('.cards', view.render());
	//         }, this);
	// }
	
	
	
})