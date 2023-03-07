import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../client";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type=="post"]{
          title,
          slug,
          body,
          mainImage {
            asset -> {
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className="px-5 2xl:max-w-7xl 2xl:mx-auto">
        <h1 className="font-semibold text-5xl uppercase mt-5 mb-10 tracking-widest text-center md:text-6xl lg:text-8xl">
          Blog page
        </h1>

        <div className="flex flex-col lg:flex-row justify-center items-center flex-wrap ">
          {posts.map((post) => (
            <article className="mr-10">
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                width={300}
              />
              <h4 className="text-xl mt-2">{post.title}</h4>
              <button className="mt-5 mb-10">
                <Link
                  to={`/blog/${post.slug.current}`}
                  className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
                  style={{ textDecoration: "none" }}
                >
                  Read Full Article
                </Link>
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
