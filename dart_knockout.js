Games = new Mongo.Collection("games");




if (Meteor.isClient) {
  // counter starts at 0
  //Session.setDefault('counter', 0);
  //
  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });




  Template.body.helpers({
    gamesx: function () {
      result = Games.find({}).fetch();
      return result;
    }
  });

  Template.body.events({
    'click #newgame': function () {
      // increment the counter when button is clicked
      //Session.set('counter', Session.get('counter') + 1);
      //alert("Ready");
      Games.insert({"score": 5,"name": "bens first room"});
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });


}




//if (Meteor.isServer) {
//  Meteor.startup(function () {
//    // code to run on server at startup
//  });
//}
