const bcrypt = require('bcrypt');

async function hashPassword(password) {
    const saltRounds = 10; // Salt rounds is a cost factor
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

module.exports={
    hashPassword
};