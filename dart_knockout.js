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
      var gameName = prompt("Name your game.");
      Games.insert({"score": 5,"name": gameName});
    },

    'click #deletegame': function () {

      Games.remove(Games.findOne()._id);
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
