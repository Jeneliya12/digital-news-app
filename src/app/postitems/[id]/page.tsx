"use client";

import { initialPost } from "@/sections/Posts";
import React, { useState, useEffect } from "react";
import { Preloader } from "@/components/Preloader";
import Image from "next/image";
import "./style.css";

export default function PostItem({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [id, setId] = useState<string | null>(null);
  const [item, setItem] = useState(initialPost);

  const tabsData = [
    { id: 1, name: "Popular", active: true },
    { id: 2, name: "Trennding", active: false },
  ];

  const [tabs, setTabs] = useState(tabsData);

  const handleTabActive = (id: number): void => {
    setTabs(
      tabsData.map((tab) => {
        tab.active = false;
        if (tab.id === id) tab.active = true;
        return tab;
      })
    );
  };

  const getSinglePostData = (postId: string) => {
    fetch(`/api/postitems/${postId}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((e) => console.error("Error fetching post data:", e.message));
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
    }
  }, [id]);

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
                      {item.brief && item.brief.charAt(0)}
                    </span>
                    {item.brief && item.brief.substring(1)}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum vestibulum. Cras
                    venenatis euismod malesuada. Maecenas sit amet purus et arcu
                    facilisis gravida. Curabitur id libero a nulla posuere
                    pulvinar vel a lectus. Sed at risus vel tortor eleifend
                    tincidunt in sed nulla. Nulla facilisi. Integer non dolor
                    vel odio malesuada fermentum vel id turpis. Fusce quis
                    ligula in nisl interdum aliquam. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis
                    egestas.
                  </p>
                  <figure className="my-4">
                    <Image
                      src={`/${item.img}`}
                      alt=""
                      className="img-fluid"
                      width={1000}
                      height={600}
                      layout="responsive"
                    />
                    <figcaption>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </figcaption>
                  </figure>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum vestibulum. Cras
                    venenatis euismod malesuada. Maecenas sit amet purus et arcu
                    facilisis gravida. Curabitur id libero a nulla posuere
                    pulvinar vel a lectus. Sed at risus vel tortor eleifend
                    tincidunt in sed nulla. Nulla facilisi. Integer non dolor
                    vel odio malesuada fermentum vel id turpis. Fusce quis
                    ligula in nisl interdum aliquam. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis
                    egestas.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum vestibulum. Cras
                    venenatis euismod malesuada. Maecenas sit amet purus et arcu
                    facilisis gravida. Curabitur id libero a nulla posuere
                    pulvinar vel a lectus. Sed at risus vel tortor eleifend
                    tincidunt in sed nulla. Nulla facilisi. Integer non dolor
                    vel odio malesuada fermentum vel id turpis. Fusce quis
                    ligula in nisl interdum aliquam. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis
                    egestas.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum vestibulum. Cras
                    venenatis euismod malesuada. Maecenas sit amet purus et arcu
                    facilisis gravida. Curabitur id libero a nulla posuere
                    pulvinar vel a lectus. Sed at risus vel tortor eleifend
                    tincidunt in sed nulla. Nulla facilisi. Integer non dolor
                    vel odio malesuada fermentum vel id turpis. Fusce quis
                    ligula in nisl interdum aliquam. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis
                    egestas.
                  </p>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
