import bcrypt from 'bcrypt';

// Generate hash when user decides their password
const start = new Date();
const salt = await bcrypt.genSalt();
const hash = await bcrypt.hash('mypassword', salt);
console.log(salt);
console.log(hash);
console.log('time', new Date() - start);

// Compare password when user logs in
const isCorrect = await bcrypt.compare('mypassword', hash);
console.log(isCorrect);