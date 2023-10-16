# Production Order API

> api for creating production orders made with node, typescript and SQLite

## Setting up

Clone this repo and install all dependencies using:

```
npm i
```

## Running the project

To start the server, run the following command

```
npm run dev
```

## Using the API

In order to use this project, you'll need to make api calls to the database.
It is recommended to use an API client like Postman or Insomnia to use the project efficiently.
All calls are made by adding paths to the server URL:

```
http://localhost:{port}
```

Production orders look like this:
```
{
    "id": 1
    "product":"product name",
    "quantity": 9,
    "deliveryDate": "2023-12-17",
    "status": "inactive"
},
```

Below are the api paths and their uses.

## Order Routes

These calls create or update the production orders.
To use them, add /order to the server link plus one of the paths below.
Updating a non existant order does nothing.

```
Example:
http://localhost:{port}/order/
```

### Create order

```
POST /
```

Creates a production order.
Requires a body with the following structure:

```
{
  "product":"product name",
  "quantity": 9,
  "deliveryDate": "2023-12-17",
}

```
Ids are assigned automatically and status is set to inactive by default.

### Start production

```
PATCH /start/{orderId}
```

Changes a product order status to "in production".

### Pause production

```
PATCH /pause/{orderId}
```

Changes a product order status to "inactive".

### Finish production

```
PATCH /end/{orderId}
```

Changes a product order status to "completed".

## View Routes

These calls list orders based on their status or id.
To use them, add /view to the server link plus one of the paths below.
They all return empty arrays if nothing is found.

```
Example:
http://localhost:{port}/view/
```

### List all orders

```
GET /
```

Lists all production orders.
Returns an array like the one below:

```
[
    {
    "id": 1
    "product":"product name",
    "quantity": 9,
    "deliveryDate": "2023-12-17",
    "status": "inactive"
    },
    {
    "id": 2
    "product":"another product",
    "quantity": 1,
    "deliveryDate": "2023-12-20",
    "status": "completed"
    },
    {
    "id": 3
    "product":"yet another product",
    "quantity": 12,
    "deliveryDate": "2023-11-20",
    "status": "in production"
    }
]
```

### List all inactive orders

```
GET /inactive
```

Lists all inactive production orders.
Returns an array like the one below:

```
[
    {
    "id": 1
    "product":"product name",
    "quantity": 9,
    "deliveryDate": "2023-12-17",
    "status": "inactive"
    },
    {
    "id": 2
    "product":"another product",
    "quantity": 1,
    "deliveryDate": "2023-12-20",
    "status": "inactive"
    },
    {
    "id": 3
    "product":"yet another product",
    "quantity": 12,
    "deliveryDate": "2023-11-20",
    "status": "inactive"
    }
]
```

### List all orders currently in production

```
GET /inprogress
```

Lists all orders currently in production.
Returns an array like the one below:

```
[
    {
    "id": 1
    "product":"product name",
    "quantity": 9,
    "deliveryDate": "2023-12-17",
    "status": "in production"
    },
    {
    "id": 2
    "product":"another product",
    "quantity": 1,
    "deliveryDate": "2023-12-20",
    "status": "in production"
    },
    {
    "id": 3
    "product":"yet another product",
    "quantity": 12,
    "deliveryDate": "2023-11-20",
    "status": "in production"
    }
]
```

### List all completed orders

```
GET /done
```

Lists all completed production orders.
Returns an array like the one below:

```
[
    {
    "id": 1
    "product":"product name",
    "quantity": 9,
    "deliveryDate": "2023-12-17",
    "status": "completed"
    },
    {
    "id": 2
    "product":"another product",
    "quantity": 1,
    "deliveryDate": "2023-12-20",
    "status": "completed"
    },
    {
    "id": 3
    "product":"yet another product",
    "quantity": 12,
    "deliveryDate": "2023-11-20",
    "status": "completed"
    }
]
```

### Show a specific order

```
GET /{orderId}
```

Lists a single order.
Returns an object like the one below:

```
{
    "id": 1
    "product":"product name",
    "quantity": 9,
    "deliveryDate": "2023-12-17",
    "status": "inactive"
}
```
