import React from 'react';
import Jumbotron from './Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default {
  title: 'Jumbotron',
};

const Wrapper = ({children}) => <div style={{flexGrow: 1}}>{children}</div>;

export const Basic = () =>
  <Wrapper>
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  </Wrapper>

export const Fluid = () =>
  <Wrapper>
    <Jumbotron fluid>
      <Container>
        <h1>Fluid jumbotron</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space of
          its parent.
        </p>
      </Container>
    </Jumbotron>
  </Wrapper>
