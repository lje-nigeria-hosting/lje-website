"use client";
import { useEffect, useState } from "react";
import React from "react";

interface ToastProps {
  message: string;
}

export default function Toast({ message }: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000); // Hide after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div>
      <div className="toast toast-end">
        <div className="alert alert-success bg-green-700">
          <span className="text-white">{message}</span>
        </div>
      </div>
    </div>
  );
}
