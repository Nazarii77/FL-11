exports.deletePasswordCheck = (req, res, next) => {
    if (req.method === 'DELETE'){
        if (req.header('Authorization') === 'X-Password qwerty')
        {
            next();
        } else{
            const error = new Error('No permission!');
            error.status = 401;
            return next(error);
        }
    }
    next();
};
