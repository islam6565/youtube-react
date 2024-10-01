import React from "react";

const MainVideo = () => {
  return (
    <div>

      <iframe
        style={{
          borderRadius: "20px",
        }}
        width="1000"
        height="600"
        src="https://www.youtube.com/embed/salY_Sm6mv4?si=W3LhsGtL1RgHSS_d"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>
      HTML in 5 minutes
      </h3>
      

    </div>
  );
};

export default MainVideo;
