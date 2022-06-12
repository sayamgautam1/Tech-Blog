const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete post");
    }
  }
};
let delButtons = document.querySelectorAll(".del-btn");

for (i = 0; i < delButtons.length; i++) {
  delButtons[i].addEventListener("click", delButtonHandler);
}
