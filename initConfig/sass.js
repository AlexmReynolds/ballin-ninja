/*globals module:true*/
module.exports = {
    application : { // Get and compile application.scss
        options : {
            style : 'nested',
            require : 'sass-globbing',
            sourcemap : true
        },
        files : {
            'app/application.css' : 'app/application.scss'
        }
    },
    redo : { // Get and compile application.scss
        options : {
            style : 'nested',
            require : 'sass-globbing',
            sourcemap : true
        },
        files : {
            'app/application.css' : 'app/application.scss'
        }
    }
};