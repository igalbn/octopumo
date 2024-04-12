import {helloSearch} from './variables.js'

// 🏁 //
document.addEventListener('DOMContentLoaded', function() {

  // https://stackoverflow.com/questions/61725325/detect-an-electron-instance-via-javascript
  function isElectron() {
    // Renderer process
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
        return true;
    }

    // Main process
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
        return true;
    }

    // Detect the user agent when the `nodeIntegration` option is set to true
    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
        return true;
    }

    return false;
}


console.log('Is Electron: ' , isElectron());
  // if (typeof process !== 'undefined' && process.versions && process.versions.electron) {
  //   // Code is running in an Electron app
  //   console.log('Running in Electron');
  // } else {
  //   // Code is running in a regular browser environment
  //   console.log('Running in a regular browser');
  // }
  // console.log("Yes Electro");
  const metaTag = document.createElement('meta');
  metaTag.setAttribute('http-equiv', 'Content-Security-Policy');
  metaTag.setAttribute('content', "default-src 'self'; img-src * data:; object-src 'none'");
  document.head.appendChild(metaTag);


    const searchApp = document.getElementById('octopumo-app');
    searchApp.innerHTML = helloSearch;


    // Check if the app is running in Electron
if (window && window.process && window.process.type === 'renderer') {

}
  });