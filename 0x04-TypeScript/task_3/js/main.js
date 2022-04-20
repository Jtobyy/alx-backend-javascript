"use strict";
exports.__esModule = true;
var CRUD = require("./crud");
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
var newRowID = CRUD.insertRow(row);
var updatedRow = CRUD.updateRow(row, 23);
CRUD.updateRow(125, updatedRow);
CRUD.deleteRow(125);
