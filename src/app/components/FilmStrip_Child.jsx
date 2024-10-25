"use client";
import Image from "next/image";
import { useState } from "react";

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "    [… Read More]";
  }
  return str;
}
export default function FilmStripChild({url, src, width, height, alt, heading}) {
  return (
    <>
      <div className="image-container flex flex-col">
        <a href={ url } target="blank">
          <img 
            src={ src } 
            width={ width }
            height={ height }
            alt={ alt }
            loading="eager"
            draggable="false"
            onError={(e) => e.target.src = '/404.png'}
            style={{ aspectRatio: "16/9", objectFit: "cover" }}
            className="image-content rounded-md items-center justify-center w-full" />

          <h3 className="select-none text-wrap text-center" style={{ width: "inherit"}}>
            {truncateString(heading, 100)}
          </h3>
        </a>
      </div>

      <style jsx="true">{`
        .image-container {
          cursor: pointer;
          display: flex;
          flex: 0 0 auto;
          flex-direction: column;
          // align-items: center;
          // justify-content: center;
          width: calc(20% + 20vh);
          height: fit-content;
          transition: transform 250ms;
        }

        .image-container:hover {
          position: relative;
          z-index: 2;
          transform: translateY(-10px)
        }
      `}</style>
    </>
  )
}