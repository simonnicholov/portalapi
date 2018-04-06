

// ----------------------------------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------- DEFINE CONNECTION STRING  --------------------------------------------------------- //
// ----------------------------------------------------------------------------------------------------------------------------------------- //

// set up production connection
var currentProduction = { user: 'xxx', password: 'xxx', server: 'xxx', database: 'xxx' };
var securityProduction = { user: 'xxx', password: 'xxx', server: 'xxx', database: 'xxx' };
var logProduction = { user: 'xxx', password: 'xxx', server: "xxx", database: 'xxx' };

// set up development connection
var currentDevelopment = { user: 'xxx', password: 'xxx', server: 'xxx\\xxx', database: 'xxx' };
var securityDevelopment = { user: 'xxx', password: 'xxx', server: 'xxx\\xxx', database: 'xxx' };
var logDevelopment = { user: 'xxx', password: 'xx', server: 'xxx\\xx', database: 'xxx' };

// set up localhost connection
var currentLocalhost = { user: 'xxx', password: 'xxx', server: 'xxx\\SQLEXPRESS', database: 'xxx' };
var securityLocalhost = { user: 'xxx', password: 'xxx', server: 'xxx\\SQLEXPRESS', database: 'xxx' };
var logLocalhost = { user: 'xxx', password: 'xxx', server: 'xxx\\SQLEXPRESS', database: 'xxx' };

// ----------------------------------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------------- EXPORT FUNCTIONS ------------------------------------------------------------ //
// ----------------------------------------------------------------------------------------------------------------------------------------- //

module.exports = {
    application: function(){
        return "[ApplicationName]"; // write your application name
    },
    key: function(){
        return "JSON_F52E2B61-18A1-11d1-B105-00805F49916B"; // this is a field name when you are using sql server 2016 or later which JSON as an output
    },
    setup: function(){
        var array = [];
        
        if (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.toLowerCase() === 'production') { 
            array.push(currentProduction); array.push(securityProduction); array.push(logProduction);
        } 
        else if (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.toLowerCase() === 'development') { 
            array.push(currentDevelopment); array.push(securityDevelopment); array.push(logDevelopment);
        } 
        else if (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.toLowerCase() === 'localhost')  { 
            array.push(currentLocalhost); array.push(securityLocalhost); array.push(logLocalhost);
        }

        return array;
    }
}