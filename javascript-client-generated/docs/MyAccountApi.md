# ECommerceAppRestApi.MyAccountApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**myAccountDelete**](MyAccountApi.md#myAccountDelete) | **DELETE** /my-account | Delete personal account
[**myAccountGet**](MyAccountApi.md#myAccountGet) | **GET** /my-account | Get personal account
[**myAccountUpdate**](MyAccountApi.md#myAccountUpdate) | **PUT** /my-account | Update personal account

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

