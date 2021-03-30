import {Firebase} from '../firebase';

export class FirebaseAuth {
  public static signUp = async (email: string, password: string) => {
    const res = await Firebase.getInstance().auth().createUserWithEmailAndPassword(email, password);
    console.log(res);
    return res;
  };
}