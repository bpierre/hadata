h2. Hadata

h3. Allows to:

* Get a JS object from key/value pairs in an HTML attribute
* Set key/value pairs in an HTML attribute from a JS object

h3. get

Returns a JS object from a DOM element.

h4. Syntax

@HAD.get( element [, config] )@

h4. Parameters

h5. element

A DOM element.

h5. config

A JS object. All values are optional.
If this parameter is omitted, default config is used.

* @attr@ defines a new HTML attribute (default: @"data-had"@)
* @id@ defines a new block id inside the HTML attribute (default: @"had"@)

h4. Examples

h5. Default config

HTML:
<pre>
  <p data-had="had[key:value]">Example</p>
</pre>

JS:
<pre>
  HAD.get( document.getElementById("my_element") );
</pre>

h5. Custom config

HTML:
<pre>
  <p new-html-attribute="new-block-id[key:value]">Example</p>
</pre>

JS:
<pre>
  HAD.get( document.getElementById("my_element"), {
    attr: "new-html-attribute"
    id: "new-block-id"
  });
</pre>