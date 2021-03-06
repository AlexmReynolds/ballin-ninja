/*global module:false, require:false*/
module.exports = function (grunt) {

    'use strict';

    var _ = grunt.util._,
        config = {};

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.loadTasks('tasks');

    // load grunt Config. All config can be found in tasks/options
    grunt.initConfig(_.extend(config, loadConfig('./initConfig/')));

    grunt.registerTask('test', 'Build and watch task', [
        'jshint',
        'sass:application',
        'connect:tests',
        'watch'
    ]);

    grunt.registerTask('test-cli', 'Build and watch task', [
        'jshint',
        'sass:application',
        'shell:testPhantom'
    ]);

    function loadConfig(files) {
        var path = require('path'),
            object = {};

        grunt.file.recurse(files, function callback(abspath, rootdir, subdir, filename) {
            var name = path.basename(filename, path.extname(filename)),
                required = require(path.resolve('.', abspath));

            if (_.isFunction(required)) {
                required = required(grunt);
            }
            object[name] = required;
        });

        return object;
    }
};