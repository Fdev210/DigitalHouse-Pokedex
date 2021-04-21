function logger(req, res, next) {
    const { query, method, params, body, url } = req;
    console.log(`${method} ${url} 
    - Query: ${JSON.stringify(query)} 
    - Parmas: ${JSON.stringify(params)} 
    - Body: ${JSON.stringify(body)}`);
    next();
}

module.exports = logger;