Chatterbox server
==============

This is a project I completed as a student at Hack Reactor. This project was worked on with a pair. Chattterbox Server is an API server built with node.js that replaces the parse API. The server application contain some utilities and routing and works with the [Chatterbox client](https://github.com/nickpapayiannakis/chatterbox_client).

## Structure:

The repository consists of

- Server app
- [Client app](https://github.com/nickpapayiannakis/chatterbox_client)
- test Specs files.

#### Chatterbox server 

The server features at a glance :

- GET/POST/OPTIONS requests.
- Support CORS to handle cross domain issues.
- Serve Static Assets (css/html/js/img)
- Persistent storage on file system.

Its architecture allows to easily extend the request handler router and add as many endpoints as needed.

## Install:

The project relies on bower and npm for managing external libraries and dependencies, so be sure to first:

`bower install`

`npm install`

to run it, simply run `node basic-server.js` and open the client/index.html file with your browser.
In particular:

- `./server/basic-server.js`
- `./client/index.html`

Make sure to have a valid config.js inside the env folder.

### SpecRunner - mocha

The specrunner contain both the tests for the client

### Testing

Tests are made with the [Mocha](https://github.com/mochajs/mocha) testing framework.
Test are located in the ./spec directory. To run the just run.

```
npm test
```