const liveServer = require("live-server");

const params = {
    port: 8181,
    root: 'dist',
    open: false,
    ignore: 'sass,my/templates',
    file: 'index.html',
    wait: 1000,
    logLevel: 2
};

liveServer.start(params);