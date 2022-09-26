const _ = require('lodash');

module.exports = function getUrlQueryParams(keys, payload) {
    let newPayload = {};
    if (Array.isArray(keys) && _.size(keys)) {
        // filter all value with type string
        keys = _.filter(keys, (item) => { return typeof item == 'string' })

        if (payload && typeof payload == 'object') {
            keys.forEach(key => {
                // undefined, Null, Empty string
                if (payload[key] == undefined || _.isNull(payload[key]) || _.isEmpty(payload[key])) {
                    newPayload[key] = null;
                }
                else {
                    let value = payload[key];
                    // Boolean 
                    if (value == 'true' || value == 'false') {
                        newPayload[key] = value == 'true' ? true : false
                    }
                    // Numbers
                    else {
                        newPayload[key] = !isNaN(value) ? parseInt(value) : value;
                    }

                }
            });
        } else {
            keys.forEach(key => {
                newPayload[key] = null;
            });
        }
    }
    return newPayload
}
