import { color } from "@rneui/base";
import { firebase } from "../../firebase.js";
import { USER_STATE_CHANGE } from "../constants/index.js";

export function fetchUser() {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("user")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() });
        } else {
          console.log("User does not exist");
        }
      });
  };
}
