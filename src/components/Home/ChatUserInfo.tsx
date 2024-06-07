import React from "react";

const ChatUserInfo = () => {
  return (
    <div className="w-[75%] bg-secondary h-[80px] my-14 rounded-full flex items-center px-14 py-2">
      <div>
        <img
          src="https://via.placeholder.com/150"
          alt="profile"
          width={60}
          height={60}
          className="rounded-full"
        />
      </div>
      <div className="flex-1 flex justify-between items-center">
        <div className="ml-6">
          <h3 className="text-lg">Milan Poudel</h3>
          <p className="text-sm font-light text-gray-600">Online</p>
        </div>
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-phone-outgoing"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="black"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            <line x1="15" y1="9" x2="20" y2="4" />
            <polyline points="16 4 20 4 20 8" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ChatUserInfo;
