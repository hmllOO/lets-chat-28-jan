var firebaseConfig = {
    apiKey: "AIzaSyAoB8DAnPvKh08eEU8ognQzhWsm1-bib3o",
    authDomain: "lets-chat-bed67.firebaseapp.com",
    databaseURL: "https://lets-chat-bed67-default-rtdb.firebaseio.com",
    projectId: "lets-chat-bed67",
    storageBucket: "lets-chat-bed67.appspot.com",
    messagingSenderId: "233266194452",
    appId: "1:233266194452:web:cb0fcb37136691082f1f01"
  };
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
   localStorage.getItem("user_name").innerHTML = "Welcome to LetsChat " + user_name + "!";

   function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name..."
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
   }