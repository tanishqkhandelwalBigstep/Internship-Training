function isloggedin(req, res, next) {
    const query = req.query;

    if(query.name === 'Tanishq' && query.password === '1234'){
        next()
    }else{
        res.redirect('/login')
    }
}


module.exports = isloggedin