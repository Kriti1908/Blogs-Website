const JWT = require('jsonwebtoken');

const secret = 'mysecret';

function createTokenForUser(user) {
    const payload = {
        _id: user._id,
        email: user.email,
        profileImageUrl: user.profileImageUrl,
        role: user.role,
    };

    // console.log("payload: ", payload);
    // console.log("secret: ", secret);

    const token = JWT.sign(payload, secret);
    return token;
}

function validateToken(token) {
    const payload = JWT.verify(token, secret);
    return payload;
}

module.exports = {
    createTokenForUser,
    validateToken
};