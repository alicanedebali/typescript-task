"use strict";
exports.__esModule = true;
var move_1 = require("./move");
describe('move', function () {
    it('moves given file to another folder', function () {
        var list = [
            {
                id: '1',
                name: 'Folder 1',
                files: [
                    { id: '2', name: 'File 1' },
                    { id: '3', name: 'File 2' },
                    { id: '4', name: 'File 3' },
                    { id: '5', name: 'File 4' },
                ]
            },
            {
                id: '6',
                name: 'Folder 2',
                files: [{ id: '7', name: 'File 5' }]
            },
        ];
        var result = [
            {
                id: '1',
                name: 'Folder 1',
                files: [
                    { id: '2', name: 'File 1' },
                    { id: '3', name: 'File 2' },
                    { id: '5', name: 'File 4' },
                ]
            },
            {
                id: '6',
                name: 'Folder 2',
                files: [
                    { id: '7', name: 'File 5' },
                    { id: '4', name: 'File 3' },
                ]
            },
        ];
        expect(move_1["default"](list, '4', '6')).toStrictEqual(result);
    });
    it('throws error if given source is not a file', function () {
        var list = [
            {
                id: '1',
                name: 'Folder 1',
                files: [{ id: '2', name: 'File 1' }]
            },
            { id: '3', name: 'Folder 2', files: [] },
        ];
        expect(function () { return move_1["default"](list, '3', '1'); }).toThrow('You cannot move a folder');
    });
    it('throws error if given destination is not a folder', function () {
        var list = [
            {
                id: '1',
                name: 'Folder 1',
                files: [{ id: '2', name: 'File 1' }]
            },
            { id: '3', name: 'Folder 2', files: [{ id: '4', name: 'File 2' }] },
        ];
        expect(function () { return move_1["default"](list, '2', '4'); }).toThrow('You cannot specify a file as the destination');
    });
});
