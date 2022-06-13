const editButtonHandler = async (event) => {
  event.preventDefault();
  const postId = "";

  const title = document.querySelector("#post-title").value.trim();

  const description = document.querySelector("#post-desc").value.trim();

  const urlValue = window.location.pathname;

  const urlId = urlValue.split("/");

  if (title && description) {
    const response = await fetch(`/api/posts/${urlId[urlId.length - 1]}`, {
      method: "PUT",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to update post");
    }
  }
};

const goToEditPage = (event) => {
  event.preventDefault();
  let id = event.target.getAttribute("data-id");

  document.location.replace(`/edit-post/${id}`);
};

let editButtons = document.querySelectorAll(".edit-btn");

editButtons.forEach((button) => {
  button.addEventListener("click", goToEditPage);
});

// document
//   .querySelector(".save-button")
//   .addEventListener("click", editButtonHandler);
