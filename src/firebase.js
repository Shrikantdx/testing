// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyDoR28o7aUqieM-QGrsCwbQJeICYm4nL-Q",
    // authDomain: "realtor-clone-react.firebaseapp.com",
    // projectId: "realtor-clone-react",
    // storageBucket: "realtor-clone-react.appspot.com",
    // messagingSenderId: "274012290784",
    // appId: "1:274012290784:web:6613bae03bba4331989a85",




    apiKey: "AIzaSyBL0Qj-osvxmN8nYFJbadE8TeEUvPo-tC0",
    authDomain: "realtor-react-bf691.firebaseapp.com",
    projectId: "realtor-react-bf691",
    storageBucket: "realtor-react-bf691.appspot.com",
    messagingSenderId: "111159396647",
    appId: "1:111159396647:web:a378d35063a44d68040102"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBL0Qj-osvxmN8nYFJbadE8TeEUvPo-tC0",
//   authDomain: "realtor-react-bf691.firebaseapp.com",
//   projectId: "realtor-react-bf691",
//   storageBucket: "realtor-react-bf691.appspot.com",
//   messagingSenderId: "111159396647",
//   appId: "1:111159396647:web:a378d35063a44d68040102"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
