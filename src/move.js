"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
function move(list, source, destination) {
    if (!list || !source || !destination) {
        return ' Missing paramater';
    }
    var moveList = list;
    var moveData = [];
    var destFolder = [];
    var otherFolder = [];
    var isHas = false;
    var message = '';
    moveList.map(function (file) {
        if (file.id === source && !isHas) {
            return 'You cannot move a folder';
        }
        if (destination !== file.id && !isHas) {
            message = 'You cannot specify a file as the destination';
        }
        else {
            isHas = true;
            message = '';
        }
        if (destination !== file.id) {
            otherFolder.push(file);
        }
        else {
            destFolder.push(file);
        }
        return 'ok';
    });
    if (!message) {
        otherFolder[0].files.map(function (fileData, index) {
            if (fileData.id === source) {
                moveData.push(__assign({}, otherFolder[0].files[index]));
                otherFolder[0].files.splice(index, 1);
            }
            else {
                return 'You have not source in this folder';
            }
        });
        if (moveData.length > 0) {
            isHas = true;
            destFolder[0].files.push(__assign({}, moveData[0]));
        }
        var finalList = __spreadArrays(destFolder, otherFolder);
        return JSON.stringify(finalList);
    }
    return message;
}
exports["default"] = move;
