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







} // Meteor is client




//if (Meteor.isServer) {
//  Meteor.startup(function () {
//    // code to run on server at startup
//  });
//}
