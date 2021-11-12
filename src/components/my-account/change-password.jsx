import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { isEmpty } from 'lodash';
import { useChangePasswordMutation } from '@framework/customer/use-change-password';
import { Button } from 'components/common/button/button';
import { Headline } from 'assets/styles/pages.style';

import {
  FormWrapper,
  FormRow,
  FormField,
  LabelError,
  PasswordInput,
} from 'components/common/form/input';

const ChangePassword = () => {
  const { mutate: changePassword, isLoading } = useChangePasswordMutation();

  const initialValues = {
    password: '',
    new_password: '',
  };

  const validate = {
    password: yup
      .string()
      .min(6, 'Minimum 6 characters')
      .max(30, 'Maximum 30 characters')
      .required('Old Password is a required field'),
    new_password: yup
      .string()
      .min(6, 'Minimum 6 characters')
      .max(30, 'Maximum 30 characters')
      .required('New Password is a required field'),
  };

  const updateCallback = async (
    values,
    { touched, validateForm, setTouched, setSubmitting }
  ) => {
    const errs = await validateForm();

    if (isEmpty(errs)) {
      await changePassword(values);
      setSubmitting(false);
    } else {
      setTouched({ ...touched, ...errs });
    }
  };

  return (
    <Formik
      validateOnBlur
      initialValues={initialValues}
      validationSchema={yup.object().shape(validate)}
      onSubmit={updateCallback}>
      {({ values, handleChange, handleBlur, touched, errors }) => (
        <Form noValidate>
          <FormWrapper border>
            <Headline>Change Password</Headline>
            <FormRow columns={2} columnGap={1}>
              <FormField>
                <PasswordInput
                  name="password"
                  placeholder="Old Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors['password']) && touched['password']}
                  value={values.password}
                />
                {Boolean(errors['password']) && touched['password'] && (
                  <LabelError>{errors.password}</LabelError>
                )}
              </FormField>
              <FormField>
                <PasswordInput
                  name="new_password"
                  placeholder="New Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    Boolean(errors['new_password']) && touched['new_password']
                  }
                  value={values.new_password}
                />
                {Boolean(errors['new_password']) && touched['new_password'] && (
                  <LabelError>{errors.new_password}</LabelError>
                )}
              </FormField>
            </FormRow>
            <Button
              alignSelf="flex-end"
              loading={isLoading}
              disabled={isLoading}>
              Save
            </Button>
          </FormWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default ChangePassword;
