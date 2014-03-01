/*globals module:true*/
module.exports = {
    'testPhantom' : {
        options : {
            stdout : true,
            stderr : true
        },
        command : 'mocha-phantomjs tests/index.html'
    }