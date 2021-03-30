import React, {useCallback, useMemo, useState} from 'react';
import {Button, makeStyles, TextField, Typography} from '@material-ui/core';
import styled from 'styled-components';
import {UsersService} from '../../services/users/usersService';

const SignUpScreen = React.memo(() => {
  const classes = useStyle();
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

  return (
    <ScreenRoot>
      <Typography variant={'h3'}>Sign Up</Typography>
      <Spacer16 />
       <div>
        <TextField value={signUpEmail} className={classes.signUpTextField} label={'email'} variant={'outlined'} onChange={handleChangeEmail} />
       </div>
      <Spacer16 />
      <div>
        <TextField value={signUpPassword} className={classes.signUpTextField} label={'password'} variant={'outlined'} type={'password'} onChange={handleChangePassword} />
      </div>
      <Spacer16 />
      <div>
        <TextField value={confirmPassword} className={classes.signUpTextField} label={'password confirm'} variant={'outlined'} type={'password'} onChange={handleChangeConfirmPassword} />
      </div>
      <Spacer16 />
      <Button disabled={disableSignUpBtn} variant={'contained'} color={'primary'} className={classes.signUpBtn} onClick={signUp}>登録</Button>
    </ScreenRoot>
  );
});

const useStyle = makeStyles({
  signUpTextField: {minWidth: 500},
  signUpBtn: {minWidth: 500, height: 48},
});

const ScreenRoot = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Spacer16 = styled.div`
  margin-bottom: 16px;
`;

export default SignUpScreen;
