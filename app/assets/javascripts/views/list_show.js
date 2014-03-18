window.Trellino.Views.ListShow = Backbone.CompositeView.extend({
	template: JST["lists/show"],
	
	events: {
		"click .addCard" : "addCard",
		"click .deleteList" : "deleteList",
		"click .deleteCard" : "deleteCard"
	},
	
	initialize: function() {
		this.listenTo(this.model, "add sync", this.render);
		this.listenTo(this.model.cards(), "add remove sync change:rank", this.render);
	},
	
	render: function() {
		var content = this.template({
			list: this.model,
		})
		this.$el.html(content);
		
		this.renderCards();
		
		var that = this
		this.$(".cards").sortable({
			cursor: "move",
			opacity: 0.3,
			connectWith: ".cards",
  	      stop: function (event) {
  	        that._realignCard($(event.target));
  	      }
		});
			
		return this
	},
	
    _realignCard: function ($ul) {
		var listCards = $ul.find('h4');
	  
		var that = this
		var rankNum= 1;
	  
		$(listCards).each(function (index, item) {
			if ($(item).hasClass('card_title')) {
				var card = that.model.cards().get($(item).data('id'));
				card.set({
					rank: rankNum
				});
				card.save();
				rankNum++;
			}
		});
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
		this.model.cards().sort();
        this.model.cards().each(function (card) {
          var view = new Trellino.Views.CardShow({
            model: card
          });
          this.addSubView('.cards', view.render());
        }, this);
	}
	
})