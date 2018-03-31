/**
 * isAuthenticated
 *
 */
var jwt = require('express-jwt');

var authCheck = jwt({
  secret: new Buffer('pfLET3t6APrhkQKXzieN1Iztc6300INfxiAbxPaVurMBxweywahyVwuFJ6dIO80c', 'base64'),
  audience: 'uDa2LsDAk12zsINulAgEX-MG_cOVS6rw'
});

module.exports = authCheck;
