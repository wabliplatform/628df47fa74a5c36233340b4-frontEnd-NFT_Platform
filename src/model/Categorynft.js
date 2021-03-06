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

import ApiClient from '../ApiClient';

/**
 * The Categorynft model module.
 * @module model/Categorynft
 * @version 1.0.0
 */
class Categorynft {
    /**
     * Constructs a new <code>Categorynft</code>.
     * @alias module:model/Categorynft
     * @param titleCategoryNFT {String} 
     * @param nFTCategorydescription {String} 
     */
    constructor(titleCategoryNFT, nFTCategorydescription) { 
        
        Categorynft.initialize(this, titleCategoryNFT, nFTCategorydescription);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, titleCategoryNFT, nFTCategorydescription) { 
        obj['titleCategoryNFT'] = titleCategoryNFT;
        obj['NFTCategorydescription'] = nFTCategorydescription;
    }

    /**
     * Constructs a <code>Categorynft</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Categorynft} obj Optional instance to populate.
     * @return {module:model/Categorynft} The populated <code>Categorynft</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Categorynft();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('titleCategoryNFT')) {
                obj['titleCategoryNFT'] = ApiClient.convertToType(data['titleCategoryNFT'], 'String');
            }
            if (data.hasOwnProperty('NFTCategorydescription')) {
                obj['NFTCategorydescription'] = ApiClient.convertToType(data['NFTCategorydescription'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Categorynft.prototype['_id'] = undefined;

/**
 * @member {String} titleCategoryNFT
 */
Categorynft.prototype['titleCategoryNFT'] = undefined;

/**
 * @member {String} NFTCategorydescription
 */
Categorynft.prototype['NFTCategorydescription'] = undefined;






export default Categorynft;

