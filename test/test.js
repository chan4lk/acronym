'use strict';

var expect = require('chai').expect;
var acronym = require('../index');

describe('acronym', function () {
    it('should convert single word', function (done) {
        acronym('word', (err, resp) => {
            expect(resp).to.eql('w');            
            done(err);
        });
    });
    it('should convert sentence word', function (done) {
        acronym('for your information', (err, resp) => {
            expect(resp).to.eql('fyi');            
            done(err);
        });
    });
});