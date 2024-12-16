import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const CardR = ({ 
  imageSrc, 
  title, 
  subtitle, 
  text, 
  buttonText, 
  onButtonClick 
}) => {
  return (
    <Card
      style={{
        width: '18rem',
      }}
    >
      <img alt="Sample" src={imageSrc} />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {subtitle}
        </CardSubtitle>
        <CardText>{text}</CardText>
        <Button onClick={onButtonClick}>{buttonText}</Button>
      </CardBody>
    </Card>
  );
};

export default CardR;
