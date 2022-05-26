# TempApi.CategorynftApi

All URIs are relative to *http://83.212.100.226:3002/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createcategorynft**](CategorynftApi.md#createcategorynft) | **POST** /categorynft | Creates the data
[**deletecategorynft**](CategorynftApi.md#deletecategorynft) | **DELETE** /categorynft/{categorynftId} | Delete the element
[**getAllcategorynft**](CategorynftApi.md#getAllcategorynft) | **GET** /categorynft/getAll | Get all the data
[**getcategorynft**](CategorynftApi.md#getcategorynft) | **GET** /categorynft/{categorynftId} | Get the element
[**updatecategorynft**](CategorynftApi.md#updatecategorynft) | **PUT** /categorynft/{categorynftId} | Updates the element



## createcategorynft

> Categorynft createcategorynft(categorynft)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.CategorynftApi();
let categorynft = new TempApi.Categorynft(); // Categorynft | data to be created
apiInstance.createcategorynft(categorynft, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categorynft** | [**Categorynft**](Categorynft.md)| data to be created | 

### Return type

[**Categorynft**](Categorynft.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletecategorynft

> deletecategorynft(categorynftId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.CategorynftApi();
let categorynftId = "categorynftId_example"; // String | the Id parameter
apiInstance.deletecategorynft(categorynftId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categorynftId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllcategorynft

> [Categorynft] getAllcategorynft()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.CategorynftApi();
apiInstance.getAllcategorynft((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Categorynft]**](Categorynft.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getcategorynft

> Categorynft getcategorynft(categorynftId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.CategorynftApi();
let categorynftId = "categorynftId_example"; // String | the Id parameter
apiInstance.getcategorynft(categorynftId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categorynftId** | **String**| the Id parameter | 

### Return type

[**Categorynft**](Categorynft.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatecategorynft

> Categorynft updatecategorynft(categorynftId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.CategorynftApi();
let categorynftId = "categorynftId_example"; // String | the Id parameter
let opts = {
  'categorynft': new TempApi.Categorynft() // Categorynft | data to be updated
};
apiInstance.updatecategorynft(categorynftId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categorynftId** | **String**| the Id parameter | 
 **categorynft** | [**Categorynft**](Categorynft.md)| data to be updated | [optional] 

### Return type

[**Categorynft**](Categorynft.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

