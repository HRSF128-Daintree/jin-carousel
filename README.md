# Project Name

> Project description

## Related Projects

  - https://github.com/HRSF128-Daintree/reviews2
  - https://github.com/HRSF128-Daintree/erik-calendar
  - https://github.com/HRSF128-Daintree/about

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```


## Server API

### Get hotel info
  * GET `/api/:hotelID/photosd`

**Path Parameters:**
  * `hotelId` hotel id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "user_id": "Number",
      "hotel_id": "Number",
      "name": "String",
      "date": "Date",
      "hotel_photos": [{ "imageUrl": "String", "caption": "String" }],
      "travelers": [{ "imageUrl": "String", "username": "String", "rating": "Number" }],
      "price": "Number",
      "reviews": "Number",
      "rating": "Number",
      "location": "String",
      "type": "String",
      "phoneNumber": "Number",
      "views": "Number",
    }
```

### Add hotel
  * POST `/api/:hotelID/photos`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "hotel_photos": [{ "imageUrl": "String", "caption": "String" }],
    }
```


### Update hotel photo caption
  * PATCH `/api/:hotelID/photos`

**Path Parameters:**
  * `hotelId` hotel id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "hotel_photos": [{
        "imageUrl": "String",
        "caption": "String"
        }],
    }
```

### Delete hotel photos
  * DELETE `/api/:hotelID/photos`

**Path Parameters:**
  * `id` hotel id

**Success Status Code:** `204`