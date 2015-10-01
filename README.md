# workflow
Toward a better workflow.

## What Is It?
A test repository for workflow suggestions. Initialized using [10up's](http://10up.com/) [wp-make](https://github.com/10up/generator-wp-make), then we customized the folder layout.

## Objectives:
- To organize and minify all our assets (css, javascript, images).
- To modularize our grunt files to make maintenance simpler.
- To remove the need for committing any compiled code.
- To switch between minified and unminified based on environment.
- To ease the process of commiting and deployment.

## Requirements
Node.js

## Installation
1. Clone this repository.
2. Change to the workflow (or whatever you named it) directory: `cd workflow`
3. Install the grunt dependencies: `npm install`
4. Run your first compile: `composer update` (will create minified files)
5. Profit!

## How Do I Use It?
### Locally:
While working on your local instance, just run `grunt` or `grunt watch` when you change or add any assets (css, javascript, images).

### Staging _or_ "Live" Server:
After deploy, run `composer install` or `composer update` and all of the files will be compiled for you.

**Note:** If you prefer to compile locally (for peace of mind), you can run the same command locally and then push your files up via FTP or your favorite flavor of file transmission.

## What Does It Do?
Processed css (from Sass in `assets/css/sass`) ends up in the `assets/css` directory.

Processed javascript ends up in the `assets/js` directory. The `assets/js/vendor` directory is not processed by default.

Minified images end up in the `assets/images` directory.

The grunt tasks are set up to only minify when running `grunt deploy` and they **overwrite** the unminified files. This removes the requirement for conditional includes: no more _"include the unminified on local, the minified on staging or a live server"_ - just include the file. It will be compiled _(and sourceMapped!)_ appropriately.

Thanks to [Composer Grunt bridge](https://github.com/johnpbloch/composer-grunt-bridge), running `composer install` or `composer update` will run `grunt deploy`. This allows us to deploy and compile on deploy. No need to push those compiled files around at all! Push your repo and run composer update.

If you wish to have unminified files (like after you set up your local instance initially, or have to run composer update) you can simply run `grunt` and the default task will re-compile, **overwriting** the compiled files without minifying.
