window.Trellino.Views.BoardShowView = Backbone.CompositeView.extend({
	template: JST["boards/show"],
	
	initialize: function () {
		this.model.lists().fetch();
		this.listenTo(this.model, "sync add remove", this.render)
		this.listenTo(this.model.lists(), "sync add remove", this.render)
		// this.listenTo(this.model.lists(), "add", this.addList);
		// this.listenTo(this.model.lists(), "remove", this.removeList)
	},
	
	events: {
		"click .addList" : "createList",
		"click .deleteBoard" : "deleteBoard"
	},
	
	render: function () {
		var renderedContent = this.template({
			board: this.model,
			// lists: this.model.lists(),
		})
		this.$el.html(renderedContent)
		
		this.renderLists();
		
		return this
	},
	
    renderLists: function () {
      this.model.lists().each(function (list) {
        var view = new Trellino.Views.ListShow({
          model: list
        });
        this.addSubView('#lists', view.render());
      }, this);
    },
	
	createList: function() {		
		var listTitle = this.$(".add-list").val();
		this.model.lists().create({
			title: listTitle,
			board_id: this.model.id,
			rank: this.model.lists().length+1
		});
	},
	
	removeList: function(list) {
		var listShowView = _(this.subviews()["#lists"]).find(function(subview) {
			return subview.model == list;
			    });
		console.log(listShowView.model)
		this.removeSubView("#lists", listShowView);
		this.render()
	},
	
	
	///test if realign board works
	
	deleteBoard: function(){
		this.remove();
		this.model.destroy({
			success: function() {
			  Backbone.history.navigate('#', {trigger: true})
			}
		});
	}
	
})