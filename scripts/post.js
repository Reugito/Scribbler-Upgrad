// post.js

// Edit button functionality
function enableEditMode() {
    const postTitle = document.querySelector('.post-title');
    const postText = document.querySelector('.post-text');
    const editButton = document.querySelector('.edit-button');
  
    if (postTitle.contentEditable === 'false') {
      postTitle.contentEditable = 'true';
      postText.contentEditable = 'true';
      postText.disabled = false;
      postTitle.style.border = '1px solid pink';
      postText.style.border = '1px solid pink';
      editButton.innerHTML = 'Save <i class="fas fa-save"></i>';
    } else {
      postTitle.contentEditable = 'false';
      postText.contentEditable = 'false';
      postText.disabled =true;
      postTitle.style.border = 'none';
      postText.style.border = 'none';
      editButton.innerHTML = 'Edit <i class="fas fa-edit"></i>';
    }
  }
  
  // Like button functionality
  let likeCount = 0;
  let liked = false;
  
  function toggleLike() {
    const likeButton = document.querySelector('.like-button');
    const likeCountElement = document.querySelector('.like-count');
  
    if (!liked) {
      likeCount++;
      liked = true;
      likeButton.innerHTML = '<i class="fas fa-thumbs-up"></i>Liked!';
      likeCountElement.textContent = `${likeCount} person likes this!`;
    } else {
      likeCount--;
      liked = false;
      likeButton.innerHTML = '<i class="fas fa-thumbs-up"></i>Like';
      if (likeCount === 0) {
        likeCountElement.textContent = 'Be the first one to like this!';
      } else {
        likeCountElement.textContent = `${likeCount} people like this!`;
      }
    }
  }
  
  // Add comment functionality
  function addComment() {
    const commentInput = document.querySelector('.comment-input');
    const allComments = document.querySelector('.all-comments');
    allComments.style.display = "none";
    if (commentInput.value !== '') {
      const commentText = commentInput.value;
     
      const commentElement = document.createElement('div');
      commentElement.classList.add('comment');
      commentElement.textContent = commentText;
      allComments.style.display = "block";
      allComments.insertBefore(commentElement, allComments.firstChild);
  
      commentInput.value = '';
    }
  }
  