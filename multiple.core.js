
// init dependencies
var sql = require('mssql');

// general variables
const logstoreprocedure = "usp_SYS_LogApps";


// ----------------------------------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------------- CORE FUNCTIONS --------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------------------------------------------------------- //



// ------------------------------------------------------- SUPPORTING FUNCTIONS ------------------------------------------------------------ //


var prepareudtparameter = function PrepareUDTParameter(tbl, data) {
    var count = Object.keys(data).length; var sampleObj = data[0];
    for(var key in sampleObj) {
        //console.log(key + ' : ' + data[0][key]);
        var datatype = typeof(data[0][key]); if (datatype == 'number') { tbl.columns.add(key, sql.BigInt); } else if (datatype == 'string') { tbl.columns.add(key, sql.VarChar(8000)); }
    } 

    var tArray = []; var columnLength = tbl.columns.length;
    for (var i = 0; i < count; i++) { var currentObj = data[i]; var y = 0 ; for (var key in currentObj) { if (y == 0) { tArray.push([data[i][key]]); } else { tArray[i][y] = data[i][key]; } y = y + 1; } }

    for (var i = 0; i < count ; i++) {
        if (columnLength == 2)
            tbl.rows.add(tArray[i][0], tArray[i][1]);
        else if (columnLength == 3)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2]);
        else if (columnLength == 4)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3]);
        else if (columnLength == 5)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3], tArray[i][4]);
        else if (columnLength == 6)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3], tArray[i][4], tArray[i][5]);
        else if (columnLength == 7)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3], tArray[i][4], tArray[i][5], tArray[i][6]);
        else if (columnLength == 8)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3], tArray[i][4], tArray[i][5], tArray[i][6], tArray[i][7]);
        else if (columnLength == 9)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3], tArray[i][4], tArray[i][5], tArray[i][6], tArray[i][7], tArray[i][8]);
        else if (columnLength == 10)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3], tArray[i][4], tArray[i][5], tArray[i][6], tArray[i][7], tArray[i][8], tArray[i][9]);
        else if (columnLength == 11)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3], tArray[i][4], tArray[i][5], tArray[i][6], tArray[i][7], tArray[i][8], tArray[i][9], tArray[i][10]);
        else if (columnLength == 12)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3], tArray[i][4], tArray[i][5], tArray[i][6], tArray[i][7], tArray[i][8], tArray[i][9], tArray[i][10], tArray[i][11]);
        else if (columnLength == 13)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3], tArray[i][4], tArray[i][5], tArray[i][6], tArray[i][7], tArray[i][8], tArray[i][9], tArray[i][10], tArray[i][11], tArray[i][12]);
        else if (columnLength == 14)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3], tArray[i][4], tArray[i][5], tArray[i][6], tArray[i][7], tArray[i][8], tArray[i][9], tArray[i][10], tArray[i][11], tArray[i][12], tArray[i][13]);
        else if (columnLength == 15)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3], tArray[i][4], tArray[i][5], tArray[i][6], tArray[i][7], tArray[i][8], tArray[i][9], tArray[i][10], tArray[i][11], tArray[i][12], tArray[i][13], tArray[i][14]);
        else if (columnLength == 16)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3], tArray[i][4], tArray[i][5], tArray[i][6], tArray[i][7], tArray[i][8], tArray[i][9], tArray[i][10], tArray[i][11], tArray[i][12], tArray[i][13], tArray[i][14], tArray[i][15]);
        else if (columnLength == 17)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3], tArray[i][4], tArray[i][5], tArray[i][6], tArray[i][7], tArray[i][8], tArray[i][9], tArray[i][10], tArray[i][11], tArray[i][12], tArray[i][13], tArray[i][14], tArray[i][15], tArray[i][16]);
        else if (columnLength == 18)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3], tArray[i][4], tArray[i][5], tArray[i][6], tArray[i][7], tArray[i][8], tArray[i][9], tArray[i][10], tArray[i][11], tArray[i][12], tArray[i][13], tArray[i][14], tArray[i][15], tArray[i][16], tArray[i][17]);
        else if (columnLength == 19)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3], tArray[i][4], tArray[i][5], tArray[i][6], tArray[i][7], tArray[i][8], tArray[i][9], tArray[i][10], tArray[i][11], tArray[i][12], tArray[i][13], tArray[i][14], tArray[i][15], tArray[i][16], tArray[i][17], tArray[i][18]);
        else if (columnLength == 20)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3], tArray[i][4], tArray[i][5], tArray[i][6], tArray[i][7], tArray[i][8], tArray[i][9], tArray[i][10], tArray[i][11], tArray[i][12], tArray[i][13], tArray[i][14], tArray[i][15], tArray[i][16], tArray[i][17], tArray[i][18], tArray[i][19]);
        else if (columnLength == 21)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3], tArray[i][4], tArray[i][5], tArray[i][6], tArray[i][7], tArray[i][8], tArray[i][9], tArray[i][10], tArray[i][11], tArray[i][12], tArray[i][13], tArray[i][14], tArray[i][15], tArray[i][16], tArray[i][17], tArray[i][18], tArray[i][19], tArray[i][20]);
        else if (columnLength == 22)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3], tArray[i][4], tArray[i][5], tArray[i][6], tArray[i][7], tArray[i][8], tArray[i][9], tArray[i][10], tArray[i][11], tArray[i][12], tArray[i][13], tArray[i][14], tArray[i][15], tArray[i][16], tArray[i][17], tArray[i][18], tArray[i][19], tArray[i][20], tArray[i][21]);
        else if (columnLength == 23)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3], tArray[i][4], tArray[i][5], tArray[i][6], tArray[i][7], tArray[i][8], tArray[i][9], tArray[i][10], tArray[i][11], tArray[i][12], tArray[i][13], tArray[i][14], tArray[i][15], tArray[i][16], tArray[i][17], tArray[i][18], tArray[i][19], tArray[i][20], tArray[i][21], tArray[i][22]);
        else if (columnLength == 24)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3], tArray[i][4], tArray[i][5], tArray[i][6], tArray[i][7], tArray[i][8], tArray[i][9], tArray[i][10], tArray[i][11], tArray[i][12], tArray[i][13], tArray[i][14], tArray[i][15], tArray[i][16], tArray[i][17], tArray[i][18], tArray[i][19], tArray[i][20], tArray[i][21], tArray[i][22], tArray[i][23]);
        else if (columnLength == 25)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3], tArray[i][4], tArray[i][5], tArray[i][6], tArray[i][7], tArray[i][8], tArray[i][9], tArray[i][10], tArray[i][11], tArray[i][12], tArray[i][13], tArray[i][14], tArray[i][15], tArray[i][16], tArray[i][17], tArray[i][18], tArray[i][19], tArray[i][20], tArray[i][21], tArray[i][22], tArray[i][23], tArray[i][24]);
        else if (columnLength == 26)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3], tArray[i][4], tArray[i][5], tArray[i][6], tArray[i][7], tArray[i][8], tArray[i][9], tArray[i][10], tArray[i][11], tArray[i][12], tArray[i][13], tArray[i][14], tArray[i][15], tArray[i][16], tArray[i][17], tArray[i][18], tArray[i][19], tArray[i][20], tArray[i][21], tArray[i][22], tArray[i][23], tArray[i][24], tArray[i][25]);
        else if (columnLength == 27)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3], tArray[i][4], tArray[i][5], tArray[i][6], tArray[i][7], tArray[i][8], tArray[i][9], tArray[i][10], tArray[i][11], tArray[i][12], tArray[i][13], tArray[i][14], tArray[i][15], tArray[i][16], tArray[i][17], tArray[i][18], tArray[i][19], tArray[i][20], tArray[i][21], tArray[i][22], tArray[i][23], tArray[i][24], tArray[i][25], tArray[i][26]);
        else if (columnLength == 28)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3], tArray[i][4], tArray[i][5], tArray[i][6], tArray[i][7], tArray[i][8], tArray[i][9], tArray[i][10], tArray[i][11], tArray[i][12], tArray[i][13], tArray[i][14], tArray[i][15], tArray[i][16], tArray[i][17], tArray[i][18], tArray[i][19], tArray[i][20], tArray[i][21], tArray[i][22], tArray[i][23], tArray[i][24], tArray[i][25], tArray[i][26], tArray[i][27]);
        else if (columnLength == 29)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3], tArray[i][4], tArray[i][5], tArray[i][6], tArray[i][7], tArray[i][8], tArray[i][9], tArray[i][10], tArray[i][11], tArray[i][12], tArray[i][13], tArray[i][14], tArray[i][15], tArray[i][16], tArray[i][17], tArray[i][18], tArray[i][19], tArray[i][20], tArray[i][21], tArray[i][22], tArray[i][23], tArray[i][24], tArray[i][25], tArray[i][26], tArray[i][27], tArray[i][28]);
        else if (columnLength == 30)
            tbl.rows.add(tArray[i][0], tArray[i][1], tArray[i][2], tArray[i][3], tArray[i][4], tArray[i][5], tArray[i][6], tArray[i][7], tArray[i][8], tArray[i][9], tArray[i][10], tArray[i][11], tArray[i][12], tArray[i][13], tArray[i][14], tArray[i][15], tArray[i][16], tArray[i][17], tArray[i][18], tArray[i][19], tArray[i][20], tArray[i][21], tArray[i][22], tArray[i][23], tArray[i][24], tArray[i][25], tArray[i][26], tArray[i][27], tArray[i][28], tArray[i][29]);
    }
};

