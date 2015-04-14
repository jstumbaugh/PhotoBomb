Parse.initialize("4YUumbwDoIOBcvA70vOQarhAwW2EpUuNB48ymoxa", "lWQ9zJCAFs31DZ38NimVY59Jpy0l0HZGBxk0IAzX");

function testPostToParse(title, contributor, imgsrc, votes) {

	alert("Assignment 7: testPostToParse function called. Look in console for output");
	console.log("testPostToParse output");

	var Picture = Parse.Object.extend("Picture");
	var pic = new Picture();
	pic.set("picTitle", title);
	pic.set("contributor", contributor);
	pic.set("imgsrc", imgsrc);
	pic.set("votes", votes);

	pic.save(null, {
		success: function(pic) {
			console.log('New object created with objectId: ' + pic.id);
		},
		error: function(pic, error) {
			console.log('Failed to create new object, with error code: ' + error.message);
		}
	});

}

//testPostToParse("TEST", "stumbeast", "imgsrc", 1000);

function testGetFromParse(ID) {
	alert("Assignment 7: testGetFromParse function called. Look in console for output");
	console.log("testGetFromParse output");

	var Picture = Parse.Object.extend("Picture");
	var query = new Parse.Query(Picture);
	query.get(ID, {
		success: function(pic) {
			console.log("Success in retireving object");
			console.log(pic.attributes);
		},
		error: function(object, error) {
			console.log('Failed to create new object, with error code: ' + error.message);
		}
	});

}

//testGetFromParse("RwIi5TXbL8");

function testGetCollectionFromParse() {
	alert("Assignment 7: testGetCollectionFromParse function called. Look in console for output");
	console.log("testGetCollectionFromParse output");
	
	var Picture = Parse.Object.extend("Picture");
	var pictureCollection = Parse.Collection.extend({
		model: Picture
	});
	var collection = new pictureCollection();

	collection.fetch({
		success: function(collection) {
			console.log("Success retreiving collection of Picture");
			collection.each(function(object) {
				console.warn(object.attributes);
			});
		},
		error: function(collection, error) {
			console.log("Error retreiving collection of Picture");
		}
	});
}

//testGetCollectionFromParse();

function testUpdateObjectParse(title, contributor, imgsrc, votes) {

	alert("Assignment 7: testUpdateObjectParse function called. Look in console for output");
	console.log("testUpdateObjectParse output");
	console.log("Initial title of object: " + title);
	var Picture = Parse.Object.extend("Picture");
	var pic = new Picture();
	pic.set("picTitle", title);
	pic.set("contributor", contributor);
	pic.set("imgsrc", imgsrc);
	pic.set("votes", votes);

	pic.save(null, {
		success: function(pic) {
			console.log('New object created with objectId: ' + pic.id);
			pic.set("title", "UPDATED TITLE");
			pic.save();
			console.log("Updated title of object: " + pic.attributes.title);
		},
		error: function(pic, error) {
			console.log('Failed to create new object, with error code: ' + error.message);
		}
	});
}

//testUpdateObjectParse("TEST", "stumbeast", "imgsrc", 1000);

function testDeletObjectFromParse(ID) {
	alert("Assignment 7: testDeletObjectFromParse function called. Look in console for output");
	console.log("testDeletObjectFromParse output");

	var Picture = Parse.Object.extend("Picture");
	var pic = new Picture();
	var query = new Parse.Query(Picture);

	query.get(ID, {
		success: function(pic) {
			console.log("Success in retireving object, begin deleting it");
			pic.destroy({
				success: function(picture) {
					alert("Success in deleting object from Parse");
					console.log("Object was successfully deleted from Parse");
				},
				error: function(picture, error) {
					console.log("Object was not successfully deleted from Parse. Error: " + error);
				}
			});
		},
		error: function(object, error) {
			console.log('Failed to retrieve object, with error code: ' + error.message);
		}
	});

}

//testDeletObjectFromParse("HoV34NDhig");

