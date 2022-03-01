import React from 'react';
import {Col, CardGroup, Card, CardSubtitle, CardTitle, CardText} from 'reactstrap';

const TaskItems = props => {
    console.log('taskitem props', props)
    
    return(
  
    <Col xs="12" s="6" md="4">
    <CardGroup>
    <Card style={{margin: '15px', borderColor: '#6A5495', backgroundColor: '#F8EDE3', boxShadow: '5px 5px lightgray '}}>
        <CardTitle tag='h6'>
            Task: {props.name}
        </CardTitle>
        <CardSubtitle>
            Category: {props.category_name}
        </CardSubtitle>
        <CardSubtitle>
            Price $ {props.price}
        </CardSubtitle>
            <CardText>
                Description: {props.description}
            </CardText>
    </Card>
    </CardGroup>
    </Col>
   
    )
};

export default TaskItems;