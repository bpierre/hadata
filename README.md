## Hadata ##

### Allows to: ###

* Get a JS object from key/value pairs in an HTML attribute
* Set key/value pairs in an HTML attribute from a JS object

### get ###

Returns a JS object from a DOM element.

#### Syntax ####

    HAD.get( element [, config] )

#### Parameters ####

##### element #####

A DOM element.

##### config #####

A JS object. All values are optional.
If this parameter is omitted, default config is used.

* `attr` defines a new HTML attribute (default: `"data-had"`)
* `id` defines a new block id inside the HTML attribute (default: `"had"`)

#### Examples ####

##### Default config #####

HTML:

    <p data-had="had[key:value]">Example</p>

JS:

    HAD.get( document.getElementById("my_element") );

##### Custom config #####

HTML:

    <p new-html-attribute="new-block-id[key:value]">Example</p>

JS:

    HAD.get( document.getElementById("my_element"), {
      attr: "new-html-attribute"
      id: "new-block-id"
    });