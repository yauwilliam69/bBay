# bBay
Full Stack Development Spring 2023 Group 12 Final Project

### API Documentation
```
1. get_inventory()
```
* `get_inventory` will be the store's entire inventory, used for rendering the client's view of the store. The inventory will be encoded as a dictionary where keys represent the items.
* Clients will instantiate cards for each key in the dictionary.
* This will be queried via GET requests from the client.

```
2. post_purchase_products(order_dict)
```
* `post_purchase_products` will be used by clients to notify the server of a purchased list of products. It will encode the purchase as a dictionary where keys are the purchased items and values are the quantity of each item.
* Server will update the representation of its inventory upon receiving it
* This will be queried via POST requests from the client.