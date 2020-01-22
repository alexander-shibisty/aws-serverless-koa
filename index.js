'use strict';

const { createServer, proxy } = require('aws-serverless-express');

module.exports = (app, serverListenCallback, binaryTypes) => {
    return (event, ctx) => {
        proxy(createServer(app.callback(), serverListenCallback, binaryTypes), event, ctx);
    }
}
