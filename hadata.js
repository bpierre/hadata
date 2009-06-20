/*
 * Hadata (HTML Attribute Data) - Get a JS object from an HTML attribute
 * 
 */
var HAD = (function() {
    
    var default_attr = "data-had",
	    default_id   = "had";
    
    function getEltVal(raw_attr, id) {
    	return raw_attr.match( (new RegExp("\\s*"+ id +"\\[([^\\[\\]]+)\\]")) );
    };
    
    return {
        
        // Change HAD default config
        config: function(conf) {
            if (!!conf) {
                default_attr = conf.attr || default_attr;
                default_id = conf.id || default_id;
            }
        },
        
        get: function(elt, conf) {
            
            // Global config
            var conf = conf || {};
            var attr = conf.attr || default_attr;
            var id = conf.id || default_id;
		    
            // Get raw attribute
            var raw_attr = elt.getAttribute(attr),
		    
    		// Separate each value (space separated)
    		attr_value = getEltVal(raw_attr, id),
		    
    		// Final object
    		final_obj = {};
		    
    		// If attr contains data
    		if (!!attr_value[1]) {
			    
    			var pairs = attr_value[1].split(",");
			    
    			for (var i in pairs) {
				    
    				var pair = pairs[i].split(":");
				    
    				if (!pair || !pair[0] || !pair[1]) {
    					throw new Error('Syntax error in pair : "' + pairs[i] + '"');
                        
    				} else {
    					final_obj[pair[0]] = pair[1];
    				}
    			}
			    
    		} else {
    			throw new Error('No data in identifier : "' + attr_value + '"');
    		}
		    
            return final_obj;
        },
	    
        set: function(elt, data, attr, id) {
		    
    		if (typeof data !== "object") {
    		    throw new Error('The second parameter must be an object');
    		}
		    
    		// Global config
            attr = attr || default_attr;
            id = id || default_id;
		    
            // Get raw attribute
            var raw_attr = elt.getAttribute(attr) || "",
		    
    		// Separate each value (space separated)
    		attr_value = getEltVal(raw_attr, id),
		    
    		pairs = [],
    		final_str = "";
		    
		    for (var key in data) {
    			pairs.push(key + ":" + data[key]);
    		}
		    
		    final_str = id + "[" + pairs.join(",") + "]";
		    
		    if (!!attr_value) {
		        elt.setAttribute(attr, raw_attr.replace( attr_value[0], final_str ));
		        
		    } else {
		        elt.setAttribute(attr, raw_attr + " " + final_str);
		    }
    	},
        
    };
})();