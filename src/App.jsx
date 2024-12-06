import React, { useState } from "react";
import logo from "../public/peopleConnect.png";

function App() {
  // State to store the YouTube URL and the generated iframes
  const [videoUrl, setVideoUrl] = useState("");
  const [iframes, setIframes] = useState([]);

  // Function to handle the URL input
  const handleUrlChange = (e) => {
    setVideoUrl(e.target.value);
  };

  // Function to handle form submission and generate iframes
  const handleGenerateIframes = (e) => {
    e.preventDefault();

    if (videoUrl) {
      const videoId = extractVideoId(videoUrl);
      if (videoId) {
        const newIframes = [];
        for (let i = 0; i < 5; i++) {
          newIframes.push(
            <div
              key={i}
              className="iframe-container flex justify-center mb-4 space-x-2"
            >
              {/* Adding margin to each iframe */}
              <iframe
                width="210"
                height="130"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                title={`Video ${i + 1}`}
                className="mr-2"
              ></iframe>
              <iframe
                width="210"
                height="130"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                title={`Video ${i + 1}`}
                className="mr-2"
              ></iframe>
              <iframe
                width="210"
                height="130"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                title={`Video ${i + 1}`}
                className="mr-2"
              ></iframe>
              <iframe
                width="210"
                height="130"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                title={`Video ${i + 1}`}
                className="mr-2"
              ></iframe>
              <iframe
                width="210"
                height="130"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                title={`Video ${i + 1}`}
                className="mr-2"
              ></iframe>
            </div>
          );
        }
        setIframes(newIframes);
      } else {
        alert("Invalid YouTube URL");
      }
    }
  };

  // Extract YouTube video ID from URL
  const extractVideoId = (url) => {
    const regex =
      /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|\S+)?(?:v=|e(?:mbed)?)|youtu\.be\/)([\w\-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  return (
    <div>
      <header className="flex items-center justify-between py-4 px-6 bg-pink-200 dark:text-white text-black">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-12 mr-3" />
          <h1 className="text-xl font-bold">Watch Time Increaser</h1>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold">
            Effortless Watch Time Increaser
          </h2>
        </div>
      </header>

      <div className="flex flex-row">
        <div className="w-[15%] text-center ">
          {/* Ads Section */}
          {/* <p>Ad Section 1</p> */}
        </div>
        <div className="w-[70%] text-center px-3">
          <h1 className="text-3xl font-bold underline mb-4">
            Watch Time Increaser
          </h1>

          {/* URL Input and Button */}
          <form onSubmit={handleGenerateIframes}>
            <input
              type="text"
              placeholder="Enter YouTube Video URL"
              value={videoUrl}
              onChange={handleUrlChange}
              className="p-2 w-full mb-4 border rounded"
            />
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded mb-5"
            >
              Generate Videos
            </button>
          </form>

          {/* Display generated iframes */}
          <div className="iframe-list">{iframes}</div>
        </div>
        <div className="w-[15%] text-center ">
          {/* Ads Section */}
          {/* <p>Ad Section 2</p> */}
        </div>
      </div>
    </div>
  );
}

export default App;
