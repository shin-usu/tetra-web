import {StoreTypeUser} from '../../../types/stores/users/storeTypeUser';
import {Firestore} from '../firestore';

const FIRESTORE_USERS_COLLECTION_PATH = 'users';
export class FirestoreUsers {
  public static create = async (data: StoreTypeUser) =>
    await Firestore.create<StoreTypeUser>(FIRESTORE_USERS_COLLECTION_PATH, data, data.id);
}
