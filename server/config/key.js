if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
    console.log("Prod mode");
} else {
    module.exports = require('./dev');
    console.log("Dev mode");
}