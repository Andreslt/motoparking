var UserConstants = require("./UserConstants");
var UserClient = require("./UserClient");

var UserActions = {
  loadUser: function(userId) {
    this.dispatch(UserConstants.LOAD_USER, {});

    UserClient.loadUser(userId, function(returnedUser) {
      this.dispatch(UserConstants.LOAD_USER_SUCCESS, {user: returnedUser});
    }.bind(this), function(error) {
      this.dispatch(UserConstants.LOAD_USER_FAIL, {userId: userId, error: error});
    }.bind(this));
  }
};

module.exports = UserActions;
