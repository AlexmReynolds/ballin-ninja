ballin-ninja
============

Shell script to setup dev environment for javscript app stack

##Bower
Most of us use bower to manager plugins. Fill the bower file with your depenedencies or replace it with your own.

##NPM
Most of us use node if youre building your app with grunt. Use the package.json file or use your own.

##Gems
I use thor and sass gems but if you don't have any gems your don't need the gemfile.

The setup script is listed in package.json. This means when you do a NPM install it will run the script. The script will do our globals packages, install all bower components, instal gems, install git submodules, and then setup a precommit hook to run mocha tests.

###The grunt test-cli
This is the command I use to run my mocha unit tests. You can replace this line in the setup script with the command needed to run your unit tests.
