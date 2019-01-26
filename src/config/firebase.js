// import * as firebase from "firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

export const fbAuth = firebase.auth();
export const database = firebase.database();
