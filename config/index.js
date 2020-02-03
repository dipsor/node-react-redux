const configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return 'mongodb+srv://' + configValues.uname +':' + configValues.pwd + '@mongo-test-mgvgk.mongodb.net/test?retryWrites=true&w=majority';
    },
    secretOrKey: "secret"
}
