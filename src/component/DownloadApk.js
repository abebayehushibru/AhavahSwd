import React from 'react';

const DownloadAPK = () => {
  const getArchitecture = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const platform = navigator.platform.toLowerCase();

    // Guess architecture based on userAgent or platform
    if (userAgent.includes('arm') || platform.includes('arm')) {
      if (userAgent.includes('64') || platform.includes('64')) {
        return 'arm64-v8a';  // 64-bit ARM
      } else {
        return 'armeabi-v7a';  // 32-bit ARM
      }
    } else if (userAgent.includes('x86') || platform.includes('x86')) {
      if (userAgent.includes('x86_64') || platform.includes('x86_64')) {
        return 'x86_64';  // 64-bit x86
      } else {
        return 'x86';  // 32-bit x86
      }
    } else {
      return 'universal';  // Fallback to a universal APK if architecture is unknown
    }
  };

  const downloadAPK = () => {
    const architecture = getArchitecture();
    const baseUrl = 'https://ahavahswd.netlify.app/apks/baranto/';
    // URLs of the APK files for different architectures
  const apkUrls = {
    'armeabi-v7a': `${baseUrl}app-armeabi-v7a.apk`,
    'arm64-v8a': `${baseUrl}app-arm64-v8a.apk`,
    'x86': `${baseUrl}app-x86.apk`,
    'x86_64': `${baseUrl}app-x86_64.apk`,
    'universal': `${baseUrl}app-universal.apk` // Optional fallback
  };

    // Get the appropriate URL based on the architecture
    const downloadUrl = apkUrls[architecture] || apkUrls['universal'];

    // Redirect the browser to download the APK
    window.location.href = downloadUrl;
  };

  return (
    <button onClick={downloadAPK} className='download-button '>
      Download APK for Your Device
    </button>
  );
};

export default DownloadAPK;
