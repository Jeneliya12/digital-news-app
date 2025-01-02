"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./posts.css";
import PostItemOne from "@/components/PostItemOne";
import TrendingPost from "@/components/TrendingPost"; // Make sure this component is imported
import { Preloader } from "@/components/Preloader";

export default function Posts() {
  const router = useRouter();
  const [items, setItems] = useState<any[]>([]);

  // Fetch all items
  const getItemsData = () => {
    fetch(`/api/postitems`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((e) => console.error("Error fetching items:", e.message));
  };

  // Fetch a single post and merge it with the existing items
  const getSinglePostData = (id: string) => {
    fetch(`/api/postitems/${id}`)
      .then((res) => {
        if (res.status === 404) {
          router.push("/not-found");
        }
        return res.json();
      })
      .then((data) => {
        setItems((prevItems) => {
          const isAlreadyIncluded = prevItems.some(
            (item) => item._id === data._id
          );
          return isAlreadyIncluded ? prevItems : [data, ...prevItems];
        });
      })
      .catch((e) => console.error("Error fetching single post:", e.message));
  };

  useEffect(() => {
    getItemsData();
    getSinglePostData("6745207fe8fc187c49745c3c");
  }, []);

  const highlightedItem =
    items.length > 0 && items.find((item) => item.trending || item.top);

  return (
    <section id="posts" className="posts">
      <div className="container" data-aos="fade-up">
        <div className="row g-5">
          {/* Highlighted Post */}
          <div className="col-lg-4">
            {highlightedItem && (
              <PostItemOne large={true} item={highlightedItem} />
            )}
          </div>
          {/* Other Posts */}
          <div className="col-lg-8">
            <div className="row g-5">
              <div className="col-lg-4 border-start custom-border">
                {items && items.length > 0 ? (
                  items
                    .filter((item) => !item.trending && !item.top)
                    .slice(0, 3)
                    .map((item) => (
                      <PostItemOne key={item._id} large={false} item={item} />
                    ))
                ) : (
                  <Preloader />
                )}
              </div>
              <div className="col-lg-4 border-start custom-border">
                {items && items.length > 0 ? (
                  items
                    .filter((item) => !item.trending && !item.top)
                    .slice(3, 6)
                    .map((item) => (
                      <PostItemOne key={item._id} large={false} item={item} />
                    ))
                ) : (
                  <Preloader />
                )}
              </div>
              <div className="col-lg-4 border-start custom-border">
                <div className="trending">
                  <h3>Trending</h3>
                  <ul className="trending-post">
                    {items && items.length > 0 ? (
                      items
                        .filter((item) => item.trending)
                        .map((item, index) => (
                          <TrendingPost
                            key={item._id}
                            index={index}
                            item={item}
                          />
                        ))
                    ) : (
                      <Preloader />
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
