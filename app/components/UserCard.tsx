"use client";
import React, { useState } from "react";

interface UserCardProps {
  firstName: string;
  lastName: string | null;
  profilePhoto: string;
  joinedAt: Date;
  email: string;
  gender: string;
  state: string;
  userName: string | null;
}

const UserCard: React.FC<UserCardProps> = ({
  firstName,
  lastName,
  profilePhoto,
  joinedAt,
  email,
  gender,
  state,
  userName,
}) => {
  const [usernameEdit, setUsernameEdit] = useState(false);
  const [firstnameEdit, setFirstnameEdit] = useState(false);

  const handleUsernameEdit = () => {
    setUsernameEdit(!usernameEdit);
  };

  const handleFirstnameEdit = () => {
    setFirstnameEdit(!firstnameEdit);
  };

  return (
    <>
      <div className="border border-gray-200 bg-[F9F9F9] rounded-xl mx-5 md:mx-[30%] p-4">
        <div>
          <div className="flex justify-between">
            <p className="text-base mb-1">Username:</p>
            <span className="font-bold">{userName}</span>
          </div>

          {!usernameEdit ? (
            <button
              className="bg-black text-white text-sm px-3 py-1 rounded-2xl"
              onClick={handleUsernameEdit}
            >
              Edit
            </button>
          ) : (
            <>
              <form>
                <label className="input input-bordered w-full flex items-center gap-2">
                  <input type="text" name="username" placeholder="Edit" />
                </label>
                <button className="btn mt-[1px]" onClick={handleUsernameEdit}>
                  Done
                </button>
              </form>
            </>
          )}
        </div>
        <div className="mt-3">
          <div className="flex justify-between">
            <p className="text-base mb-1">First Name:</p>
            <span className="font-bold">{firstName}</span>
          </div>
          {!firstnameEdit ? (
            <button
              className="bg-black text-white text-sm px-3 py-1 rounded-2xl"
              onClick={handleFirstnameEdit}
            >
              Edit
            </button>
          ) : (
            <>
              <form>
                <label className="input input-bordered w-full flex items-center gap-2">
                  <input type="text" name="firstname" placeholder="Edit" />
                </label>
                <button className="btn mt-1" onClick={handleFirstnameEdit}>
                  Done
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UserCard;
