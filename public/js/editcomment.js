const goToEdit = (event) => {
  event.preventDefault();
  let id = event.target.getAttribute("data-id");

  console.log(id);
  document.location.replace(`/edit-comment/${id}`);
};

const editCommentButtonHandler = async (event) => {
  event.preventDefault();
  const post_id = document.querySelector('input[name="post-id"]').value;
  const description = document.querySelector("#comment-desc").value.trim();
  const urlValue = window.location.pathname;

  const urlId = urlValue.split("/");

  if (description) {
    const response = await fetch(`/api/comments/${urlId[urlId.length - 1]}`, {
      method: "PUT",
      body: JSON.stringify({ description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace(`/post/${post_id}`);
    } else {
      alert("Failed to update comment");
    }
  }
};
let editCommentButtons = document.querySelectorAll(".comment-edit");
editCommentButtons.forEach((button) => {
  button.addEventListener("click", goToEdit);
});

document
  .querySelector(".save-btn")
  .addEventListener("click", editCommentButtonHandler);
