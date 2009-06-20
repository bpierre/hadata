Hadata
=============================================================

Hadata is a simple script allowing to:

* Get an object from key/value pairs in an HTML attribute
* Set a key/value object in an HTML attribute from a simple JS object

HAD.get
-------------------------------------------------------------

Returns a JS object from a DOM element.

    HAD.get( element [, config] )

### element ###

A DOM Element.

### config ###

A key/value object with some parameters (all are optional). If this parameter is omitted, default config is used.

`attr` defines a new HTML attribute (default: `"data-had"`)

`id` defines a new block id inside the HTML attribute (default: `"had"`)

### Examples ###

With default config:

    <p data-had="had[key:value]">Example</p>

    HAD.get( document.getElementById("my_element") );

With config parameters:

    <p new-html-attribute="new-block-id[key:value]">Example</p>

    HAD.get( document.getElementById("my_element"), {
      attr: "new-html-attribute"
      id: "new-block-id"
    });


HAD.set
-------------------------------------------------------------

Converts a simple key/value object to "Hadata format", and set it to an HTML attribute without altering present values.

    HAD.set( element, data [, config] )

HAD.config
-------------------------------------------------------------

Change Hadata global configuration.

    HAD.config( config )