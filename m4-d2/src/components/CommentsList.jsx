import React, { useEffect, useState } from "react";

const CommentsList = (props) => {
    const [comments, setComments] = useState([])

    const fetchComments = async () => {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMGNkODJkNTI2MjAwMTViNmRkMTEiLCJpYXQiOjE2Mjk5ODc0MTQsImV4cCI6MTYzMTE5NzAxNH0.okFYBFiq_jLQMwu7n81wu8DH68CZ6P8ixlfjHJNQ-tc"
        }
    })

        let comments = await response.json()
        if (comments !== []) {
            setComments(comments)
            console.log("comments is: ", comments)
        }
    }

    useEffect(() => {
        fetchComments()
    }, [])

    return (
        <ul>
            {comments.map((comment) => (
                <li>{comment.comment}</li>
            ))}
        </ul>
    )
}
  
export default CommentsList;