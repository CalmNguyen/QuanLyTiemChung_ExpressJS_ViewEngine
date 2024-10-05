
exports.index = (req, res) => {
    if (!req.user) {
        res.render('index');
    }
    else {
        res.redirect('/nhanvien')
    }
}