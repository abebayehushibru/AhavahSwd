/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import DownloadAPK from './DownloadApk';

const APKPage = () => {
  return (
    <div className="apk-page">
      <h1 style={{padding:20,}}>Baranto APK Download</h1>
      <div className="image-grid">
        {/* Images from the public folder */}
        <img src="/apks/baranto/images/baranto1.png" alt="Baranto Image 1" />
        <img src="/apks/baranto/images/baranto2.png" alt="Baranto Image 2" />
        <img src="/apks/baranto/images/baranto3.png" alt="Baranto Image 3" />
        <img src="/apks/baranto/images/baranto4.png" alt="Baranto Image 4" />
        {/* Add more images as needed */}
      </div>
      <DownloadAPK />
    </div>
  );
};

export default APKPage;
