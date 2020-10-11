const initialState = {
  serverUrl: 'http://localhost:8000',
  initializeUser: '/api/current_user/', // token => user
  login: '/api/login/', // email, password => user
  signUp: '/api/signUp/', // name, email, password => user
  getPlatformInfo: '/api/getPlatformInfo/',  // token => platform
}

export default function urls(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}