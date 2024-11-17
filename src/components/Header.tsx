"use client";

import React, { useState } from "react";
import "./header.css";

export default function Header() {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          {/* <img src="" alt="" /> */}
          <h1>DigitalNews</h1>
        </a>
      </div>
    </header>
  );
}
