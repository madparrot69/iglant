export default function AuPrev({ auth }) {
  return (
    <div className="auth-prev">
      <img src={auth.image} alt={auth.nickname} />
      <h1 className="auth-name">{auth.nickname}</h1>
      <p className="auth-description">{auth.description}</p>
      <div className="auth-stats">
        <span>{auth.followers} followers</span>
        <span>
          {auth.likes}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M20.2694 16.265L20.9749 12.1852C21.1511 11.1662 20.3675 10.2342 19.3345 10.2342H14.1534C13.6399 10.2342 13.2489 9.77328 13.332 9.26598L13.9947 5.22142C14.1024 4.56435 14.0716 3.892 13.9044 3.24752C13.7659 2.71364 13.354 2.28495 12.8123 2.11093L12.6673 2.06435C12.3399 1.95918 11.9826 1.98365 11.6739 2.13239C11.3342 2.29611 11.0856 2.59473 10.9935 2.94989L10.5178 4.78374C10.3664 5.36723 10.146 5.93045 9.8617 6.46262C9.44634 7.24017 8.80416 7.86246 8.13663 8.43769L6.69789 9.67749C6.29223 10.0271 6.07919 10.5506 6.12535 11.0844L6.93752 20.4771C7.01201 21.3386 7.73231 22 8.59609 22H13.2447C16.726 22 19.697 19.5744 20.2694 16.265Z"
                fill="#c7c7c7"
              ></path>{" "}
              <path
                opacity="0.5"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.96767 9.48508C3.36893 9.46777 3.71261 9.76963 3.74721 10.1698L4.71881 21.4063C4.78122 22.1281 4.21268 22.7502 3.48671 22.7502C2.80289 22.7502 2.25 22.1954 2.25 21.5129V10.2344C2.25 9.83275 2.5664 9.5024 2.96767 9.48508Z"
                fill="#c7c7c7"
              ></path>{" "}
            </g>
          </svg>
        </span>
        <span>
          {auth.chats}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
                fill="#c7c7c7"
              ></path>{" "}
            </g>
          </svg>
        </span>
      </div>
    </div>
  );
}
