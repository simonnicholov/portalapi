
// init dependencies
var express = require('express');
var sql = require('mssql');
var router = express.Router();
var path = require('path');

// call core functions
var core = require('../../multiple.core.js');

// call sql connection configuration
var config = require('../../multiple.config.js');
console.log(config.application() + ' [' + path.basename(__filename) + ']');
console.log(config.setup());


// ------------------------------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------ NOTES ----------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------------------------------------------------ //

/*
    When you are using SQL Server 2014 and you've output parameter. ExpressJS doesn't care about output parameter, so it will be treated as input parameter.
    Please remember, ExpressJS can't return output parameter as a table. So, the behavior between ExpressJS and WebService in C# doesn't have similarity.
    If you need an output as a table, you have to select manually at the end of your store procedure.
*/

// ================================================================== POST ROUTER ================================================================== //

router.post('/validatelogin', function(req, res) {
    // define and prepare table parameter
    const table1 = new sql.Table();
    core.PrepareTableParameter(table1);

    // parse json to object
    let obj = JSON.parse(req.body.id);

    // define parameter
    core.AddWithParameter(table1, "LoginID", obj[0].nik);
    core.AddWithParameter(table1, "Password", obj[0].password);
    core.AddWithParameter(table1, "IPAddress", req.headers['x-forwarded-for'] || req.connection.remoteAddress);
    core.AddWithParameter(table1, "ProgramID", "0");

    //execute query
    return core.ExecuteQueryWithParameter1(req, res, config, table1, "usp_Portal_Login_Validate", false);
});

// -----------------------------------------------------------------------------

module.exports = router;