"use client";
import { uploadUserImage } from "@/utils/actions";
import React from "react";

const ProfilePictureUploadForm = () => {
  const handlePictureUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await uploadUserImage(formData);
    if (response === "File is too large") {
      alert("File is too large");
    } else if (response === "No file detected") {
      alert("No file detected");
    }
  };

  return (
    <form className="text-center space-y-2" onSubmit={handlePictureUpload}>
      <input
        type="file"
        name="file"
        accept=".jpg, .png, .jpeg"
        className="file-input file-input-bordered file-input-sm w-full max-w-xs"
      />
      <button
        className="bg-[#0C9F0A] text-white px-10 py-1 rounded-2xl"
        type="submit"
      >
        Upload
      </button>
    </form>
  );
};

export default ProfilePictureUploadForm;
