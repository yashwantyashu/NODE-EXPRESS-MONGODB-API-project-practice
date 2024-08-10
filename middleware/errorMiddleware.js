//callback to respond error for application
const errorMiddleware = (err, req, res, next) => {
    console.log('here is the error');
    const statusCode = res.statusCode ? res.statusCode : 500;   
  
  
    // Ensure error message is a string
    const errorMessage = typeof err.message === 'string' ? err.message : String(err.message);
  
    res.status(statusCode);
    res.setHeader('Content-Type', 'application/json');
    res.json({
      message: errorMessage,
      stack: process.env.NODE_ENV === "development" ? err.stack : null
    });
  };
  

module.exports = errorMiddleware;