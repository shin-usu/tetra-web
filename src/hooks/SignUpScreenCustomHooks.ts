import {useCallback, useMemo, useState} from 'react';
import {UsersService} from '../services/users/usersService';

export const useSignUpScreenCustomHooks = () => {
  const [signUpEmail, setSignUpEmail] = useState<string>('');
  const [signUpPassword, setSignUpPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const handleChangeEmail = useCallback((e) => {
    setSignUpEmail(e.target.value as string);
  }, []);

  const handleChangePassword = useCallback((e) => {
    setSignUpPassword(e.target.value as string);
  }, []);

  const handleChangeConfirmPassword = useCallback((e) => {
    setConfirmPassword(e.target.value as string);
  }, []);

  const disableSignUpBtn = useMemo(() => {
    if (signUpPassword === '' || signUpEmail === '' || confirmPassword === '') {
      return true;
    }
    return signUpPassword !== confirmPassword;

  }, [confirmPassword, signUpEmail, signUpPassword]);

  const resetSignUpInfo = (): void => {
    setSignUpEmail('');
    setSignUpPassword('');
    setConfirmPassword('');
  };

  const signUp = useCallback(async () => {
    try {
      await UsersService.signUp(signUpEmail, signUpPassword);
      resetSignUpInfo();
    } catch (e) {
      console.error(e);
    }
  }, [signUpEmail, signUpPassword]);

  return {
    state: {signUpEmail, signUpPassword, confirmPassword},
    memo: {disableSignUpBtn},
    function: {handleChangeEmail, handleChangePassword, handleChangeConfirmPassword, signUp}
  };
};
