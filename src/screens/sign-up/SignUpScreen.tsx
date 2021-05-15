import React, {useMemo} from 'react';
import {Button, makeStyles, TextField, Typography} from '@material-ui/core';
import styled from 'styled-components';
import {useSignUpScreenCustomHooks} from '../../hooks/SignUpScreenCustomHooks';

const SignUpScreen = React.memo(() => {
  const classes = useStyle();
  const {
    state: {signUpEmail, confirmPassword, signUpPassword},
    function: {
      signUp,
      handleChangeConfirmPassword,
      handleChangeEmail,
      handleChangePassword
    },
    memo: {disableSignUpBtn}
  } = useSignUpScreenCustomHooks();

  const EmailInputArea = useMemo(() => {
    return (
        <TextField
          value={signUpEmail}
          className={classes.signUpTextField}
          label={'email'}
          variant={'outlined'}
          onChange={handleChangeEmail}
        />
    );
  }, [classes.signUpTextField, handleChangeEmail, signUpEmail]);

  const PasswordInputArea = useMemo(() => {
    return (
        <TextField
          value={signUpPassword}
          className={classes.signUpTextField}
          label={'password'}
          variant={'outlined'}
          type={'password'}
          onChange={handleChangePassword}
        />
    );
  }, [classes.signUpTextField, handleChangePassword, signUpPassword]);

  const ConfirmPasswordInputArea = useMemo(() => {
    return (
        <TextField
          value={confirmPassword}
          className={classes.signUpTextField}
          label={'password confirm'}
          variant={'outlined'}
          type={'password'}
          onChange={handleChangeConfirmPassword}
        />
    );
  }, [classes.signUpTextField, confirmPassword, handleChangeConfirmPassword]);

  return (
    <ScreenRoot>
      <Typography variant={'h3'}>Sign Up</Typography>
      <Spacer16 />
      {EmailInputArea}
      <Spacer16 />
      {PasswordInputArea}
      <Spacer16 />
      {ConfirmPasswordInputArea}
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
