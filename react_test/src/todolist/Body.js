/* ------------------------------
 IMPORT
 ------------------------------ */
import React from 'react';
import ReactDOM from 'react-dom';

import { config } from '../config';
import { FBconfig } from '../config';

import Header from '../modules/_header';
import Footer from '../modules/_footer';
import Todo from '../todolist/Todo';


/* ------------------------------
 GLOBAL VARIABLE
 ------------------------------ */



/* ------------------------------ */



export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      userName: ''
    };
    this.loginCheck = this.loginCheck(this);
  }

  loginCheck(login) {
    firebase.auth().onAuthStateChanged(function(user) {
      console.log(user);
      if (user) {
        // User is signed in.
        login.setState({login: true, userName: user.displayName});
      } else {
        // No user is signed in.
      }
    });
  }

  login() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider).then(function(result) {
      /* ----- MEMO -----------------------------------
         リダイレクトではなく、ポップアップで表示させたい場合は、
         signInWithRedirect を signInWithPopup に書き換える
       -------------------------------------------------- */

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  render() {
    this.loginCheck;
    if(!this.state.login) {
      return (
        <div className="message">
          <p>ログインが必要です</p>
          <button onClick={this.login}>ログイン</button>
        </div>
      );
    }
    return (
      <article>
        <Header />
        <Todo />
        <Footer userName={this.state.userName} />
      </article>
    );
  }
}
