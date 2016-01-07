var Message = Backbone.Model.extend({

  url : 'http://localhost:3000/classes/room',

  defaults: {
    username: '',
    text: ''
  }
  
});
