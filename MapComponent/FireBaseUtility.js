 // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AAAAf8lTkd8:APA91bGT9r04XvRqreUuPKjupVXLV33eXYCq-IxKGfKYZZhrazLnIa1RaSjsrwq0yXeZGZcgBYiVjX030kyTz7eXlV6udL4okHuKSKCgYwJkLffrAMUqfmtrnIU90X62AiNJYadngsmJ",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com",
    storageBucket: "bucket.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();