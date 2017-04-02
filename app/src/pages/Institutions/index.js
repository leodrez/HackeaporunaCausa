import React from 'react';
import './styles.scss'
import {CardStack, Card} from 'react-cardstack';

const Institution = () => {
  return (
    <div>
      <div id = "list">
          <CardStack
            height={250}
            width = "100%"
            background='#f8f8f8'
            hoverOffset={25}>

            <Card background='#2980B9'>
              <h1>Institución1</h1>
            </Card>

            <Card background='#27AE60'>
              <h1>Institución2</h1>
            </Card>
            
            <Card background='#FF4c1D'>
              <h1>Institución3</h1>
            </Card>
        </CardStack>
    </div>
  </div>
  );
};
export default Institution;
