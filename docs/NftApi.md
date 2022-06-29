# TempApi.NftApi

All URIs are relative to *http://83.212.100.226:3006/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createnft**](NftApi.md#createnft) | **POST** /nft | Creates the data
[**deletenft**](NftApi.md#deletenft) | **DELETE** /nft/{nftId} | Delete the element
[**getAllnft**](NftApi.md#getAllnft) | **GET** /nft/getAll | Get all the data
[**getnft**](NftApi.md#getnft) | **GET** /nft/{nftId} | Get the element
[**updatenft**](NftApi.md#updatenft) | **PUT** /nft/{nftId} | Updates the element



## createnft

> Nft createnft(nft)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.NftApi();
let nft = new TempApi.Nft(); // Nft | data to be created
apiInstance.createnft(nft, (error, data, response) => {
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
 **nft** | [**Nft**](Nft.md)| data to be created | 

### Return type

[**Nft**](Nft.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletenft

> deletenft(nftId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.NftApi();
let nftId = "nftId_example"; // String | the Id parameter
apiInstance.deletenft(nftId, (error, data, response) => {
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
 **nftId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllnft

> [Nft] getAllnft()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.NftApi();
apiInstance.getAllnft((error, data, response) => {
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

[**[Nft]**](Nft.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getnft

> Nft getnft(nftId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.NftApi();
let nftId = "nftId_example"; // String | the Id parameter
apiInstance.getnft(nftId, (error, data, response) => {
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
 **nftId** | **String**| the Id parameter | 

### Return type

[**Nft**](Nft.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatenft

> Nft updatenft(nftId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.NftApi();
let nftId = "nftId_example"; // String | the Id parameter
let opts = {
  'nft': new TempApi.Nft() // Nft | data to be updated
};
apiInstance.updatenft(nftId, opts, (error, data, response) => {
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
 **nftId** | **String**| the Id parameter | 
 **nft** | [**Nft**](Nft.md)| data to be updated | [optional] 

### Return type

[**Nft**](Nft.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

