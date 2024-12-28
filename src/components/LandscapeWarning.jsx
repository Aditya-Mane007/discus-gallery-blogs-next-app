import React from "react";

function LandscapeWarning() {
  return (
    <div className="w-[70%] text-2xl text-red-500 flex flex-col items-center mx-auto my-12 text-center">
      This website is optimized for portrait mode.
      <br /> For the best experience, please rotate your <br /> device to
      portrait orientation.
      <p className="w-[100%] my-2">Thnak You 🙏</p>
    </div>
  );
}

export default LandscapeWarning;
