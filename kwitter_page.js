//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBAn_CQPfzeGgRbTyvQvasydTsqJo4vukE",
      authDomain: "kwitter-797f7.firebaseapp.com",
      databaseURL: "https://kwitter-797f7.firebaseio.com",
      projectId: "kwitter-797f7",
      storageBucket: "kwitter-797f7.appspot.com",
      messagingSenderId: "855922371761",
      appId: "1:855922371761:web:eec04b91fe7e852ec5c690"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
    
          msg = document.getElementById("msg_input").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like: 0   
          });
    
          document.getElementById("msg_input").value = "";
      }

      function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
