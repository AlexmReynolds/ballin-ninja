/*globals module:true*/
module.exports = {
    files : [
        'app/**/*.js',
        '!app/vendor/**/*.js',
        '!app/_viewTemplate/**',
        '!app/main-template.js'
    ],
    options: {
        jshintrc: '.jshintrc'
    }
};