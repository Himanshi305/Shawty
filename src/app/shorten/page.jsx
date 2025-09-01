"use client";
import React, { useState } from "react";
import Link from "next/link"

const Shortener = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
          setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
          seturl("")
          setshorturl("")
        console.log(result)
        alert(result.message)
    
    })
      .catch((error) => console.error(error));
  };

  return (
    <div className="relative p-10 mx-auto max-w-4xl bg-black my-16 rounded-lg flex flex-col gap-8">
      <h1 className="flex font-bold text-4xl justify-center">
        Generate your short URLs
      </h1>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          className=" p-4 focus:outline-purple-600"
          placeholder="Enter your URL"
          onChange={(element) => {
            seturl(element.target.value);
          }}
        />

        <input
          type="text"
          className="p-4 focus:outline-purple-600 "
          placeholder="Enter your preferred short URL text"
          onChange={(element) => {
            setshorturl(element.target.value);
          }}
        />
        <button onClick={generate} className="bg-red-600 p-2 m-2 rounded">
          Generate
        </button>
      </div>
      {generate && <>
        <span className="font-bold text-lg">Your Link</span> <code><Link target="_blank" href={generated}>{generated}</Link>
        </code></>}
    </div>
  );
};

export default Shortener;
