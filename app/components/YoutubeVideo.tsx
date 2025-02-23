import React from "react";

interface YoutubeVideoProps {
  link: string;
}

export default function YoutubeVideo({ link }: YoutubeVideoProps) {
  return (
    <div>
      <iframe
        width="100%"
        height="400"
        className="md:px-32 px-4 md:pt-10 pt-4"
        src={link}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
