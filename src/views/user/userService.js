import { Auth } from "./firebase/config";

export function SignIn(email, password) {
  // Sign in with email and password
  Auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      userCredential.user.getIdToken().then((token) => {
        localStorage.setItem("token", token);
      });
    })
    .catch((error) => {});
}

export function SignUp(user, password) {
  // Sign in with email and password
  Auth.createUserWithEmailAndPassword(user.email, password)
    .then((userCredential) => {
      // Signed in
      userCredential.user.getIdToken().then((token) => {
        localStorage.setItem("token", token);
      });
    })
    .catch((error) => {});
}

export function SignOut() {
  // Sign in with email and password
  Auth.signOut()
    .then((userCredential) => {
      localStorage.clear();
    })
    .catch((error) => {});
}
