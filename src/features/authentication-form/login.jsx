import { isEmpty } from 'lodash';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useLoginMutation } from '@framework/auth/use-login';

import { useUI } from 'contexts/ui.context';
import { LabelError, Input, PasswordInput } from 'components/common/form/input';
import { Button } from 'components/common/button/button';
import Logo from 'layouts/logo/logo';
import LogoImage from 'assets/images/logo.svg';

import {
  Wrapper,
  Container,
  LogoWrapper,
  Heading,
  SubHeading,
  FormFieldsWrapper,
  FormRow,
  FormField,
  SmallButton,
  Offer,
  LinkButton,
} from 'components/common/form/form.style';

export default function SignInModal({ logo = false }) {
  const { openModal, toggleSignUpForm, toggleForgotPassForm } = useUI();
  const { mutate: login, isLoading } = useLoginMutation();

  const initialValues = {
    email: '',
    password: '',
  };

  const runToggleForgotPassForm = () => {
    toggleForgotPassForm();
    openModal();
  };

  const runToggleSignUpForm = () => {
    toggleSignUpForm();
    openModal();
  };

  const validate = {
    email: yup
      .string()
      .email('Invalid email format')
      .max(40, 'Maximum 40 characters')
      .required('Email is a required field'),
    password: yup
      .string()
      .min(6, 'Minimum 6 characters')
      .max(30, 'Maximum 30 characters')
      .required('Password is a required field'),
  };

  const loginCallback = async (
    values,
    { touched, validateForm, setTouched, setSubmitting }
  ) => {
    const errs = await validateForm();

    if (isEmpty(errs)) {
      await login(values);
      setSubmitting(false);
    } else {
      setTouched({ ...touched, ...errs });
    }
  };

  return (
    <Wrapper>
      <Container>
        {logo && (
          <LogoWrapper>
            <Logo imageUrl={LogoImage.src} showIcon={false} />
          </LogoWrapper>
        )}
        <Heading>Welcome Back</Heading>
        <SubHeading>Login with your email &amp; password</SubHeading>

        <Formik
          validateOnBlur
          initialValues={initialValues}
          validationSchema={yup.object().shape(validate)}
          onSubmit={loginCallback}>
          {({ values, handleChange, handleBlur, touched, errors }) => (
            <Form noValidate>
              <FormFieldsWrapper>
                <FormRow>
                  <FormField>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors['email']) && touched['email']}
                      required
                    />
                    {Boolean(errors['email']) && touched['email'] && (
                      <LabelError>{errors.email}</LabelError>
                    )}
                  </FormField>
                </FormRow>

                <FormRow>
                  <FormField>
                    <PasswordInput
                      name="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors['password']) && touched['password']}
                      required
                    />
                    {Boolean(errors['password']) && touched['password'] && (
                      <LabelError>{errors.password}</LabelError>
                    )}
                  </FormField>
                </FormRow>
              </FormFieldsWrapper>

              <SmallButton onClick={runToggleForgotPassForm}>
                Forgot your password?
              </SmallButton>

              <Button
                disabled={isLoading}
                loading={isLoading}
                type="submit"
                radius="large"
                size="big"
                fullwidth>
                Login
              </Button>
            </Form>
          )}
        </Formik>
        <Offer>
          Don't have any account?{' '}
          <LinkButton onClick={runToggleSignUpForm}>Sign Up</LinkButton>
        </Offer>
      </Container>
    </Wrapper>
  );
}
