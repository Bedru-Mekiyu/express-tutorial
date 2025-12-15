const post = document.getElementById("post-id");
const output = document.getElementById("output");
const form = document.getElementById("form");

// load posts
async function getPosts() {
  try {
    const response = await fetch("http://localhost:3000/api/post");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const posts = await response.json();

    output.innerHTML = "";
    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.textContent = post.title;
      output.appendChild(postElement);
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// submit form to add post
async function addNewPost(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const title = formData.get("title");

  try {
    const response = await fetch("http://localhost:3000/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // your backend returns an array of posts, so refresh list
    await getPosts();
    form.reset();
  } catch (error) {
    console.error("Error adding post:", error);
  }
}

// events
form.addEventListener("submit", addNewPost);
post.addEventListener("click", getPosts);