var preparetableparameter = function PrepareTableParameter(tbl) {
    tbl.columns.add('ID', sql.VarChar(32));
    tbl.columns.add('Value', sql.VarChar(10000));
}

var addwithparameter = function AddWithParameter(tbl, param, value) {
    tbl.rows.add(param, value);
}


// ---------------------------------------- EXECUTE QUERY INDIRECT JSON OUTPUT FROM SQL SERVER [2014--] ------------------------------------ //


var executequerywithoutparameter1 = function ExecuteQueryWithoutParameter1(req, res, config, spname, iscurrentdb) {
    var indexArray = iscurrentdb == true ? 0 : 1;
    var dbConn = new sql.ConnectionPool(config.setup()[indexArray]);
    dbConn.connect().then(function () {
        var request = new sql.Request(dbConn);
        request.execute(spname).then(function (response) {       
            console.log(response.recordsets);    
            var output = GenerateOutputArrayWithoutKey(response.recordsets, config);
            return res.send(output);
            dbConn.close();
        }).catch(function (err) {
            console.log('-----------------------------------------------------------------------------');
            console.log('-=:: CATCH INSIDE [EXECUTE - ExecuteQueryWithoutParameter] ::=-');
            console.log(err);
            console.log('Status          : ' + err.originalError.info.name);
            console.log('Message         : ' + err.originalError.info.message);
            console.log('Store Procedure : ' + err.originalError.info.procName);
            console.log('Line Number     : ' + err.originalError.info.lineNumber);
            console.log('-----------------------------------------------------------------------------');
            
            dbConn.close();

            ExecuteQueryWhenError(req, config, tblcommon, err.originalError.info.message);
        });
    }).catch(function (err) {
        console.log('-----------------------------------------------------------------------------');
        console.log('-=:: CATCH OUTSIDE [EXECUTE - ExecuteQueryWithoutParameter] ::=-');
        console.log('Code    : ' + err.originalError.code);
        console.log('Message : ' + err.originalError.message);
        console.log('-----------------------------------------------------------------------------');

        ExecuteQueryWhenError(req, res, config, tblcommon, err.originalError.message);
    });
}

