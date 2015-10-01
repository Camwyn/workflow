# Project Images

Only source images (i.e. non-sprites, PSDs, raw photos) should be placed in this directory.  Source files are meant to serve as a backup for any images that can be edited by an end user.

 Minified images end up in the assets/images directory.

 The grunt tasks are set up to only minify when running `grunt deploy` and they overwrite the unminified files.

 Running `composer install` or `composer update` will run `grunt deploy`. There is no grunt task to remove minified images.
