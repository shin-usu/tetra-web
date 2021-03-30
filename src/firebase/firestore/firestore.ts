import {Firebase} from '../firebase';

export class Firestore {
  public static create = async <T>(path: string, data: T, docId?: string) => {
    if (docId) {
      return await Firebase.getInstance().firestore().collection(path).doc(docId).set(data);
    }
    return await Firebase.getInstance().firestore().collection(path).add(data);
  };
}
