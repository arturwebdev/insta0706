import React from "react";

function PostComment ({comments}) {
    return (
        <>
            {comments.map(comment => (
                <p key={comment.id} className="description"><span>{comment.userName}:</span>{comment.body}</p>
            ))}
        </>
    )
}

export default PostComment