import React from "react";

function Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" width="24px" height="24px">
      <defs>
        <linearGradient
          id="color-1"
          x1="35.174"
          x2="147.798"
          y1="35.371"
          y2="147.995"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#f44f5a"></stop>
          <stop offset="0.443" stopColor="#ee3d4a"></stop>
          <stop offset="1" stopColor="#e52030"></stop>
        </linearGradient>
      </defs>
      <g
        fill="none"
        strokeMiterlimit="10"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <path d="M0 172V0h172v172z"></path>
        <path
          fill="url(#color-1)"
          d="M161.293 123.84c-1.573 8.027-8.256 14.143-16.512 15.29-12.975 1.91-34.6 4.203-58.978 4.203-23.983 0-45.609-2.293-58.978-4.203-8.256-1.147-14.943-7.263-16.512-15.29C8.74 115.05 7.167 102.053 7.167 86c0-16.053 1.573-29.05 3.146-37.84 1.573-8.027 8.256-14.143 16.512-15.29 12.975-1.91 34.6-4.203 58.978-4.203 24.377 0 45.609 2.293 58.978 4.203 8.256 1.147 14.943 7.263 16.512 15.29 1.573 8.79 3.54 21.787 3.54 37.84-.394 16.053-1.967 29.05-3.54 37.84z"
        ></path>
        <path
          fill="#000"
          d="M115.928 80.41L74.949 53.09a6.695 6.695 0 00-6.898-.333 6.708 6.708 0 00-3.551 5.924v54.638a6.713 6.713 0 003.551 5.927 6.718 6.718 0 006.894-.333l40.98-27.32a6.707 6.707 0 002.992-5.59 6.705 6.705 0 00-2.989-5.593z"
          opacity="0.05"
        ></path>
        <path
          fill="#000"
          d="M74.107 54.6l38.664 25.778c2.469 1.773 4.132 3.36 4.132 5.421 0 2.06-.803 3.498-2.562 4.78-1.33.968-39.578 26.388-39.578 26.388-3.229 2.164-8.471 1.706-8.471-5.371V59.999c0-7.184 5.676-6.826 7.815-5.4z"
          opacity="0.07"
        ></path>
        <path
          fill="#fff"
          d="M68.083 113.119V58.885c0-2.663 2.967-4.254 5.185-2.774l40.678 27.12c1.982 1.318 1.982 4.227 0 5.55l-40.678 27.118c-2.218 1.473-5.185-.114-5.185-2.78z"
        ></path>
      </g>
    </svg>
  );
}

export default Icon;