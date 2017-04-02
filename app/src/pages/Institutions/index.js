import React from 'react';
import './styles.scss'
import {CardStack, Card} from 'react-cardstack';

const Institution = () => {
  return (
    <div>
      <div id = "list">
          <CardStack
            height= "1250"
            width = "100%"
            background='#f8f8f8'
            hoverOffset={25}>

            <Card background='#2980B9'>
              <h1 className= "header1">Institución1</h1>
              <h4 className= "list" style={{fontSize: 18,textAlign: 'right',marginRight: 20}}>About Us</h4>
            </Card>

            <Card background='#27AE60'>
              <h1 className= "header1">Institución2</h1>
               <h4 className= "list" style={{fontSize: 18, textAlign: 'right',marginRight: 20}}>About Us</h4>
            </Card>
            
            <Card background='orange'>
              <h1>Institución 3</h1>
               <h4 className= "list" style={{fontSize: 18, textAlign: 'right',marginRight: 20}}>About Us</h4>
            </Card>

            <Card background='red'>
              <h1>Institución 4</h1>
               <h4 className= "list" style={{fontSize: 18, textAlign: 'right',marginRight: 20}}>About Us</h4>
            </Card>

            <Card background='#2980B9'>
              <h1 className= "header1">Institución 5</h1>
              <h4 className= "list" style={{fontSize: 18,textAlign: 'right',marginRight: 20}}>About Us</h4>
            </Card>

            <Card background='#27AE60'>
              <h1 className= "header1">Institución 6</h1>
               <h4 className= "list" style={{fontSize: 18, textAlign: 'right',marginRight: 20}}>About Us</h4>
            </Card>
            
            <Card background='orange'>
              <h1 className= "header1">Institución 7</h1>
               <h4 className= "list" style={{fontSize: 18, textAlign: 'right',marginRight: 20}}>About Us</h4>
            </Card>

            <Card background='red'>
              <h1 className= "header1">Institución 8</h1>
               <h4 className= "list" style={{fontSize: 18, textAlign: 'right',marginRight: 20}}>About Us</h4>
            </Card>        
        </CardStack>
    </div>
  </div>
  );
};
export default Institution;
