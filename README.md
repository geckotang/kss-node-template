# kss-node-template

This is a template for [kss-node v2.x](https://github.com/kss-node/kss-node) styleguide.

## How to use

### Install

```
$ git clone git@github.com:geckotang/kss-node-template.git
$ cd kss-node-template
$ npm install
```

### Build Styleguide

this template parses css in `src/scss` directory.
you can build styleguide when you put scss file to `src/scss`.

```bash
$ gulp build
```

### Configuration file for Your Styleguide

If you want to change the styleguide title, please edit `site-setting.json` in `custom-template/`.

```json
{
  "docTitle": "MY Styleguide",
  "generatorTag": "<!-- Automatically generated using <a href=\"https://github.com/kss-node/kss-node\">kss-node</a>. -->"
}
```

this configuration file is used in `custom-template/index.html`.

```html
<head>
  <meta charset="utf-8">
  <title>{{site-setting "docTitle"}}</title>

<!-- blah blah blah -->

{{site-setting "generatorTag"}}
</body>
</html>
```

The results will be like this.

```html
<head>
  <meta charset="utf-8">
  <title>MY Styleguide</title>

<!-- blah blah blah -->

<!-- Automatically generated using <a href=\"https://github.com/kss-node/kss-node\">kss-node</a>. -->
</body>
</html>
```

### Configuration file for KSS

make dir `src/scss` and put your scss files.
If you want to change the dir, please edit kss configuration file named `kss-template-settings.json`.

```json
{
  "template": "custom-template",
  "destination": "demo/styleguide",
  "source": "src/scss",
  "mask": "*.css|*.less|*.sass|*.scss|*.styl|*.stylus",
  "css": [
    "/styleguide/public/black-tie/css/black-tie.min.css",
    "/styleguide/public/kss.css",
    "/styleguide/public/highlight/monokai.css",
    "/styleguide/public/styles.css"
  ],
  "js": [
    "/styleguide/public/kss.js",
    "/styleguide/public/highlight/highlight.pack.js",
    "/styleguide/public/init.js"
  ],
  "custom": ["Script", "Exec_Script", "Scss_Usage"]
}
```
