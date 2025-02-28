"use client";
import React from "react";
import { createAnnouncement } from "@/utils/actions";

export default function CreateAnnouncementForm() {
  const handleAnnouncement = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await createAnnouncement(formData);
    if (response === "No file detected") {
      alert("No file detected");
    } else if (response === "This post probably already exists") {
      alert("This post probably already exists");
    } else if (response === "User not found") {
      alert("User not found");
    } else if (response === "Invalid Credentials") {
      alert("Invalid Credentials");
    }
  };

  return (
    <form
      onSubmit={handleAnnouncement}
      className="mx-12 md:mx-[20%] space-y-4 py-6"
    >
      <input
        type="text"
        name="author"
        placeholder="Author"
        className="input input-bordered input-success w-full"
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        className="input input-bordered input-success w-full"
      />
      <textarea
        className="textarea textarea-accent w-full"
        name="title"
        placeholder="Title"
      ></textarea>
      <textarea
        name="permalink"
        className="textarea textarea-accent block w-full"
        placeholder="(This will contain the link to the post eg. first-post-december). DO NOT LEAVE SPACES AND DO NOT USE CAPITAL LETTERS"
      ></textarea>
      <textarea
        name="content"
        className="textarea textarea-accent w-full"
        rows={10}
        placeholder="Write your post in Markdown"
      ></textarea>
      <select
        name="membersonly"
        className="select block select-bordered w-full max-w-xs"
      >
        <option disabled selected>
          Is this post for members only?
        </option>
        <option>YES</option>
        <option>NO</option>
      </select>
      <input
        type="file"
        name="file"
        accept=".jpg, .png, .jpeg, .gif"
        className="file-input file-input-ghost w-full max-w-xs mx-auto"
      />
      <button type="submit" className="btn w-full text-white bg-[#0C9F0A]">
        Create Announcement
      </button>
    </form>
  );
}
