import React from "react";

const SuccessMessage = () => {
  return (
    <div>
      <div className="toast toast-end">
        <div className="alert alert-success">
          <span className="text-white font-heading font-semibold">
            Account created successfully.{" "}
          </span>
          <span className="text-white">We sent you a welcome mail.</span>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
