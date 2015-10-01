# Sass

Sass/scss files go here. Processed css ends up in the assets/css directory.

The grunt tasks are set up to only minify when running `grunt deploy` and they overwrite the unminified files.

Running `composer install` or `composer update` will run `grunt deploy`. If you wish to have unminified files (like after you set up your local instance initially, or have to run composer update) you can simply run `grunt` and the default task will re-compile without minifying.
