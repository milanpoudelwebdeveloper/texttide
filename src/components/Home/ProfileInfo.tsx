import React from "react";

const ProfileInfo = () => {
  return (
    <div className="flex justify-center items-center my-8">
      <img
        src="https://via.placeholder.com/150"
        alt="profile"
        width={75}
        height={75}
        className="border border-primary p-[2px] rounded-full"
      />
      <div className="ml-4">
        <h3 className="text-2xl">Milan Poudel</h3>
        <p className="text-lg font-light">My account</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
