// src/pages/BlogPage.jsx
import { useState } from "react";
import ImagePlaceholder from "../components/Common/ImagePlaceholder";
import "../styles/blog.css";

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "health", name: "Pet Health" },
    { id: "nutrition", name: "Nutrition" },
    { id: "behavior", name: "Behavior" },
    { id: "prevention", name: "Prevention" },
    { id: "news", name: "Clinic News" },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Spring Pet Safety: What Every Owner Should Know",
      excerpt:
        "From toxic plants to seasonal allergies, learn how to keep your pets safe during spring.",
      content: "Spring brings new dangers for our furry friends...",
      author: "Dr. Zelalem Getnet",
      date: "March 15, 2024",
      category: "health",
      image: "/blog/image1.png",
      readTime: "5 min read",
      featured: true,
      tags: ["safety", "seasonal", "allergies"],
    },
    {
      id: 2,
      title: "Understanding Your Dog's Nutritional Needs",
      excerpt: "A comprehensive guide to canine nutrition at every life stage.",
      content: "Proper nutrition is the foundation of good health...",
      author: "Dr. Zelalem Getnet",
      date: "March 10, 2024",
      category: "nutrition",
      image: "/blog/image2.png",
      readTime: "8 min read",
      featured: false,
      tags: ["nutrition", "diet", "dogs"],
    },
    {
      id: 3,
      title: "Signs of Dental Disease in Cats",
      excerpt:
        "Early detection of dental problems can save your cat from pain and serious health issues.",
      content: "Dental disease is one of the most common conditions in cats...",
      author: "Dr. Zelalem Getnet",
      date: "March 5, 2024",
      category: "health",
      image: "/blog/image3.png",
      readTime: "6 min read",
      featured: true,
      tags: ["dental", "cats", "prevention"],
    },
    {
      id: 4,
      title: "Introducing a New Pet to Your Home",
      excerpt:
        "Tips for a smooth transition when bringing home a new furry family member.",
      content:
        "Adding a new pet to your family is exciting but requires preparation...",
      author: "Dr. Zelalem Getnet",
      date: "February 28, 2024",
      category: "behavior",
      image: "/blog/image4.png",
      readTime: "7 min read",
      featured: false,
      tags: ["behavior", "training", "new pets"],
    },
    {
      id: 5,
      title: "The Importance of Regular Wellness Exams",
      excerpt:
        "Why annual checkups are crucial for your pet's long-term health.",
      content:
        "Regular wellness exams are the cornerstone of preventive care...",
      author: "Dr. Zelalem Getnet",
      date: "February 20, 2024",
      category: "prevention",
      image: "/blog/image5.png",
      readTime: "4 min read",
      featured: false,
      tags: ["prevention", "checkups", "health"],
    },
    {
      id: 6,
      title: "Summer Heat Safety for Pets",
      excerpt: "Essential tips to protect your pets during hot summer months.",
      content: "As temperatures rise, so do the risks for our pets...",
      author: "Dr. Zelalem Getnet",
      date: "February 15, 2024",
      category: "health",
      image: "/blog/image6.png",
      readTime: "5 min read",
      featured: true,
      tags: ["summer", "safety", "heat"],
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <h1 className="page-title">Pet Health Blog</h1>
          <p className="hero-subtitle">
            Expert advice, tips, and insights for pet parents
          </p>

          {/* Search Bar */}
          <div className="blog-search">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button className="search-btn">🔍</button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="blog-categories">
        <div className="container">
          <div className="category-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-tab ${selectedCategory === category.id ? "active" : ""}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 &&
        selectedCategory === "all" &&
        searchQuery === "" && (
          <section className="featured-posts section">
            <div className="container">
              <h2 className="section-title">Featured Articles</h2>
              <div className="featured-grid">
                {featuredPosts.slice(0, 2).map((post) => (
                  <div key={post.id} className="featured-card">
                    <div className="featured-image">
                      <ImagePlaceholder
                        src={post.image}
                        alt={post.title}
                        type="rectangle"
                        size="large"
                      />
                      <span className="featured-badge">Featured</span>
                    </div>
                    <div className="featured-content">
                      <div className="post-meta">
                        <span className="post-category">{post.category}</span>
                        <span className="post-date">{post.date}</span>
                        <span className="post-read-time">{post.readTime}</span>
                      </div>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <div className="post-footer">
                        <span className="post-author">By {post.author}</span>
                        <button className="read-more-btn">
                          Read Article →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      {/* Blog Grid */}
      <section className="blog-grid-section section">
        <div className="container">
          {filteredPosts.length > 0 ? (
            <>
              <div className="blog-grid">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="blog-card">
                    <div className="blog-card-image">
                      <ImagePlaceholder
                        src={post.image}
                        alt={post.title}
                        type="rectangle"
                        size="medium"
                      />
                      <span className="card-category">{post.category}</span>
                    </div>
                    <div className="blog-card-content">
                      <div className="card-meta">
                        <span className="card-date">{post.date}</span>
                        <span className="card-read-time">{post.readTime}</span>
                      </div>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <div className="card-tags">
                        {post.tags.map((tag) => (
                          <span key={tag} className="tag">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="card-footer">
                        <span className="card-author">By {post.author}</span>
                        <button className="card-read-more">Read More →</button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="pagination">
                <button className="pagination-btn active">1</button>
                <button className="pagination-btn">2</button>
                <button className="pagination-btn">3</button>
                <button className="pagination-btn next">Next →</button>
              </div>
            </>
          ) : (
            <div className="no-results">
              <h3>No articles found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>
              Subscribe to our newsletter for the latest pet health tips and
              clinic news
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
