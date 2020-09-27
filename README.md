# chat-app-web

## About
Developed by [Emilio Sanches](https://www.github.com/emiliosanches).  
I developed this system with the only purpose of learning. Feel free to clone this repository and use it as you want.  

## Features
1. Sign up and sign in system using sessions.  
2. At this time, there is only one chat room. The `Global Chat`

## Future features  
1. Change password/Forgot password.
2. Friends request and private messages to your friends.  
3. Change nickname.  
And much more (as many as I have ideas) :)

## Setup for developing 
1. Clone the repo using `git clone https://github.com/emiliosanches/chat-app-web.git`
2. Clone the [server repo](https://www.github.com/emiliosanches/chat-app-server/) using `git clone https://github.com/emiliosanches/chat-app-server.git` and follow its instructions.
3. Add a file named `data.json` in the root directory of the web repo containing a key `server_url` with the server URL as value. In example:
```json
{
  "server_url": "http://localhost:3333/"
}
```
4. Now, you can run `yarn start` or `npm start` to start a development server. Or run `yarn build` or `npm run build` to create a production build.

### Please star this repo and contribute to development :)

### [Connect with me through LinkedIn](https://www.linkedin.com/in/emiliosanches)
