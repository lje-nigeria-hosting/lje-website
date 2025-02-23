"use client";
import { useState, useEffect } from "react";

interface MarkupRendererProps {
  markupContent: string | Promise<string>;
}

const MarkupRenderer = ({ markupContent }: MarkupRendererProps) => {
  const [clientMarkup, setClientMarkup] = useState<string | Promise<string>>(
    ""
  );

  useEffect(() => {
    setClientMarkup(markupContent);
  }, [markupContent]);

  return (
    <div
      className="text-justify leading-6 tracking-wide py-10 text-base"
      dangerouslySetInnerHTML={{ __html: clientMarkup || "" }}
    />
  );
};

export default MarkupRenderer;
