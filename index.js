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
    ;
    while (i < l) {
        el = els[i];
        if (!el.disabled && submittableRegExp.test(el.nodeName) && !ignoredTypesRegExp.test(el.type)) {
            if (el.type.toLowerCase() !== 'radio' || el.checked) {
                dot.set(ret, el.name, value(el));
            }
        }
        i += 1;
    }
    return ret;
};
