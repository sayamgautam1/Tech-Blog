const newComment = async (event) => {
  event.preventDefault();
  const post_id = document.querySelector('input[name="post-id"]').value;
  const description = document.querySelector("#comment-desc").value.trim();

  if (description) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ post_id, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("failed to add a new comment");
    }
  }
};

document.querySelector(".comment-btn").addEventListener("click", newComment);
