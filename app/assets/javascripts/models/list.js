window.Trellino.Models.List = Backbone.Model.extend({
    parse: function (resp) {
      if(resp.cards) {
        this.cards().set(resp.cards, { parse: true });
        delete resp.cards;
      }
      return resp;
    },

    cards: function () {
      if(!this._cards) {
        this._cards = new Trellino.Collections.Cards([], { list: this });
      }
      return this._cards;
    },
})