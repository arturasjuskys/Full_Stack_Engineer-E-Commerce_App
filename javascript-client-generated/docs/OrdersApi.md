# ECommerceAppRestApi.OrdersApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ordersDeleteOne**](OrdersApi.md#ordersDeleteOne) | **DELETE** /order/{id} | Delete one order
[**ordersGetAll**](OrdersApi.md#ordersGetAll) | **GET** /orders | Get all orders
[**ordersGetOne**](OrdersApi.md#ordersGetOne) | **GET** /order/{id} | Get one order
[**ordersNew**](OrdersApi.md#ordersNew) | **POST** /orders/new | Create new order
[**ordersUpdateOne**](OrdersApi.md#ordersUpdateOne) | **PUT** /order/{id} | Update one order

<a name="ordersDeleteOne"></a>
# **ordersDeleteOne**
> ordersDeleteOne(id)

Delete one order

Delete one order data from DB that matches ID parameter

### Example
```javascript
import {ECommerceAppRestApi} from 'e_commerce_app__rest_api';

let apiInstance = new ECommerceAppRestApi.OrdersApi();
let id = "id_example"; // String | The id of the order.

apiInstance.ordersDeleteOne(id, (error, data, response) => {
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

<a name="ordersGetAll"></a>
# **ordersGetAll**
> ordersGetAll()

Get all orders

Get all orders data from DB

### Example
```javascript
import {ECommerceAppRestApi} from 'e_commerce_app__rest_api';

let apiInstance = new ECommerceAppRestApi.OrdersApi();
apiInstance.ordersGetAll((error, data, response) => {
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

<a name="ordersGetOne"></a>
# **ordersGetOne**
> ordersGetOne(id)

Get one order

Access one order data from DB

### Example
```javascript
import {ECommerceAppRestApi} from 'e_commerce_app__rest_api';

let apiInstance = new ECommerceAppRestApi.OrdersApi();
let id = "id_example"; // String | The id of the order.

apiInstance.ordersGetOne(id, (error, data, response) => {
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

<a name="ordersNew"></a>
# **ordersNew**
> ordersNew()

Create new order

Create new order and upload data to DB

### Example
```javascript
import {ECommerceAppRestApi} from 'e_commerce_app__rest_api';

let apiInstance = new ECommerceAppRestApi.OrdersApi();
apiInstance.ordersNew((error, data, response) => {
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

<a name="ordersUpdateOne"></a>
# **ordersUpdateOne**
> ordersUpdateOne(id)

Update one order

Update order data that matches ID parameter

### Example
```javascript
import {ECommerceAppRestApi} from 'e_commerce_app__rest_api';

let apiInstance = new ECommerceAppRestApi.OrdersApi();
let id = "id_example"; // String | The id of the order.

apiInstance.ordersUpdateOne(id, (error, data, response) => {
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

