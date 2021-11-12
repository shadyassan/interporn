import { isEmpty } from 'lodash';
import Router from 'next/router';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { YOUR_ORDERS_PAGE } from 'site-settings/site-navigation';
import { useOrderMutation } from '@framework/order/use-order';
import { LabelError, Input } from 'components/common/form/input';
import { Button } from 'components/common/button/button';
import { useUI } from 'contexts/ui.context';
import { useCart } from 'contexts/cart/use-cart';

import {
  Wrapper,
  Container,
  Heading,
  SubHeading,
  FormFieldsWrapper,
  FormRow,
  FormField,
} from 'components/common/form/form.style';

export default function PaymentModal() {
  const { closeModal } = useUI();
  const { items, clearCart, calculatePrice } = useCart();
  const { mutate: order, isLoading } = useOrderMutation();

  const initialValues = {
    firstName: '',
    lastName: '',
    cardNumber: '',
    cvv: '',
    expiration: '',
    email: '',
    zipCode: '',
    country: '',
  };

  const validate = {
    firstName: yup
      .string()
      .max(40, 'Maximum 40 characters')
      .required('First Name is a required field'),
    lastName: yup
      .string()
      .max(40, 'Maximum 40 characters')
      .required('Last Name is a required field'),
    cardNumber: yup.number().required('Card Number is a required field'),
    cvv: yup.number().required('CVV is a required field'),
    expiration: yup.number().required('Expiration is a required field'),
    email: yup
      .string()
      .email('Invalid email format')
      .max(40, 'Maximum 40 characters')
      .required('Email is a required field'),
    zipCode: yup.number().required('Zip is a required field'),
    country: yup.string().required('Country is a required field'),
  };

  const paymentCallback = async (
    values,
    { touched, validateForm, setTouched, setSubmitting }
  ) => {
    const errs = await validateForm();

    if (isEmpty(errs)) {
      await order({
        game_id: items.map(({ id }) => id),
        order_price: calculatePrice(),
      });
      clearCart();
      closeModal();
      setSubmitting(false);
      Router.push(YOUR_ORDERS_PAGE);
    } else {
      setTouched({ ...touched, ...errs });
    }
  };

  return (
    <Wrapper width={600}>
      <Container>
        <Heading>Payment</Heading>
        <SubHeading>Thank you for being with us!</SubHeading>

        <Formik
          validateOnBlur
          initialValues={initialValues}
          validationSchema={yup.object().shape(validate)}
          onSubmit={paymentCallback}>
          {({ values, handleChange, handleBlur, touched, errors }) => (
            <Form noValidate>
              <FormFieldsWrapper>
                <FormRow columns={2} columnGap={1}>
                  <FormField>
                    <Input
                      name="firstName"
                      placeholder="First Name"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        Boolean(errors['firstName']) && touched['firstName']
                      }
                      required
                    />
                    {Boolean(errors['firstName']) && touched['firstName'] && (
                      <LabelError>{errors.firstName}</LabelError>
                    )}
                  </FormField>
                  <FormField>
                    <Input
                      name="lastName"
                      placeholder="Last Name"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors['lastName']) && touched['lastName']}
                      required
                    />
                    {Boolean(errors['lastName']) && touched['lastName'] && (
                      <LabelError>{errors.lastName}</LabelError>
                    )}
                  </FormField>
                </FormRow>
                <FormRow>
                  <FormField>
                    <Input
                      name="cardNumber"
                      placeholder="Card number"
                      value={values.cardNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        Boolean(errors['cardNumber']) && touched['cardNumber']
                      }
                      required
                    />
                    {Boolean(errors['cardNumber']) && touched['cardNumber'] && (
                      <LabelError>{errors.cardNumber}</LabelError>
                    )}
                  </FormField>
                </FormRow>

                <FormRow columns={2} columnGap={1}>
                  <FormField>
                    <Input
                      type="number"
                      name="cvv"
                      placeholder="CVV2/CVC2"
                      value={values.cvv}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors['cvv']) && touched['cvv']}
                      required
                    />
                    {Boolean(errors['cvv']) && touched['cvv'] && (
                      <LabelError>{errors.cvv}</LabelError>
                    )}
                  </FormField>
                  <FormField>
                    <Input
                      type="number"
                      name="expiration"
                      placeholder="Expiration"
                      value={values.expiration}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        Boolean(errors['expiration']) && touched['expiration']
                      }
                      required
                    />
                    {Boolean(errors['expiration']) && touched['expiration'] && (
                      <LabelError>{errors.expiration}</LabelError>
                    )}
                  </FormField>
                </FormRow>
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
                    <Input
                      name="zipCode"
                      placeholder="Zip/Postal Code"
                      value={values.zipCode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors['zipCode']) && touched['zipCode']}
                      required
                    />
                    {Boolean(errors['zipCode']) && touched['zipCode'] && (
                      <LabelError>{errors.zipCode}</LabelError>
                    )}
                  </FormField>
                </FormRow>
                <FormRow>
                  <FormField>
                    <Input
                      name="country"
                      placeholder="Country"
                      value={values.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors['country']) && touched['country']}
                      required
                    />
                    {Boolean(errors['country']) && touched['country'] && (
                      <LabelError>{errors.country}</LabelError>
                    )}
                  </FormField>
                </FormRow>
              </FormFieldsWrapper>

              <Button
                type="submit"
                radius="large"
                size="big"
                fullwidth
                loading={isLoading}>
                Place Order
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </Wrapper>
  );
}
