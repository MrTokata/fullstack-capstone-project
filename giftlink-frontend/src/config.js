const config = {
  backendUrl: process.env.REACT_APP_BACKEND_URL,
};

console.log(config.ba)

console.log(`backendUrl in config.js: ${config.backendUrl}`)
export {config as urlConfig}
