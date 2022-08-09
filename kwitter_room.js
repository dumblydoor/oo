
var firebaseConfig = {
      apiKey: "AIzaSyDvsb6yNdvsLVF5CZFIhAbRE268AvH_XsA",
      authDomain: "aquila-kwitter.firebaseapp.com",
      databaseURL: "https://aquila-kwitter-default-rtdb.firebaseio.com",
      projectId: "aquila-kwitter",
      storageBucket: "aquila-kwitter.appspot.com",
      messagingSenderId: "669085389266",
      appId: "1:669085389266:web:aba3044e59ec322199780b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
