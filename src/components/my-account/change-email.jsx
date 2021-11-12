import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { isEmpty } from 'lodash';
import { useGetCustomer } from '@framework/customer/use-get-customer';
import { useChangeEmailMutation } from '@framework/customer/use-change-email';
import { Button } from 'components/common/button/button';
import { Headline } from 'assets/styles/pages.style';

import {
  FormWrapper,
  FormRow,
  FormField,
  LabelError,
  Input,
} from 'components/common/form/input';

const ChangeEmail = () => {
  const { data } = useGetCustomer();
  const { mutate: changeEmail, isLoading } = useChangeEmailMutation();

  const initialValues = {
    email: '',
    changeemail: '',
  };

  const validate = {
    email: yup
      .string()
      .email('Invalid email format')
      .max(40, 'Maximum 40 characters')
      .required('Email is a required field'),
    changeemail: yup
      .string()
      .email('Invalid email format')
      .max(40, 'Maximum 40 characters')
      .required('Email is a required field')
      .when('email', {
        is: (val) => (val && val.length > 0 ? true : false),
        then: yup
          .string()
          .oneOf(
            [yup.ref('email')],
            'Your confirmation email does not match the new email'
          ),
      }),
  };

  const updateCallback = async (
    values,
    { touched, validateForm, setTouched, setSubmitting, resetForm }
  ) => {
    const errs = await validateForm();
    if (isEmpty(errs)) {
      await changeEmail({ email: values.email });
      resetForm(initialValues);
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
            <Headline>Change Email</Headline>
            <FormRow>
              <FormField>
                <Input readonly value={data?.data?.data?.email ?? ''} />
              </FormField>
            </FormRow>
            <FormRow>
              <FormField>
                <Input
                  name="email"
                  placeholder="New Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors['email']) && touched['email']}
                  value={values.email}
                />
                {Boolean(errors['email']) && touched['email'] && (
                  <LabelError>{errors.email}</LabelError>
                )}
              </FormField>
            </FormRow>
            <FormRow>
              <FormField>
                <Input
                  name="changeemail"
                  placeholder="Confirm New Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    Boolean(errors['changeemail']) && touched['changeemail']
                  }
                  value={values.changeemail}
                />
                {Boolean(errors['changeemail']) && touched['changeemail'] && (
                  <LabelError>{errors.changeemail}</LabelError>
                )}
              </FormField>
            </FormRow>
            <Button
              type="submit"
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

export default ChangeEmail;
