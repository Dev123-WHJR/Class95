 // Your web app's Firebase configuration
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

  user_name = localStorage.getItem(user_name);
  document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

//ADD YOUR FIREBASE LINKS HERE

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({purpose: "adding room name" }); 

  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_page.html";   
}

function getData() 
{
  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;

 //Start code
  console.log("Room name -" + Room_names);
  row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"; 
document.getElementById("output").innerHTML += row;
 //End code
 });});}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name".name);
  window.location = "kwitter_page";
  
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}