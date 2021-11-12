import { isEmpty } from 'lodash';
import { useFormikContext } from 'formik';
import { useContactFormMutation } from '@framework/contact/use-contact-form';
import { Button } from 'components/common/button/button';

import {
  FormWrapper,
  FormRow,
  FormField,
  Textarea,
  Input,
  LabelError,
} from 'components/common/form/input';

const Form = () => {
  const { mutate: contactForm, isLoading } = useContactFormMutation();

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    setTouched,
    validateForm,
    handleReset,
  } = useFormikContext();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const errs = await validateForm();

    if (isEmpty(errs)) {
      await contactForm(values);
      handleReset();
    } else {
      setTouched({ ...touched, ...errs });
    }
  };

  return (
    <FormWrapper noValidate>
      <FormRow columns={2} columnGap={3} rowGap={3}>
        <FormField>
          <Input
            type="text"
            name="name"
            placeholder="Your name"
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors['name']) && touched['name']}
            value={values.name}
          />
          {Boolean(errors['name']) && touched['name'] && (
            <LabelError>{errors.name}</LabelError>
          )}
        </FormField>
        <FormField>
          <Input
            type="text"
            name="email"
            placeholder="Your email"
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
          <Textarea
            name="message"
            placeholder="Your message"
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors['message']) && touched['message']}
            value={values.message}
          />
          {Boolean(errors['message']) && touched['message'] && (
            <LabelError>{errors.message}</LabelError>
          )}
        </FormField>
      </FormRow>
      <Button
        disabled={isLoading}
        loading={isLoading}
        type="submit"
        alignSelf="flex-end"
        onClick={onSubmitHandler}
        radius="large"
        size="medium">
        Send
      </Button>
    </FormWrapper>
  );
};

export default Form;
