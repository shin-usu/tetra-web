import {StoreTypeUser} from '../../types/stores/users/storeTypeUser';
import {FirestoreUsers} from '../../firebase/firestore/refs/firestoreUsers';

export class UserRepository {
  public static save = async (data: StoreTypeUser) => {
    return await FirestoreUsers.create(data);
  };
}
