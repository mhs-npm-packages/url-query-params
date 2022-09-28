const _ = require('lodash');

module.exports = function getUrlQueryParams(filter, query) {
    let filteredQuery = {};
    if (Array.isArray(filter) && _.size(filter)) {

        // Filter array
        filter = _.filter(filter, ({ key, defaultValue }) => { return key && typeof key == 'string' })

        if (query && typeof query == 'object') {
            filter.forEach(({ key, defaultValue }) => {

                let value = query[key]
                // undefined, Null
                if (value == undefined || _.isNull(value)) {
                    filteredQuery[key] = defaultValue || null;
                }
                else {
                    // Boolean
                    if (value == 'true' || value == 'false') {
                        filteredQuery[key] = value == 'true' ? true : false
                    }
                    // Array or Object
                    else if (typeof value == 'object' || typeof value == 'array') {
                        filteredQuery[key] = value;
                    }
                    // Numbers
                    else {
                        filteredQuery[key] = _.isNumber(value) ? parseInt(value) : value;
                    }
                }
            });
        } else {
            filter.forEach(({ key, defaultValue }) => {
                filteredQuery[key] = defaultValue || null;
            });
        }
    }

    return filteredQuery
}
