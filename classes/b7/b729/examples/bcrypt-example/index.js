import bcrypt from 'bcrypt';

// Generate hash (e.g. when user registers)
const start = new Date();
const salt = await bcrypt.genSalt(14);
const hash = await bcrypt.hash('mypassword', salt);
console.log('salt', salt);
console.log('hash', hash);
console.log('time', new Date() - start);


// Compare password with hash (e.g. when user logs in)
const isCorrect = await bcrypt.compare('mypassword', hash);
console.log(isCorrect);