/*globals module:true*/
module.exports = {
    app : {
        files : [
            {
                expand : true,
                cwd : 'app/',
                src: [
                    '**',
                    '!vendor/**'
                ],
                dest : 'temp/'
            }
        ]
    },
    build : {
        files : [
            {
                expand : true,
                cwd : 'temp/',
                src : [
                    '**',
                    '!**/*.scss', // ignore all SCSS files
                    '!**/*.jade', // ignore all jade files
                    '!paths.json',
                    '!index-ios.html'
                ],
                dest : 'build'
            }
        ]
    },
    ios :{
        files : [
            {expand : true, cwd : 'build/', src : [
                '**',
                '!views/**',
                '!router.js',
                '!routeDependencies.js',
                '!main-template.js',
                '!_viewTemplate/**',
                '!resources.js',
                '!app.js',
                '!couch/**',
                '!scanner/**'
                 // ignore all jade files
            ], dest : 'ios/www/app'}
        ]
    },
    vendor : {
        files : [
            {expand : true, cwd : 'app/', src : [
                // created dynamically
            ], dest : 'temp'}
        ]
    },
    deploy : {
        files : [
            {expand : true, cwd : 'app/', src : [
                '**',
                '!**/*.scss',
                '!**/*.js',
                '!vendor/**/*'
            ], dest : 'build'}
        ]
    }
};