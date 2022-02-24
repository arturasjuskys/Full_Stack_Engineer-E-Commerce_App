/*
 * E-Commerce APP (REST API)
 * A basic API for working with the Swagger Tools.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.33
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ECommerceAppRestApi);
  }
}(this, function(expect, ECommerceAppRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ECommerceAppRestApi.ProductsApi();
  });

  describe('(package)', function() {
    describe('ProductsApi', function() {
      describe('productsDeleteOne', function() {
        it('should call productsDeleteOne successfully', function(done) {
          // TODO: uncomment, update parameter values for productsDeleteOne call
          /*

          instance.productsDeleteOne(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('productsGetAll', function() {
        it('should call productsGetAll successfully', function(done) {
          // TODO: uncomment productsGetAll call
          /*

          instance.productsGetAll(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('productsGetOne', function() {
        it('should call productsGetOne successfully', function(done) {
          // TODO: uncomment, update parameter values for productsGetOne call
          /*

          instance.productsGetOne(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('productsNew', function() {
        it('should call productsNew successfully', function(done) {
          // TODO: uncomment productsNew call
          /*

          instance.productsNew(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('productsUpdateOne', function() {
        it('should call productsUpdateOne successfully', function(done) {
          // TODO: uncomment, update parameter values for productsUpdateOne call
          /*

          instance.productsUpdateOne(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));