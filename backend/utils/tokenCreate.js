/**
 * Creates a token using the given data.
 *
 * @param {object} data - The data to be signed into the token.
 * @return {string} The generated token.
 */
const jwt = require('jsonwebtoken')
module.exports.createToken = async (data) =>{
    const token = await jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: '7d'
    })

    return token
}