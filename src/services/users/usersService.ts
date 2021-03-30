import {FirebaseAuth} from '../../firebase/authentication/firebaseAuth';
import {UserRepository} from '../../repositories/users/userRepository';

export class UsersService {
  public static signUp = async (email: string, password: string) => {
    const {user} = await FirebaseAuth.signUp(email, password);
    if (!user?.uid) {
      throw new Error('Not found uid');
    }
    const data = {id: user.uid, email};
    await UserRepository.save(data);
    return data;
  };
}
