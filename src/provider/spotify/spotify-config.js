const spotifyOptions = {
  clientID: '4b5b8093097a4d5e8b467df64d221fa1',
  sessionUserDefaultsKey: 'SpotifySession',
  redirectURL: 'spotifytest://auth',
  scopes: [
    'user-read-private',
    'playlist-read',
    'playlist-read-private',
    'streaming',
  ],
};


export default spotifyOptions;
