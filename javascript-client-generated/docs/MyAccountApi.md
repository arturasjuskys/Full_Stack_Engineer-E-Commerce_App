# ECommerceAppRestApi.MyAccountApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cartCheckout**](MyAccountApi.md#cartCheckout) | **POST** /my-account/cart/checkout | Process checkout
[**cartDeleteAll**](MyAccountApi.md#cartDeleteAll) | **DELETE** /my-account/cart | Delete all
[**cartDeleteOne**](MyAccountApi.md#cartDeleteOne) | **DELETE** /my-account/cart/{id} | Delete product from cart
[**cartGetAll**](MyAccountApi.md#cartGetAll) | **GET** /my-account/cart | Get cart
[**cartGetOne**](MyAccountApi.md#cartGetOne) | **GET** /my-account/cart/{id} | Get one product from cart
[**cartUpdateOne**](MyAccountApi.md#cartUpdateOne) | **PUT** /my-account/cart/{id} | Update product in cart
[**myAccountDelete**](MyAccountApi.md#myAccountDelete) | **DELETE** /my-account | Delete personal account
[**myAccountGet**](MyAccountApi.md#myAccountGet) | **GET** /my-account | Get personal account
[**myAccountUpdate**](MyAccountApi.md#myAccountUpdate) | **PUT** /my-account | Update personal account

<a name="cartCheckout"></a>
# **cartCheckout**
> cartCheckout()

Process checkout

Process cart products and payment and then create new order and save data to DB

### Example
```javascript
import {ECommerceAppRestApi} from 'e_commerce_app__rest_api';

let apiInstance = new ECommerceAppRestApi.MyAccountApi();
apiInstance.cartCheckout((error, data, response) => {
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

<a name="cartDeleteAll"></a>
# **cartDeleteAll**
> cartDeleteAll()

Delete all

Delete all products from personal cart

### Example
```javascript
import {ECommerceAppRestApi} from 'e_commerce_app__rest_api';

let apiInstance = new ECommerceAppRestApi.MyAccountApi();
apiInstance.cartDeleteAll((error, data, response) => {
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

<a name="cartDeleteOne"></a>
# **cartDeleteOne**
> cartDeleteOne(id)

Delete product from cart

Delete one product form personal cart

### Example
```javascript
import {ECommerceAppRestApi} from 'e_commerce_app__rest_api';

let apiInstance = new ECommerceAppRestApi.MyAccountApi();
let id = "id_example"; // String | The id of the order.

apiInstance.cartDeleteOne(id, (error, data, response) => {
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

<a name="cartGetAll"></a>
# **cartGetAll**
> cartGetAll()

Get cart

Access all items inside users cart

### Example
```javascript
import {ECommerceAppRestApi} from 'e_commerce_app__rest_api';

let apiInstance = new ECommerceAppRestApi.MyAccountApi();
apiInstance.cartGetAll((error, data, response) => {
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

<a name="cartGetOne"></a>
# **cartGetOne**
> cartGetOne(id)

Get one product from cart

Access one product inside personal cart

### Example
```javascript
import {ECommerceAppRestApi} from 'e_commerce_app__rest_api';

let apiInstance = new ECommerceAppRestApi.MyAccountApi();
let id = "id_example"; // String | The id of the order.

apiInstance.cartGetOne(id, (error, data, response) => {
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

<a name="cartUpdateOne"></a>
# **cartUpdateOne**
> cartUpdateOne(id)

Update product in cart

Update product quantity inside personal cart

### Example
```javascript
import {ECommerceAppRestApi} from 'e_commerce_app__rest_api';

let apiInstance = new ECommerceAppRestApi.MyAccountApi();
let id = "id_example"; // String | The id of the order.

apiInstance.cartUpdateOne(id, (error, data, response) => {
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

<a name="myAccountDelete"></a>
# **myAccountDelete**
> myAccountDelete()

Delete personal account

Delete personal account from DB

### Example
```javascript
import {ECommerceAppRestApi} from 'e_commerce_app__rest_api';

let apiInstance = new ECommerceAppRestApi.MyAccountApi();
apiInstance.myAccountDelete((error, data, response) => {
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

<a name="myAccountGet"></a>
# **myAccountGet**
> myAccountGet()

Get personal account

Access personal account data from DB

### Example
```javascript
import {ECommerceAppRestApi} from 'e_commerce_app__rest_api';

let apiInstance = new ECommerceAppRestApi.MyAccountApi();
apiInstance.myAccountGet((error, data, response) => {
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

<a name="myAccountUpdate"></a>
# **myAccountUpdate**
> myAccountUpdate()

Update personal account

Update personal account data in DB

### Example
```javascript
import {ECommerceAppRestApi} from 'e_commerce_app__rest_api';

let apiInstance = new ECommerceAppRestApi.MyAccountApi();
apiInstance.myAccountUpdate((error, data, response) => {
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
