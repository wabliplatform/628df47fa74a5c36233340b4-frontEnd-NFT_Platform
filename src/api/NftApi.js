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


import ApiClient from "../ApiClient";
import Nft from '../model/Nft';

/**
* Nft service.
* @module api/NftApi
* @version 1.0.0
*/
export default class NftApi {

    /**
    * Constructs a new NftApi. 
    * @alias module:api/NftApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createnft operation.
     * @callback module:api/NftApi~createnftCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Nft} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates the data
     * @param {module:model/Nft} nft data to be created
     * @param {module:api/NftApi~createnftCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Nft}
     */
    createnft(nft, callback) {
      let postBody = nft;
      // verify the required parameter 'nft' is set
      if (nft === undefined || nft === null) {
        throw new Error("Missing the required parameter 'nft' when calling createnft");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Nft;
      return this.apiClient.callApi(
        '/nft', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deletenft operation.
     * @callback module:api/NftApi~deletenftCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the element
     * @param {String} nftId the Id parameter
     * @param {module:api/NftApi~deletenftCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deletenft(nftId, callback) {
      let postBody = null;
      // verify the required parameter 'nftId' is set
      if (nftId === undefined || nftId === null) {
        throw new Error("Missing the required parameter 'nftId' when calling deletenft");
      }

      let pathParams = {
        'nftId': nftId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/nft/{nftId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllnft operation.
     * @callback module:api/NftApi~getAllnftCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Nft>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data
     * @param {module:api/NftApi~getAllnftCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Nft>}
     */
    getAllnft(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Nft];
      return this.apiClient.callApi(
        '/nft/getAll', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getnft operation.
     * @callback module:api/NftApi~getnftCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Nft} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the element
     * @param {String} nftId the Id parameter
     * @param {module:api/NftApi~getnftCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Nft}
     */
    getnft(nftId, callback) {
      let postBody = null;
      // verify the required parameter 'nftId' is set
      if (nftId === undefined || nftId === null) {
        throw new Error("Missing the required parameter 'nftId' when calling getnft");
      }

      let pathParams = {
        'nftId': nftId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Nft;
      return this.apiClient.callApi(
        '/nft/{nftId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatenft operation.
     * @callback module:api/NftApi~updatenftCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Nft} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the element
     * @param {String} nftId the Id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/Nft} opts.nft data to be updated
     * @param {module:api/NftApi~updatenftCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Nft}
     */
    updatenft(nftId, opts, callback) {
      opts = opts || {};
      let postBody = opts['nft'];
      // verify the required parameter 'nftId' is set
      if (nftId === undefined || nftId === null) {
        throw new Error("Missing the required parameter 'nftId' when calling updatenft");
      }

      let pathParams = {
        'nftId': nftId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Nft;
      return this.apiClient.callApi(
        '/nft/{nftId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
