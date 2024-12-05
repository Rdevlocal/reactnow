import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const YouTubeSubscribe = ({
  channelName = "Hackenshaw",
  channelid = "UCZEnbGBfukY7hukNcRr1vjA",
  theme = "dark",
  layout = "default",
  count = "hidden",
}) => {
  const youtubeSubscribeNode = useRef(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (initialized) return;

    // Add YouTube script dynamically
    const youtubescript = document.createElement("script");
    youtubescript.src = "https://apis.google.com/js/platform.js";
    youtubeSubscribeNode.current.parentNode.appendChild(youtubescript);
    setInitialized(true);
  }, [initialized]);

  return (
    <section className="youtubeSubscribe">
      <div
        ref={youtubeSubscribeNode}
        className="g-ytsubscribe"
        data-theme={theme}
        data-layout={layout}
        data-count={count}
        data-channel={channelName}
        data-channelid={channelid}
      />
    </section>
  );
};

YouTubeSubscribe.propTypes = {
  channelName: PropTypes.string,
  channelid: PropTypes.string.isRequired,
  theme: PropTypes.string,
  layout: PropTypes.string,
  count: PropTypes.string,
};

export default YouTubeSubscribe;
