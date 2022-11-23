import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export const firebaseConfig = {
  apiKey: "AIzaSyBD7C61ZpaWGBQMmCE4GoL4tB4Wo6rn5W8",
  authDomain: "snapmap-but-fiu.firebaseapp.com",
  projectId: "snapmap-but-fiu",
  storageBucket: "snapmap-but-fiu.appspot.com",
  messagingSenderId: "404154936094",
  appId: "1:404154936094:web:0bd36fa17750e7721ab70f",
  measurementId: "G-2376KXCEGY",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
