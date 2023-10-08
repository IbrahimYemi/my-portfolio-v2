// Fetch the blog data from the JSON file
fetch("js/blog.json")
.then((response) => response.json())
.then((blogs) => {
    // Map through the blogs and render them in the specified format
    const blogContainer = document.getElementById("blogContainer");
    // slug the title
    function slugify(str) {
        return str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with '-'
        .replace(/^-+|-+$/g, ''); // Remove leading and trailing '-'
    }
    blogContainer.innerHTML = blogs
    .map(
        (blog) => `
    <div key=${blog.id} class="col-lg-4 col-md-6 mb30">
        <div class="bloglist item">
        <div class="post-content">
            <div class="post-image d-hover-zoom">
            <a class="image-popup" href="images/news/${blog.image}">
                <img alt="" src="images/news/${blog.image}">
            </a>
            <div class="post-info">
                <div class="inner">
                <span class="post-date">${blog.date}</span>
                </div>
            </div>
            </div>
            <div class="post-text">
            <h4><a href="${blog.link}" target="_blank" rel="noopener noreferrer" >${blog.title}</a></h4>
            <p>${blog.intro}</p>
            </div>
        </div>
        </div>
    </div>
    `
    )
    .join("");
})
.catch((error) => console.error("Error fetching blog data:", error));
