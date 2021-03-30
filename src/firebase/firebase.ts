import {Env} from '../common/env/env';
import firebase from 'firebase';

const config = {
  apiKey: Env.firebase.apiKey,
  authDomain: Env.firebase.authDomain,
  projectId: Env.firebase.projectId,
  storageBucket: Env.firebase.storageBucket,
  messagingSenderId: Env.firebase.messagingSenderId,
  appId: Env.firebase.appId,
  measurementId: Env.firebase.measurementId,
};

export class Firebase {
  private static instance?: firebase.app.App = undefined;
  public static init = () => {
    if (Firebase.instance) {
      throw new Error('Already initialized.');
    }
    Firebase.instance = firebase.initializeApp(config);
  };

  public static getInstance = () => {
    if (!Firebase.instance) {
      throw new Error('Not initialize firebase.');
    }
    return Firebase.instance;
  };
}
