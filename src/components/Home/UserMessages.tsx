import React from "react";
import Input from "../Input";

const UserMessages = () => {
  return (
    <div className="h-[75%] w-full overflow-scroll shadow-sm">
      <div className="p-14">
        <div className="p-4 max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl">
          Here goes
        </div>
        <div className="p-4 max-w-[40%] text-white bg-primary rounded-b-xl rounded-tr-xl ml-auto">
          Here goes the message Here goes the message Here goes the message
        </div>
        <div className="p-4 max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl">
          Here goes
        </div>
        <div className="p-4 max-w-[40%] text-white bg-primary rounded-b-xl rounded-tr-xl ml-auto">
          Here goes the message Here goes the message Here goes the message
        </div>
        <div className="p-4 max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl">
          Here goes
        </div>
        <div className="p-4 max-w-[40%] text-white bg-primary rounded-b-xl rounded-tr-xl ml-auto">
          Here goes the message Here goes the message Here goes the message
        </div>
        <div className="p-4 max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl">
          Here goes
        </div>
        <div className="p-4 max-w-[40%] text-white bg-primary rounded-b-xl rounded-tr-xl ml-auto">
          Here goes the message Here goes the message Here goes the message
        </div>
      </div>
      <div className="p-14 w-full flex items-center">
        <Input
          type="text"
          label=""
          isRequired
          placeholder="Type a message..."
          value=""
          className="w-[75%]"
          inputClassName="p-4 border-0 shadow-md rounded-full bg-light focus:ring-0 focus:border-0 outline-none"
        />
        <div className={`ml-4 p-2 cursor-pointer bg-light rounded-full`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-send"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="10" y1="14" x2="21" y2="3" />
            <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
          </svg>
        </div>
        <div className={`ml-4 p-2 cursor-pointer bg-light rounded-full`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-circle-plus"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="9" />
            <line x1="9" y1="12" x2="15" y2="12" />
            <line x1="12" y1="9" x2="12" y2="15" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default UserMessages;
