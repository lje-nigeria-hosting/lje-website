"use client";
import React from "react";
import { useState } from "react";

interface AnnouncementFormProps {
  announcement: any;
}

export default function AnnouncementForm({
  announcement,
}: AnnouncementFormProps) {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    id: announcement.id,
    title: announcement.title,
    category: announcement.category,
    link: announcement.link,
    content: announcement.content,
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/announcements/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to update announcement");
      }

      alert("Announcement updated successfully!");
      setShowForm(false);
    } catch (error) {
      console.error("Error updating announcement:", error);
      alert("An error occurred while updating the announcement.");
    }
  };

  return (
    <div key={announcement.id} className="bg-gray-100 p-4 rounded-lg">
      <p className="text-center">
        <span className="font-heading font-semibold text-xl">Title: </span>
        {announcement.title}
      </p>
      <p className="text-center">
        <span className="font-heading font-semibold text-xl">Category: </span>
        {announcement.category}
      </p>
      <p className="text-center">
        <span className="font-heading font-semibold text-xl">Link: </span>
        {announcement.permalink}
      </p>
      <p className="text-center">
        <span className="font-heading font-semibold text-xl">Date: </span>
        {announcement.createdAt.getFullYear()}-
        {announcement.createdAt.getMonth() + 1}-
        {announcement.createdAt.getDate()}
      </p>
      <div className="flex justify-center w-[25%] mx-auto">
        <div
          onClick={() => setShowForm(true)}
          className="btn bg-green-700 text-white mt-5 hover:bg-green-800 rounded-lg"
        >
          Edit Content
        </div>
      </div>
      {showForm && (
        <div className="absolute inset-0 bg-gray-300 ">
          <div className="flex justify-center bg-white overflow-y-auto px-5 py-12 shadow-md w-[90%] md:w-[75%] mx-auto">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Title"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                />
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Category"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                />
                <input
                  type="text"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  placeholder="Link"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                />
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Content"
                  rows={10}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>
              <div className="flex justify-between pt-5">
                <button
                  type="submit"
                  className="w-[50%] bg-green-700 text-white font-semibold py-3 rounded-lg hover:bg-green-800 transition-all"
                >
                  Save
                </button>
                <div
                  onClick={() => setShowForm(false)}
                  className="btn w-[20%] bg-red-700 text-white font-semibold py-3 rounded-lg hover:bg-red-800 transition-all"
                >
                  Close
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
