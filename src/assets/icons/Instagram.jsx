import React from "react";

function Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" width="24px" height="24px">
      <defs>
        <radialGradient
          id="color-1"
          cx="69.445"
          cy="150.625"
          r="160.888"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fd5"></stop>
          <stop offset="0.328" stopColor="#ff543f"></stop>
          <stop offset="0.348" stopColor="#fc5245"></stop>
          <stop offset="0.504" stopColor="#e64771"></stop>
          <stop offset="0.643" stopColor="#d53e91"></stop>
          <stop offset="0.761" stopColor="#cc39a4"></stop>
          <stop offset="0.841" stopColor="#c837ab"></stop>
        </radialGradient>
        <radialGradient
          id="color-2"
          cx="42.233"
          cy="19.853"
          r="106.83"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#4168c9"></stop>
          <stop offset="0.999" stopColor="#4168c9" stopOpacity="0"></stop>
        </radialGradient>
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
          d="M121.894 150.464l-71.666.068c-15.767.015-28.678-12.871-28.696-28.638l-.068-71.666C21.45 34.46 34.336 21.55 50.102 21.532l71.667-.068c15.767-.014 28.677 12.872 28.695 28.638l.068 71.667c.018 15.77-12.871 28.68-28.638 28.695z"
        ></path>
        <path
          fill="url(#color-2)"
          d="M121.894 150.464l-71.666.068c-15.767.015-28.678-12.871-28.696-28.638l-.068-71.666C21.45 34.46 34.336 21.55 50.102 21.532l71.667-.068c15.767-.014 28.677 12.872 28.695 28.638l.068 71.667c.018 15.77-12.871 28.68-28.638 28.695z"
        ></path>
        <path
          fill="#fff"
          d="M86 111.083c-13.828 0-25.083-11.251-25.083-25.083 0-13.832 11.255-25.083 25.083-25.083 13.828 0 25.083 11.251 25.083 25.083 0 13.832-11.255 25.083-25.083 25.083zm0-43c-9.88 0-17.917 8.038-17.917 17.917 0 9.88 8.038 17.917 17.917 17.917 9.88 0 17.917-8.038 17.917-17.917 0-9.88-8.038-17.917-17.917-17.917z"
        ></path>
        <circle
          cx="31.5"
          cy="16.5"
          r="1.5"
          fill="#fff"
          transform="scale(3.58333)"
        ></circle>
        <path
          fill="#fff"
          d="M107.5 132.583h-43c-13.828 0-25.083-11.251-25.083-25.083v-43c0-13.832 11.255-25.083 25.083-25.083h43c13.828 0 25.083 11.251 25.083 25.083v43c0 13.832-11.255 25.083-25.083 25.083zm-43-86c-9.88 0-17.917 8.038-17.917 17.917v43c0 9.88 8.038 17.917 17.917 17.917h43c9.88 0 17.917-8.038 17.917-17.917v-43c0-9.88-8.038-17.917-17.917-17.917z"
        ></path>
      </g>
    </svg>
  );
}

export default Icon;