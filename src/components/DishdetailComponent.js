import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';


function RenderDish({dish}){
    console.log(dish);
    return (
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments({dish}){
    if(dish.comments){
        var commentList = dish.comments.map(comment =>{
            return (
                <li key={comment.id}>
                    {comment.comment}<br/><br/>
                    -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}<br/><br/>
                </li>
            );
        });
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentList}
                </ul>
            </div>
        );
    } else{
        return (
            <div></div>
        );
    }
}

const DishDetail = (props) => {
    if(props.dish){
        return (
            
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish}/>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments dish={props.dish}/>
                </div>
            </div>
            
        );
    } else{
        return(
        <div></div>
        );
    }
}
export default DishDetail;