/* tslint:disable */
/* eslint-disable */
/**
 * BookCycle API
 * API documentation for the BookCycle project
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface BookResponse
 */
export interface BookResponse {
    /**
     * 
     * @type {string}
     * @memberof BookResponse
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof BookResponse
     */
    'author': string;
    /**
     * 
     * @type {string}
     * @memberof BookResponse
     */
    'image'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BookResponse
     */
    'description': string;
    /**
     * 
     * @type {number}
     * @memberof BookResponse
     */
    'price': number;
    /**
     * 
     * @type {number}
     * @memberof BookResponse
     */
    'discount'?: number;
    /**
     * 
     * @type {BookTypeEnum}
     * @memberof BookResponse
     */
    'categoryName'?: BookTypeEnum;
}


/**
 * Enum for book categories
 * @export
 * @enum {string}
 */

export const BookTypeEnum = {
    Fiction: 'fiction',
    Romance: 'romance',
    Children: 'children',
    Fantasy: 'fantasy',
    Mystery: 'mystery',
    Business: 'business',
    Personal: 'personal',
    All: 'all'
} as const;

export type BookTypeEnum = typeof BookTypeEnum[keyof typeof BookTypeEnum];



/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Fetches all books from the database.
         * @summary Get all books
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiBookAllGet: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/book/all`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * Fetches all books from the database.
         * @summary Get all books
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiBookAllGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<BookResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiBookAllGet(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.apiBookAllGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * Fetches all books from the database.
         * @summary Get all books
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiBookAllGet(options?: RawAxiosRequestConfig): AxiosPromise<Array<BookResponse>> {
            return localVarFp.apiBookAllGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * Fetches all books from the database.
     * @summary Get all books
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiBookAllGet(options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).apiBookAllGet(options).then((request) => request(this.axios, this.basePath));
    }
}



