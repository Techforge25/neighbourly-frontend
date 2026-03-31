"use client";

export default function MapEmbed() {
  return (
    <div className="embed-map-responsive">
      <iframe
        className="embed-map-frame"
        src="https://maps.google.com/maps?q=Australia&t=&z=5&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
      />
      <style jsx>{`
        .embed-map-responsive {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
          height: 100%;
          overflow: hidden;
          border-radius: 8px; /* Optional: rounded corners */
        }

        .embed-map-frame {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
      `}</style>
    </div>
  );
}