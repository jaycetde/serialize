'use strict';

var dot = require('dot')
  , value = require('value')
  , submittableRegExp = /^(?:input|select|textarea|keygen)/i
  , ignoredTypesRegExp = /^(?:submit|button|image|reset|file)$/i
;

module.exports = function (form) {
    var els = form.elements
      , i = 0
      , l = els.length
      , el
      , ret = {}
      , current
      , val
    ;
    while (i < l) {
        el = els[i];
        if (!el.disabled && submittableRegExp.test(el.nodeName) && !ignoredTypesRegExp.test(el.type)) {
            if (el.type.toLowerCase() !== 'radio' || el.checked) {
                val = value(el);
                current = dot.get(ret, el.name);
                if (typeof current !== 'undefined') {
                    if (Object.prototype.toString.call(current) === '[object Array]') {
                        current.push(val);
                        val = current;
                    } else {
                        val = [ current, val ];
                    }
                }
                dot.set(ret, el.name, val);
            }
        }
        i += 1;
    }
    return ret;
};