var executequerywithparameter1 = function ExecuteQueryWithParameter1(req, res, config, tblcommon, spname, iscurrentdb) {
    var indexArray = iscurrentdb == true ? 0 : 1;
    var dbConn = new sql.ConnectionPool(config.setup()[indexArray]);
    dbConn.connect().then(function () {
        var request = new sql.Request(dbConn);
        var length = tblcommon.rows.length;
        for (var i = 0; i < length; i++) {
            request.input(tblcommon.rows[i][0], tblcommon.rows[i][1]);
        }
        request.execute(spname).then(function (response) {
            var output = GenerateOutputArrayWithoutKey(response.recordsets, config);
            return res.send(output);
            dbConn.close();
        }).catch(function (err) {
            console.log('-----------------------------------------------------------------------------');
            console.log('-=:: CATCH INSIDE [EXECUTE - ExecuteQueryWithParameter] ::=-');
            console.log('');
            console.log('Status          : ' + err.originalError.info.name);
            console.log('Message         : ' + err.originalError.info.message);
            console.log('Store Procedure : ' + err.originalError.info.procName);
            console.log('Line Number     : ' + err.originalError.info.lineNumber);
            console.log('-----------------------------------------------------------------------------');
            
            dbConn.close();

            ExecuteQueryWhenError(req, res, config, tblcommon, err.originalError.info.message);
        });
    }).catch(function (err) {
        console.log('-----------------------------------------------------------------------------');
        console.log('-=:: CATCH OUTSIDE [EXECUTE - ExecuteQueryWithParameter] ::=-');
        console.log('Code    : ' + err.originalError.code);
        console.log('Message : ' + err.originalError.message);
        console.log('-----------------------------------------------------------------------------');

        ExecuteQueryWhenError(req, res, config, tblcommon, err.originalError.message);
    });
}


