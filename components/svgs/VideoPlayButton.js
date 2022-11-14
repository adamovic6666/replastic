const VideoPlayButton = () => {
  return (
    <svg
      width="107"
      height="110"
      viewBox="0 0 107 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_86_266)">
        <circle
          cx="53.5"
          cy="44.5"
          r="43.5"
          stroke="#00AEEF"
          stroke-width="2"
        />
        <path
          d="M47.4736 31.417L64.8578 44.1654L47.4736 56.9138L47.4736 31.417Z"
          stroke="#00AEEF"
          stroke-width="2"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_86_266"
          x="0"
          y="0"
          width="107"
          height="110"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="4.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_86_266"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_86_266"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default VideoPlayButton;
