"use client";
import { uploadUserImage } from "@/utils/actions";
import React from "react";

const ProfilePictureUploadForm = () => {
  return (
    <form className="text-center space-y-2" action={uploadUserImage}>
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
