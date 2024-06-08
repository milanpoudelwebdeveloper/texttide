import React from "react";

const ErrorText = ({ message }: { message: string }) => {
  return (
    <p className="text-red-500 text-sm mt-1 font-medium w-75% text-left">
      {message}
    </p>
  );
};

export default ErrorText;
