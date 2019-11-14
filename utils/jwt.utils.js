// Imports

var jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = '415km64fboui4848tiuhc82za1d0x0vztra2ty215czaze9d'

// Exported function

module.exports = {
    generateTokenForUser: function(idUser, privilege) {
        return jwt.sign({
            idUser,
            isAdmin: privilege
        },
        JWT_SIGN_SECRET,
        {
            expiresIn: '1h'
        })
    },
    parseAuthorization: function(authorization) {
        return (authorization != null) ? authorization.replace('Bearer ', '') : null;
    },
    get_id_user: function(authorization) {
        var userID_check = -1;
        var token = module.exports.parseAuthorization(authorization);
        console.log(token);
        if(token != null) {
            try {
                var jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
                if(jwtToken != null)
                    userID_check = jwtToken.idUser;
                } catch(err) { }
            }
            return userID_check;
        }
}
