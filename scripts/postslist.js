document.addEventListener("DOMContentLoaded", function() {
  // Get the post cards
  const postCards = document.querySelectorAll('.post-card');

  // Get the delete post modal
  const modal = document.querySelector('.modal');

  // Get the close button
  const modalClose = document.querySelector('.modal-close');

  // Get the delete button inside the modal
  const deleteButton = document.querySelector('.modal-footer button');

  // Variable to store the currently selected post
  let selectedPost;

  // Add event listeners to each post card
  postCards.forEach((card) => {
    const deleteIcon = card.querySelector('.post-delete');
    const optionsIcon = card.querySelector('.post-options');

    deleteIcon.addEventListener('click', () => {
      selectedPost = card;
      modal.style.display = 'flex';
    });

    optionsIcon.addEventListener('click', () => {
      // Get the post details
      const postHeading = card.querySelector('.post-heading').textContent;
      const postText = card.querySelector('.post-text').textContent;
      const postUser = card.querySelector('.post-user p').textContent;

      // Set the post details in localStorage
      localStorage.setItem('postHeading', postHeading);
      localStorage.setItem('postText', postText);
      localStorage.setItem('postUser', postUser);

      // Redirect to post.html
      window.location.href = 'post.html';
    });
  });

  // Add event listener to close the modal
  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Add event listener to delete the post
  deleteButton.addEventListener('click', () => {
    if (selectedPost) {
      selectedPost.remove();
      modal.style.display = 'none';
    }
  });
});
