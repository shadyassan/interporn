import { isEmpty } from 'lodash';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { useUI } from 'contexts/ui.context';
import { LabelError, Input } from 'components/common/form/input';
import { Button } from 'components/common/button/button';

import {
  Wrapper,
  Container,
  Heading,
  SubHeading,
  FormFieldsWrapper,
  FormField,
  Offer,
  LinkButton,
} from 'components/common/form/form.style';

export default function ForgotPasswordModal() {
  const { toggleSignInForm, closeModal } = useUI();

  const initialValues = {
    email: '',
  };

  const validate = {
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is a required field'),
  };

  const resetCallback = async (
    values,
    { touched, validateForm, setTouched, setSubmitting }
  ) => {
    const errs = await validateForm();

    if (isEmpty(errs)) {
      // api
    } else {
      setTouched({ ...touched, ...errs });
    }
  };

  return (
    <Wrapper>
      <Container>
        <Heading>Forgot Password</Heading>
        <SubHeading>We'll send you a link to reset your password</SubHeading>

        <Formik
          validateOnBlur
          initialValues={initialValues}
          validationSchema={yup.object().shape(validate)}
          onSubmit={resetCallback}>
          {({ values, handleChange, handleBlur, touched, errors }) => (
            <Form noValidate>
              <FormFieldsWrapper>
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
              </FormFieldsWrapper>

              <Button type="submit" radius="large" size="big" fullwidth>
                Reset Password
              </Button>
            </Form>
          )}
        </Formik>
        <Offer>
          Back to? <LinkButton onClick={toggleSignInForm}>Login</LinkButton>
        </Offer>
      </Container>
    </Wrapper>
  );
}
