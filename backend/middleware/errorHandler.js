const errorHandler = (err, req, res, next) => {
    console.error(err.stack); 

    const response = {
        status: 'error',
        message: err.message || 'Internal Server Error', 
    };

    res.status(err.statusCode || 500).json(response); 
};

module.exports = errorHandler;