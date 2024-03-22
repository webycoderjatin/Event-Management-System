import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
  import { getDatabase , ref , set} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD5DqbFcMgFZxsgi-Ne8N7aJ54eNMFNxwA",
    authDomain: "event-management-system-7344b.firebaseapp.com",
    projectId: "event-management-system-7344b",
    storageBucket: "event-management-system-7344b.appspot.com",
    messagingSenderId: "450043972386",
    appId: "1:450043972386:web:a99c22b22713963ed1b37b",
    measurementId: "G-XM87NDK5VR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  var database = getDatabase(app);

  export default function save(){
        var u_name = document.getElementById("username").value
        var f_name = document.getElementById("full-name").value
        var email = document.getElementById("email").value
  
        database.ref('users/'+ username).set({
            email : email,
            username : u_name,
            fullname : f_name
        })

        alert("SAVED")
  }

  
  function get(){

  }

  function update(){

  }

  function remove(){

  }


