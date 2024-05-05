type SimpleYouTubeProps = {
  url: string;
};

const SimpleYouTube = ({ url }: SimpleYouTubeProps) => {
  return (
    <iframe
      width="100%"
      height="100%"
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
};

export { SimpleYouTube };
