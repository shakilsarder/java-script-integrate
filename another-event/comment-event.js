// add event handler 
document.getElementById('post-comment').addEventListener('click', function () {

    //2.get user comments
    const commentText = document.getElementById('new-comment');
    //const userComment = commentText.value;
    //console.log('userComment');

    //3.create comments paragraph 
    const newComment = document.createElement('p');
    newComment.innerText = commentText.value;

    //4. append the comments 
    const commentContainer = document.getElementById('comment-container');
    commentContainer.appendChild(newComment);

    //5. clean the commnets Box
    commentText.value = '';

});