import React from "react";

const MessagesList = () => {
  const contacts = [
    {
      name: "Milan Poudel",
      status: "Online",
    },
    {
      name: "Sujan Poudel",
      status: "Offline",
    },
    {
      name: "Suman Poudel",
      status: "Online",
    },
  ];
  return (
    <div className="ml-14 mt-10">
      <p className="text-primary text-lg">Messages</p>
      <div>
        {contacts.map((contact) => (
          <div className="flex items-center py-5 border-b border-b-gray-300">
            <div className="border border-primary p-[2px] rounded-full">
              <img
                src="https://via.placeholder.com/150"
                alt="profile"
                width={60}
                height={60}
                className="rounded-full"
              />
            </div>
            <div className="ml-8">
              <h3 className="text-lg font-semibold">{contact.name}</h3>
              <p className="text-sm font-light text-gray-400">
                {contact.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesList;
