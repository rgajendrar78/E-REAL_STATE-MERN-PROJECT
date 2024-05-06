const globalErrorHandler = (req, res, next, err) => {
    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({
        message: err.message,
        errorStack: process.env.NODE_ENV === "development" ? err.stack : "",
    });
}

export default globalErrorHandler;