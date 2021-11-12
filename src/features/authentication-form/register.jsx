import { isEmpty } from 'lodash';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useSignUpMutation } from '@framework/auth/use-signup';

import { useUI } from 'contexts/ui.context';
import { LabelError, Input, PasswordInput } from 'components/common/form/input';
import { Button } from 'components/common/button/button';

import {
  Wrapper,
  Container,
  Heading,
  SubHeading,
  FormFieldsWrapper,
  FormRow,
  FormField,
  Offer,
  LinkButton,
} from 'components/common/form/form.style';

export default function SignOutModal() {
  const { toggleSignInForm } = useUI();
  const { mutate: signUp, isLoading } = useSignUpMutation();

  const initialValues = {
    email: '',
    password: '',
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

  const registerCallback = async (
    values,
    { touched, validateForm, setTouched, setSubmitting }
  ) => {
    const errs = await validateForm();

    if (isEmpty(errs)) {
      await signUp(values);
      setSubmitting(false);
    } else {
      setTouched({ ...touched, ...errs });
    }
  };

  return (
    <Wrapper>
      <Container>
        <Heading>Register</Heading>
        <SubHeading>Every fill is required in sign up</SubHeading>
        <Formik
          validateOnBlur
          initialValues={initialValues}
          validationSchema={yup.object().shape(validate)}
          onSubmit={registerCallback}>
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

              <Button
                disabled={isLoading}
                loading={isLoading}
                type="submit"
                radius="large"
                size="big"
                fullwidth>
                Register
              </Button>
            </Form>
          )}
        </Formik>
        <Offer>
          Already have an account?{' '}
          <LinkButton onClick={toggleSignInForm}>Login</LinkButton>
        </Offer>
      </Container>
    </Wrapper>
  );
}
