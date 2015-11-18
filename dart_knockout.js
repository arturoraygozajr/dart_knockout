Games = new Mongo.Collection("games");


if (Meteor.isClient) {

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
    }
  });


  Template.gametemplate.events({
    'click #deletegame': function () {
      //console.log(this);  // just print out the clicked game
      //Games.remove(Games.findOne()._id);  // remove one at random
      Games.remove(this._id);
      //console.log(this._id);
    }
  });










  // counter starts at 0
  //Session.setDefault('counter', 0);
  //
  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
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
