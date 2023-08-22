
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCllovhX_aGKcQI-RHCKCtLHyNQQaZBBYk",
    authDomain: "myportfolio-8b351.firebaseapp.com",
    projectId: "myportfolio-8b351",
    storageBucket: "myportfolio-8b351.appspot.com",
    messagingSenderId: "75899531949",
    appId: "1:75899531949:web:1284c0fd0d2733a9a9cc24"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  const db = getDatabase(app);

  document.getElementById("submit").addEventListener('click',function(e){

    set(ref(db, 'user/' + document.getElementById("username").value),
    {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        text: document.getElementById("subject").value,

    });

    alert("Submitted Successfully !")

  })

  
