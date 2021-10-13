let Module = (function () {
    return {
        isArray: function(obj) {
            return Array.isArray(obj);
        }, 
        isDate: function (obj) {
            return obj instanceof Date;
        },
        isBool: function (obj) {
            return typeof obj === 'boolean';
        },
        isNumber: function(obj) {
            return typeof obj === 'number';
        },
        isString: function(obj) {
            return typeof obj === 'string';
        },
        isFunction: function (obj) {
            return typeof obj === 'function';
        },
        isUndefined: function(obj) {
            return typeof obj === 'undefined';
        },
        isNull: function(obj) {
            return typeof obj === 'object';
        },
        isNaN: function(obj) {
            return Object.is(obj, NaN);
        },
        deepEqual: function(firstObj, secondObj) {
            if (firstObj === secondObj) {
                return true;
              }
              else if ((typeof firstObj == "object" && firstObj != null) && (typeof secondObj == "object" && secondObj != null)) {
                if (Object.keys(firstObj).length != Object.keys(secondObj).length)
                  return false;
            
                for (var prop in firstObj) {
                  if (secondObj.hasOwnProperty(prop))
                  {  
                    if (! deepEqual(firstObj[prop], secondObj[prop]))
                      return false;
                  }
                  else
                    return false;
                }
                return true;
              }
              else 
                return false;
            }
        }
})();