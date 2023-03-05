import { useState } from 'react';
import emailjs from '@emailjs/browser';

import {
  Container,
  Text,
  Input,
  Textarea,
  Grid,
  GridItem,
  Button
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons"

// initialize state
const initialValues = {
  fullName: '',
  email: '',
  message: ''
}

function Contact() {

  // set state values as they type
  const [values, setValues] = useState(initialValues);
  const handleChange = (e: any) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]:value,
    })
  }

  // send the message to my email using the three input values and my emailjs account info
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_ugudpwn',
      'template_5qqdpo5',
      e.target,
      'aJ8y1lQv6jkGNKCCn'
    )
      .then((response: any) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message Submitted')
        setValues({
          fullName: '',
          email: '',
          message: ''
        });
      })
      .catch((err: any) => {
        console.log('FAILED...', err);
      });
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={sendEmail}>
        <Grid mt="2rem">
            <Text fontSize="xl" color="secondary.dark" >Questions or Comments?</Text>
            <Text fontSize="2xl" color="primary.main">Drop us a Message</Text>
          <GridItem >
            <Input
              id="outlined-name"
              placeholder="Name"
              name="fullName"
              value={values.fullName}
              color="primary"
              onChange={handleChange}
              required
            />
          </GridItem>
          <GridItem >
            <Input
              type="email"
              id="outlined-email"
              placeholder="Email"
              name="email"
              value={values.email}
              margin="normal"
              color="primary"
              onChange={handleChange}
              required
            />
          </GridItem>
          <GridItem >
            <Textarea
              id="outlined-message"
              placeholder="Message"
              name="message"
              value={values.message}
              style={{ marginTop: 10 }}
              size='sm'
              rows={5}
              color="primary"
              onChange={handleChange}
              required
            />
          </GridItem>
          <GridItem>
            <Button variant="contained" type="submit" sx={{ marginTop: 2, backgroundColor:"secondary.extradark" }} >Submit Message <ArrowRightIcon /></Button>
          </GridItem>
        </Grid>
      </form>
    </Container>
  );
}

export default Contact;