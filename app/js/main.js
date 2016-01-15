var App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Items: null,
  Table: null,
  Navigation: null,
  TrackingId: null
};

$(function() {

  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }

  App.TrackingId = readCookie("trackingid");

  //Show the banner if this the first time
  if (readCookie("newsplit") === 'true') {
    //$( "#banner" ).removeClass( "hide");

    $('#modal1').openModal();

  }



  console.log(readCookie("split"));
  console.log(readCookie("newsplit"));
  console.log(readCookie("trackingid"));

  // App.Issues = new App.Collections.Issue();
  //
  // App.Issues.fetch();
  //
  // App.Table = new App.Views.Table({
  //   el: $('#display'),
  //   model: App.Issues
  // });
  //
  // App.Navigation =  new App.Routers.Navigation();
  // Backbone.history.start();

});