// -------------------------------------- EXECUTE FUNCTIONS DIRECT JSON OUTPUT FROM SQL SERVER [2016 ++] ----------------------------------- //


var executequerywithoutparameter2 = function ExecuteQueryWithoutParameter2(req, res, config, spname, iscurrentdb) {
    var indexArray = iscurrentdb == true ? 0 : 1;
    var dbConn = new sql.ConnectionPool(config.setup()[indexArray]);
    dbConn.connect().then(function () {
        var request = new sql.Request(dbConn);
        request.execute(spname).then(function (response) {           
            var output = GenerateOutputArrayWithKey(response.recordsets, config);
            return res.send(output);
            dbConn.close();
        }).catch(function (err) {
            console.log('-----------------------------------------------------------------------------');
            console.log('-=:: CATCH INSIDE [EXECUTE - ExecuteQueryWithoutParameter] ::=-');
            console.log(err);
            console.log('Status          : ' + err.originalError.info.name);
            console.log('Message         : ' + err.originalError.info.message);
            console.log('Store Procedure : ' + err.originalError.info.procName);
            console.log('Line Number     : ' + err.originalError.info.lineNumber);
            console.log('-----------------------------------------------------------------------------');
            
            dbConn.close();

            ExecuteQueryWhenError(req, config, tblcommon, err.originalError.info.message);
        });
    }).catch(function (err) {
        console.log('-----------------------------------------------------------------------------');
        console.log('-=:: CATCH OUTSIDE [EXECUTE - ExecuteQueryWithoutParameter] ::=-');
        console.log('Code    : ' + err.originalError.code);
        console.log('Message : ' + err.originalError.message);
        console.log('-----------------------------------------------------------------------------');

        ExecuteQueryWhenError(req, res, config, tblcommon, err.originalError.message);
    });
}

