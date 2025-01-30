"use client";

import { initialPost } from "@/sections/Posts";
import React, { useState, useEffect } from "react";
import { Preloader } from "@/components/Preloader";
import Image from "next/image";
import { PostProps } from "@/sections/Posts";
import SidePostItem from "@/components/SidePostItem";
import Link from "next/link";
import { useRouter } from "next/navigation";

import "./style.css";

export default function PostItem({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [id, setId] = useState<string | null>(null);
  const [item, setItem] = useState(initialPost);

  const tabsData = [
    { id: 1, name: "Popular", active: true },
    { id: 2, name: "Trending", active: false },
  ];

  const [tabs, setTabs] = useState(tabsData);
  const [items, setItems] = useState<PostProps[]>([]);

  const handleTabActive = (id: number): void => {
    setTabs(
      tabs.map((tab) => ({
        ...tab,
        active: tab.id === id,
      }))
    );
  };

  const getSinglePostData = (postId: string) => {
    fetch(`/api/postitems/${postId}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((e) => console.error("Error fetching post data:", e.message));
  };

  const getItemsData = () => {
    fetch(`/api/postitems`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    };

    fetchParams();
  }, [params]);

  useEffect(() => {
    if (id) {
      getSinglePostData(id);
      getItemsData();
    }
  }, [id]);

  const handleDeletePost = async (postId: string) => {
    if (!postId) {
      console.error("Invalid Post ID");
      return;
    }

    try {
      const response = await fetch(`/api/postitems/${postId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      console.log("Success", response.status);
      router.push(`/postitems`); // Redirect after successful delete
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <main id="main">
      <section className="single-post-content">
        <div className="container">
          <div className="row">
            <div className="col-md-9 post-content">
              {item && item.category !== "" ? (
                <div className="single-post">
                  <div className="post-meta">
                    <span className="date">{item.category}</span>
                    <span className="mx-1">
                      <i className="bi bi-dot"></i>
                    </span>
                    <span>
                      {new Date(item.date).toLocaleDateString("en-US")}
                    </span>
                  </div>
                  <h1 className="mb-5">{item.title}</h1>
                  <p>
                    <span className="firstcharacter">
                      {item.brief?.charAt(0)}
                    </span>
                    {item.brief?.substring(1)}
                  </p>
                  <figure className="my-4">
                    <img
                      src={`/${item.img}`}
                      alt={item.title || "Image"}
                      className="img-fluid"
                    />

                    <figcaption>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </figcaption>
                  </figure>
                  <p>loreun ipsum</p>
                  <p>loreun ipsum</p>
                  <div className="d-flex justify-content-center gap-4">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleDeletePost(id!)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                    <Link
                      href={`/createpostitems/${id}`}
                      className="btn btn-primary"
                    >
                      <i className="bi bi-pen"></i>
                    </Link>
                  </div>
                </div>
              ) : (
                <Preloader />
              )}
            </div>
            <div className="col-md-3">
              <div className="aside-block">
                <ul className="nav nav-pills custom-tab-nav mb-4">
                  {tabs.map((tab) => (
                    <li className="nav-item" key={tab.id}>
                      <button
                        className={`nav-link ${
                          tab.active ? "active" : undefined
                        }`}
                        onClick={() => handleTabActive(tab.id)}
                      >
                        {tab.name}
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="tab-content">
                  <div
                    className={`tab-pane fade ${
                      tabs[0].active ? "show active" : ""
                    }`}
                  >
                    {items.slice(0, 6).map((sideItem: PostProps) => (
                      <SidePostItem key={sideItem._id} item={sideItem} />
                    ))}
                  </div>
                  <div
                    className={`tab-pane fade ${
                      tabs[1].active ? "show active" : ""
                    }`}
                  >
                    {items.slice(6, 12).map((sideItem: PostProps) => (
                      <SidePostItem key={sideItem._id} item={sideItem} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="aside-block">
                <h3 className="aside-title">Video</h3>
                <div className="video-post">
                  <a
                    target="_blank"
                    href="https://www.youtube.com/watch?v=Q89Dzox4jAE"
                    className="link-video"
                  >
                    <span className="bi-play-fill"></span>
                    <img
                      src="/assets/img/post-landscape-3.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
