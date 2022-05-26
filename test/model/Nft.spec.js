/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TempApi);
  }
}(this, function(expect, TempApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TempApi.Nft();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Nft', function() {
    it('should create an instance of Nft', function() {
      // uncomment below and update the code to test Nft
      //var instane = new TempApi.Nft();
      //expect(instance).to.be.a(TempApi.Nft);
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new TempApi.Nft();
      //expect(instance).to.be();
    });

    it('should have the property nFTtitle (base name: "NFTtitle")', function() {
      // uncomment below and update the code to test the property nFTtitle
      //var instance = new TempApi.Nft();
      //expect(instance).to.be();
    });

    it('should have the property nFTimage (base name: "NFTimage")', function() {
      // uncomment below and update the code to test the property nFTimage
      //var instance = new TempApi.Nft();
      //expect(instance).to.be();
    });

    it('should have the property nFTdescription (base name: "NFTdescription")', function() {
      // uncomment below and update the code to test the property nFTdescription
      //var instance = new TempApi.Nft();
      //expect(instance).to.be();
    });

    it('should have the property nFTCategory (base name: "NFTCategory")', function() {
      // uncomment below and update the code to test the property nFTCategory
      //var instance = new TempApi.Nft();
      //expect(instance).to.be();
    });

    it('should have the property nFTprice (base name: "NFTprice")', function() {
      // uncomment below and update the code to test the property nFTprice
      //var instance = new TempApi.Nft();
      //expect(instance).to.be();
    });

    it('should have the property userNFTs (base name: "UserNFTs")', function() {
      // uncomment below and update the code to test the property userNFTs
      //var instance = new TempApi.Nft();
      //expect(instance).to.be();
    });

    it('should have the property titleNFT (base name: "titleNFT")', function() {
      // uncomment below and update the code to test the property titleNFT
      //var instance = new TempApi.Nft();
      //expect(instance).to.be();
    });

  });

}));