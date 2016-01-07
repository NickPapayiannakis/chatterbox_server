var Messages = Backbone.Collection.extend({

  model: Message,
  url : 'http://localhost:3000/classes/room',

  load: function(){
    this.fetch();
  },

  parse: function(response, options) {
    return response.results.reverse();
  }
});


//{data: {order: '-createdAt'}}