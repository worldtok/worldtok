const mix = require('laravel-mix')
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.sass('sass/app.scss', 'public/assets/css/app.min.css')

if (!mix.inProduction()) {
  mix.sourceMaps()
  mix.webpackConfig({ devtool: 'inline-source-map' })
}
// do not process assets url
mix.options({ processCssUrls: false })
