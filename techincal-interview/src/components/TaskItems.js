import React from 'react';
import {Card, CardSubtitle, CardTitle, CardText} from 'reactstrap';

const TaskItems = props => {
    console.log('taskitem props', props)
    
    return(
   <div>
    
    <Card>
        <CardTitle>
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
    </div>
    )
};

export default TaskItems;