module.exports = function (sails) {

    var Mopidy = require("mopidy");

    var mopidy = new Mopidy({
      webSocketUrl: "ws://localhost:6680/mopidy/ws/"
    });

    return {
        Mopidy,
        mopidy,
    };
};
