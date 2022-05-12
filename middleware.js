
    var middleware = {
        requireAuthentication: (req, res, next) => {
            console.log('private route hit');
            next();
        },
        logger: (req, res, next) => {
            console.log('Request: '+ req.method + ' ' + req.originalUrl + ' on date: ' + new Date().toString());
            next();
        }
    };

    module.exports = middleware;