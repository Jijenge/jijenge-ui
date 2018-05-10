const envBuild = {
  'server': [
    'PORT=1990'
  ],
  'client': [
    'NODE_ENV=DEVELOPMENT',
    'REST_SERVER_URL=http://localhost:1990',
    'REACT_APP_REST_SERVER_URL=http://localhost:1990'
  ]
};

module.exports = envBuild;