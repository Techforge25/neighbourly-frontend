"use client";
export default function MapEmbed() {
  return (
    <div className="embed-map-responsive">
      <div className="embed-map-container">
        <iframe
          className="embed-map-frame"
          src="https://maps.google.com/maps?width=362&height=640&hl=en&q=University%20of%20Oxford&t=&z=7&ie=UTF8&iwloc=B&output=embed"
          frameBorder="0"
          scrolling="no"
        //   marginHeight="0"
        //   marginWidth="0"
        />
      </div>

      <style jsx>{`
        .embed-map-responsive {
          position: relative;
          text-align: right;
          width: 100%;
          height: 0;
          padding-bottom: 176.79558011049724%;
        }

        .embed-map-container {
          overflow: hidden;
          background: none !important;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }

        .embed-map-frame {
          width: 100% !important;
          height: 100% !important;
          position: absolute;
          top: 0;
          left: 0;
        }
      `}</style>
    </div>
  );
}