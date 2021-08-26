import React, { useState } from "react"; 
import { Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

const SingleBook = (props) => {
    const [showCommentArea, setShowCommentArea] = useState(false)

    const onBookClick = () => {
        setShowCommentArea(!showCommentArea)
    }

    let commentAreaDiv = <React.Fragment />
    if (showCommentArea) {
        commentAreaDiv = <CommentArea asin={props.asin} />
    } else {
        commentAreaDiv = <React.Fragment />
    }

    return (
        <Col key={props.asin}>
            <div className="card mt-5 pb-3">
                <img src={props.img} className="card-img-top" alt="..." onClick={onBookClick}/>
                <div className="mt-3 text-center">
                    <h6>{props.title}</h6>
                </div>
                <div className="mt-3 text-center">
                    <button className="btn btn-outline-dark">{props.price} €</button>
                    {commentAreaDiv}
                </div>
            </div>
        </Col>
    );
};
  
export default SingleBook;




