import React from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

const CommentArea = (props) => {
    return (
        <>
            <AddComment asin={props.asin}/>
            <CommentsList asin={props.asin} />
        </>
    )
}
  
  export default CommentArea;