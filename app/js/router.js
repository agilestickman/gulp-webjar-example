App.Routers.Navigation = Backbone.Router.extend({
  routes: {
    'import': 'importRoute',
    '': 'todoRoute'
  },
  importRoute: function() {
    console.log('in importRoute function');
    App.Table.render();
  },
  todoRoute: function(){
    console.log('in todo route');
    var view = new App.Views.Todo({
      el: $('#display')
    });
    view.render();
  }
});
