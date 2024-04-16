const crypto = require('crypto');

// Encryption function
function encrypt(text, secretKey) {
    // Generate a random IV (Initialization Vector)
    const iv = crypto.randomBytes(16);
    // Create a cipher with AES-256-CBC algorithm and the secret key
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(secretKey), iv);
    // Encrypt the text
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    // Return the IV and the encrypted data
    return { iv: iv.toString('hex'), encryptedData: encrypted };
}

// Decryption function
function decrypt(encryptedData, iv, secretKey) {
    // Create a decipher with AES-256-CBC algorithm, the secret key, and the IV
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(secretKey), Buffer.from(iv, 'hex'));
    // Decrypt the encrypted data
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    // Return the decrypted text
    return decrypted;
}

// Example usage
const text = 'Hello, world!';
const secretKey = 'mySecretKey123456789012345678901234'; // 32 bytes for AES-256
const encrypted = encrypt(text, secretKey);
console.log('Encrypted:', encrypted);

const decrypted = decrypt(encrypted.encryptedData, encrypted.iv, secretKey);
console.log('Decrypted:', decrypted);
