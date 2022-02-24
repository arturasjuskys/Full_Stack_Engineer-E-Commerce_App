# ECommerceAppRestApi.AccountsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountsDeleteOne**](AccountsApi.md#accountsDeleteOne) | **DELETE** /accounts/{id} | Delete one account
[**accountsGetAll**](AccountsApi.md#accountsGetAll) | **GET** /accounts | Get all accounts
[**accountsGetOne**](AccountsApi.md#accountsGetOne) | **GET** /accounts/{id} | Get one account
[**accountsNew**](AccountsApi.md#accountsNew) | **POST** /accounts/new | Create new account
[**accountsUpdateOne**](AccountsApi.md#accountsUpdateOne) | **PUT** /accounts/{id} | Update one account

<a name="accountsDeleteOne"></a>
# **accountsDeleteOne**
> accountsDeleteOne(id)

Delete one account

Delete one account data from DB that matches ID parameter

### Example
```javascript
import {ECommerceAppRestApi} from 'e_commerce_app__rest_api';

let apiInstance = new ECommerceAppRestApi.AccountsApi();
let id = "id_example"; // String | The id of the order.

apiInstance.accountsDeleteOne(id, (error, data, response) => {
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

<a name="accountsGetAll"></a>
# **accountsGetAll**
> accountsGetAll()

Get all accounts

Get all accounts data from DB

### Example
```javascript
import {ECommerceAppRestApi} from 'e_commerce_app__rest_api';

let apiInstance = new ECommerceAppRestApi.AccountsApi();
apiInstance.accountsGetAll((error, data, response) => {
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

<a name="accountsGetOne"></a>
# **accountsGetOne**
> accountsGetOne(id)

Get one account

Access one account data from DB

### Example
```javascript
import {ECommerceAppRestApi} from 'e_commerce_app__rest_api';

let apiInstance = new ECommerceAppRestApi.AccountsApi();
let id = "id_example"; // String | The id of the order.

apiInstance.accountsGetOne(id, (error, data, response) => {
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

<a name="accountsNew"></a>
# **accountsNew**
> accountsNew()

Create new account

Create new account and upload data to DB

### Example
```javascript
import {ECommerceAppRestApi} from 'e_commerce_app__rest_api';

let apiInstance = new ECommerceAppRestApi.AccountsApi();
apiInstance.accountsNew((error, data, response) => {
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

<a name="accountsUpdateOne"></a>
# **accountsUpdateOne**
> accountsUpdateOne(id)

Update one account

Update account data that matches ID parameter

### Example
```javascript
import {ECommerceAppRestApi} from 'e_commerce_app__rest_api';

let apiInstance = new ECommerceAppRestApi.AccountsApi();
let id = "id_example"; // String | The id of the order.

apiInstance.accountsUpdateOne(id, (error, data, response) => {
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

