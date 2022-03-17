/**
 * @Description: 
 * @Author: qiaowb
 * @Date: 2021-12-27 11:22:19
 * @LastEditors: qiaowb
 */
const os = require('os');
module.exports = () => {
    var iFaces = os.networkInterfaces();
    var ip = '';
    for (let dev in iFaces) {
        iFaces[dev].forEach((details) => {
            if (ip === '' && details.family === 'IPv4' && !details.internal) {
                ip = details.address;
                return;
            }
        });
    }

    return ip || '127.0.0.1';
};
