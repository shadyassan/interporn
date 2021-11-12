import React from 'react';
import { Grid, GridColumn } from 'assets/styles/framework.style';
import { Heading, SubHeading, Title, Paragraph } from './contact-form.style';

import { Formik } from 'formik';
import * as yup from 'yup';
import Form from './form';

const ContactForm = ({ heading, subheading, title, children }) => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validate = {
    name: yup
      .string()
      .min(3, 'Please enter at least 3 characters.')
      .max(60, 'Maximum 60 characters')
      .required('Name is a required field'),
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is a required field'),
    message: yup
      .string()
      .min(3, 'Please enter at least 3 characters.')
      .max(500, 'Maximum 500 characters')
      .required('Message is a required field'),
  };

  return (
    <Grid gap={7} align={'center'}>
      <GridColumn gridColumn="span 5">
        {heading && <Heading>{heading}</Heading>}
        {subheading && <SubHeading>{subheading}</SubHeading>}
      </GridColumn>
      <GridColumn gridColumn="span 7">
        {title && <Title>{title}</Title>}
        {children && <Paragraph>{children}</Paragraph>}

        <Formik
          validateOnBlur
          initialValues={initialValues}
          validationSchema={yup.object().shape(validate)}>
          <Form />
        </Formik>
      </GridColumn>
    </Grid>
  );
};

export default ContactForm;
