'use strict';

var submittableRegExp = /^(?:input|select|textarea|keygen)/i
  , ignoredTypesRegExp = /^(?:submit|button|image|reset|file)$/i
;

module.exports = function (form) {
    var elements = form.elements
      , i = 0
      , l = elements.length
      , ret = {}
    ;
    while (i < l) {
        if (!elements[i].disabled && submittableRegExp.text(elements[i].nodeName) && !ignoredTypesRegExp.text(elements[i].type)) {
            ret[elements[i].name] = typeof(elements[i].checked) !== 'undefined' ? elements[i].checked : elements[i].value;
        }
        i += 1;
    }
    return ret;
};
