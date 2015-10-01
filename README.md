# workflow
Test files for workflow suggestions.

Initialized using [wp-make](https://github.com/10up/generator-wp-make), then customized the folder layout.

The object here is to remove the need for committing any compiled code and to switch between minified and unminified based on environment.

 Processed css (from Sass) ends up in the assets/css directory.
 Processed js ends up in the assets/js directory. The js/vendor directory is not processed by default.
 Minified images end up in the assets/images directory.

 The grunt tasks are set up to only minify when running `grunt deploy` and they overwrite the unminified files.

 Running `composer install` or `composer update` will run `grunt deploy`. If you wish to have unminified files (like after you set up your local instance initially, or have to run composer update) you can simply run `grunt` and the default task will re-compile without minifying.
