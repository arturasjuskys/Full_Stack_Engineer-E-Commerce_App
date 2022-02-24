# ECommerceAppRestApi.ProductsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productsDeleteOne**](ProductsApi.md#productsDeleteOne) | **DELETE** /products/{id} | Delete one product
[**productsGetAll**](ProductsApi.md#productsGetAll) | **GET** /products | Get all products
[**productsGetOne**](ProductsApi.md#productsGetOne) | **GET** /products/{id} | Get one product
[**productsNew**](ProductsApi.md#productsNew) | **POST** /products/new | Create new product
[**productsUpdateOne**](ProductsApi.md#productsUpdateOne) | **PUT** /products/{id} | Update one product

<a name="productsDeleteOne"></a>
# **productsDeleteOne**
> productsDeleteOne(id)

Delete one product

Delete one product from DB that matches ID parameter

### Example
```javascript
import {ECommerceAppRestApi} from 'e_commerce_app__rest_api';

let apiInstance = new ECommerceAppRestApi.ProductsApi();
let id = "id_example"; // String | The id of the order.

apiInstance.productsDeleteOne(id, (error, data, response) => {
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
 **id** | **String**| The id of the order. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productsGetAll"></a>
# **productsGetAll**
> productsGetAll()

Get all products

Get all products data from DB.

### Example
```javascript
import {ECommerceAppRestApi} from 'e_commerce_app__rest_api';

let apiInstance = new ECommerceAppRestApi.ProductsApi();
apiInstance.productsGetAll((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="productsGetOne"></a>
# **productsGetOne**
> productsGetOne(id)

Get one product

Access one product data from DB

### Example
```javascript
import {ECommerceAppRestApi} from 'e_commerce_app__rest_api';

let apiInstance = new ECommerceAppRestApi.ProductsApi();
let id = "id_example"; // String | The id of the order.

apiInstance.productsGetOne(id, (error, data, response) => {
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
 **id** | **String**| The id of the order. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productsNew"></a>
# **productsNew**
> productsNew()

Create new product

Create new product and upload data to DB.

### Example
```javascript
import {ECommerceAppRestApi} from 'e_commerce_app__rest_api';

let apiInstance = new ECommerceAppRestApi.ProductsApi();
apiInstance.productsNew((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productsUpdateOne"></a>
# **productsUpdateOne**
> productsUpdateOne(id)

Update one product

Update product data that matches ID parameter

### Example
```javascript
import {ECommerceAppRestApi} from 'e_commerce_app__rest_api';

let apiInstance = new ECommerceAppRestApi.ProductsApi();
let id = "id_example"; // String | The id of the order.

apiInstance.productsUpdateOne(id, (error, data, response) => {
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
 **id** | **String**| The id of the order. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

