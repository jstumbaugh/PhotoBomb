FORMAT: 1A

# PhotoBomb API
These are the basic API's needed for PhotoBomb.

## Pictures by ID [/pics/{id}]
Each Picture will have a specific ID associated with it. It will be used to find the url associated with it.

+ Parameters

    + id (number, `1`) ... An unique identifier of the message.


### Get Picture by ID [GET]
This will return a specific picture associated with the ID passed in.
+ Request (application/json)

        { "id": 1 }
        
+ Response 200 (application/json)

        { "id": 1, "url": "http://i.imgur.com/dMUJUsp.jpg" }


### Delete a Picture [DELETE]
This will permanently delete a picture from the database.
+ Request (application/json)

        { "id": 1 }

+ Response 204


## All Pictures [/pics/all]
### Get all Pictures [GET]
+ Request (application/json)

        { "id": 0 }

+ Response 200 (application/json)

        [{
          "id": 1, "url": "http://i.imgur.com/dMUJUsp.jpg"
        }, {
          "id": 2, "url": "http://i.imgur.com/DK16Jbs.jpg"
        }]


## Pictures by URL [/pics/{url}]
Each picture will also have a URL associated with it. These calls use the picture's URL.


### Create a Picture [POST]
This will create the picture in the database by assigning an ID to a specific URL passed to it. 
+ Request (application/json)

        { "url": "http://i.imgur.com/i57x0J8.jpg" }

+ Response 201 (application/json)

        { "id": 3, "url": "http://i.imgur.com/i57x0J8.jpg" }


### Update Picture [PATCH]
This will update a URL in the database by passing in the ID and the URL.
+ Request (application/json)

        { "id": 3, "url": "http://i.imgur.com/E9r0FU9.jpg" }

+ Response 200 (application/json)

        { "id": 3, "url": "http://i.imgur.com/E9r0FU9.jpg" }


### Replace Picture [PUT]
This will replace a picture in the database by updating a URL with a different one.
+ Request (application/json)

        { "id": 3, "url": "http://i.imgur.com/E9r0FU9.jpg" }

+ Response 200 (application/json)

        { "id": 3, "url": "http://i.imgur.com/E9r0FU9.jpg" }


