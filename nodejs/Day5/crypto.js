const crypto = require('crypto');
const fs = require('fs');
const data = {
  username: 'shivam_doe',
  password: 'securePassword123',
}
function encrypt(d) {
  const secreatkey = crypto.randomBytes(32);
  const iv = crypto.randomBytes(16);
  const encryptedData = crypto.createCipheriv('aes-256-cbc', secreatkey, iv);
  let update = encryptedData.update(JSON.stringify(d), 'utf8', 'hex');
  update += encryptedData.final('hex');
  let newdata = {
    encryptedData: update,
    key: secreatkey.toString('hex'),
    iv: iv.toString('hex')
  };
  fs.writeFileSync('encryptedData.json', JSON.stringify(newdata, null, 2));
  console.log('Encrypted Data:', newdata);
}
encrypt(data);
function decrypt(encryptedData, key, iv, algorithm = 'aes-256-cbc') {
  const derpted = crypto.createDecipheriv(algorithm, key, iv);
  let decryptedData = derpted.update(encryptedData, 'hex', 'utf8');
  decryptedData += derpted.final('utf8');
  console.log('Decrypted Data:', decryptedData);
}
const encryptedContent = JSON.parse(fs.readFileSync('encryptedData.json', 'utf8'));
console.log('Encrypted Content:', encryptedContent);
decrypt(encryptedContent.encryptedData, Buffer.from(encryptedContent.key, 'hex'), Buffer.from(encryptedContent.iv, 'hex'));
