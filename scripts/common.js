document.addEventListener("DOMContentLoaded", function() {
  // Get the modal elements
  const signUpModal = document.getElementById("sign-up-modal");
  const signInModal = document.getElementById("sign-in-modal");
  const createPostModal = document.getElementById("create-post-modal");

  // Get the button elements to open modals
  const signUpBtn = document.querySelector(".sign-up-btn");
  const signInBtn = document.querySelector(".sign-in-btn");
  const allPostsBtn = document.querySelector(".all-posts-btn");
  const createPostBtn = document.querySelector(".create-post-btn");

  const closeBtns = document.querySelectorAll(".close");


  // Show the sign-up modal
  signUpBtn.addEventListener("click", function () {
    signUpModal.style.display = "block";
  });

  // Show the sign-in modal
  signInBtn.addEventListener("click", function () {
    signInModal.style.display = "block";
  });

  // Show the sign-up modal from sign-in modal
  document.getElementById("show-sign-up").addEventListener("click", function () {
    signInModal.style.display = "none";
    signUpModal.style.display = "block";
  });

  // Show the create post modal
  createPostBtn.addEventListener("click", function () {
    createPostModal.style.display = "block";
  });

  // Close the modals when clicking on the close button
  closeBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const modal = btn.closest(".modal");
      modal.style.display = "none";
    });
  });

  // Close the modals when clicking outside the modal content
  window.addEventListener("click", function (event) {
    console.log("-----------",event.target.classList)
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
    }
  });
});