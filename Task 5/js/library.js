let Module = (function () {

    const memo = (fn) => {
        const cache = {};

        return(...arguments) => {
            if (arguments[0], arguments[1] in cache) {
                console.log("cache");
                return cache [arguments[0], arguments[1]];
            } else if (arguments[1], arguments[0] in cache) {
                console.log("cache");
                return cache [arguments[1], arguments[0]];
            }
            console.log("new number - write cache");
            return cache[arguments[0], arguments[1]] = fn(...arguments);
        }
    }

    

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
        },
        // Developer: function(firstName, lastName, technology) {
        //     this.firstName = firstName;
        //     this.lastName = lastName;
        //     this.technology = technology;
        //     if (typeof Module.Developer.instance === "object") {
        //         return Module.Developer.instance;
        //     }
        //     Module.Developer.instance = this;
        // },
        sum: memo(function(a,b) {
            let result = a + b;
            return result;
        })
    };
})();