var executequerywithparameter2 = function ExecuteQueryWithParameter2(req, res, config, tblcommon, spname, iscurrentdb) {
    var indexArray = iscurrentdb == true ? 0 : 1;
    var dbConn = new sql.ConnectionPool(config.setup()[indexArray]);
    dbConn.connect().then(function () {
        var request = new sql.Request(dbConn);
        var length = tblcommon.rows.length;
        for (var i = 0; i < length; i++) {
            request.input(tblcommon.rows[i][0], tblcommon.rows[i][1]);
        }
        request.execute(spname).then(function (response) {
            var output = GenerateOutputArrayWithKey(response.recordsets, config);
            return res.send(output);
            dbConn.close();
        }).catch(function (err) {
            console.log('-----------------------------------------------------------------------------');
            console.log('-=:: CATCH INSIDE [EXECUTE - ExecuteQueryWithParameter] ::=-');
            console.log('');
            console.log('Status          : ' + err.originalError.info.name);
            console.log('Message         : ' + err.originalError.info.message);
            console.log('Store Procedure : ' + err.originalError.info.procName);
            console.log('Line Number     : ' + err.originalError.info.lineNumber);
            console.log('-----------------------------------------------------------------------------');
            
            dbConn.close();

            ExecuteQueryWhenError(req, res, config, tblcommon, err.originalError.info.message);
        });
    }).catch(function (err) {
        console.log('-----------------------------------------------------------------------------');
        console.log('-=:: CATCH OUTSIDE [EXECUTE - ExecuteQueryWithParameter] ::=-');
        console.log('Code    : ' + err.originalError.code);
        console.log('Message : ' + err.originalError.message);
        console.log('-----------------------------------------------------------------------------');

        ExecuteQueryWhenError(req, res, config, tblcommon, err.originalError.message);
    });
}


// ----------------------------------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------------- LOCAL FUNCTIONS -------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------------------------------------------------------- //


function ExecuteQueryWhenError(req, res, config, tblcommon, errorMessage){
    var dbConn = new sql.ConnectionPool(config.setup()[2]);
    dbConn.connect().then(function () {
        var request = new sql.Request(dbConn);
        var length = tblcommon.rows.length;

        request.input("ReturnStatus", "");
        request.input("ReturnMessage", "");
        request.input("SessionID", tblcommon.rows[0][1]);
        request.input("IPAddress", req.headers['x-forwarded-for'] || req.connection.remoteAddress);
        request.input("Application", config.application());
        request.input("Service", req.headers.host + req.baseUrl);
        request.input("Function", req.url);
        request.input("Message", errorMessage);
        
        request.execute(logstoreprocedure).then(function (response) {
            return res.send(response);
            dbConn.close();
        }).catch(function (err) {
            console.log('-----------------------------------------------------------------------------');
            console.log('-=:: CATCH INSIDE [ERROR - ExecuteQueryWhenError] ::=-');
            console.log('Status          : ' + err.originalError.info.name);
            console.log('Message         : ' + err.originalError.info.message);
            console.log('Store Procedure : ' + err.originalError.info.procName);
            console.log('Line Number     : ' + err.originalError.info.lineNumber);
            console.log('-----------------------------------------------------------------------------');

            dbConn.close();
        });
    }).catch(function (err) {
        console.log('-----------------------------------------------------------------------------');
        console.log('-=:: CATCH OUTSIDE [ERROR - ExecuteQueryWhenError] ::=-');
        console.log('Code    : ' + err.originalError.code);
        console.log('Message : ' + err.originalError.message);
        console.log('-----------------------------------------------------------------------------');
    });
}

function GenerateOutputArrayWithKey(data, config){
    var array = [];
    var count = Object.keys(data).length;
    var key = config.key();
    for (var i = 0; i < count; i ++){
        array.push(JSON.parse(data[i][0][key]));
    }
    return array;
}

function GenerateOutputArrayWithoutKey(data, config){
    return data;
}


// ----------------------------------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------------- EXPORT FUNCTIONS ------------------------------------------------------------ //
// ----------------------------------------------------------------------------------------------------------------------------------------- //

exports.PrepareUDTParameter = prepareudtparameter;
exports.PrepareTableParameter = preparetableparameter;
exports.AddWithParameter = addwithparameter;


// NON JSON
exports.ExecuteQueryWithoutParameter1 = executequerywithoutparameter1;
exports.ExecuteQueryWithParameter1 = executequerywithparameter1;


// JSON
exports.ExecuteQueryWithoutParameter2 = executequerywithoutparameter2;
exports.ExecuteQueryWithParameter2 = executequerywithparameter2;