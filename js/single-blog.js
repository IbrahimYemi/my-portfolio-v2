// Fetch the blog data from the JSON file
fetch("js/blog.json")
.then((response) => response.json())
.then((blogs) => {
    const sectionMain = document.getElementById('section-blog-single');

    // slug the title
    function slugify(str) {
        return str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with '-'
        .replace(/^-+|-+$/g, ''); // Remove leading and trailing '-'
    }

    // get query params
    function getQueryParams() {
        const params = new URLSearchParams(window.location.search);
        return {
        id: params.get('id'),
        slug: params.get('slug')
        };
    }

    const queryParams = getQueryParams();
    const blog = blogs.find(blog => blog.id === parseInt(queryParams.id) && slugify(blog.title) === queryParams.slug);

    if (blog) {
        // Update the title and date
        sectionMain.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2 class="title date">${blog.title}<span>${blog.date}</span></h2>
                        <div class="title-underline"></div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-8 offset-md-2">
                        <div class="blog-read">
                            <img alt="${blog.title}" src="images/news/${blog.image}" class="img-rounded img-fullwidth">
                            <div class="post-text">
                                <p>${blog.body.paragraph1}</p>
                                <blockquote>${blog.body.paragraph2}</blockquote>
                                <p>${blog.body.paragraph3}</p>
                                <p>${blog.body.paragraph4}</p>
                                <p>${blog.body.paragraph5}</p>
                                <p>${blog.body.paragraph6}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
})
.catch((error) => console.error("Error fetching blog data:", error));