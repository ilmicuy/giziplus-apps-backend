const mongoose = require('mongoose');
const app = require('./app');

const DB = 'mongodb://127.0.0.1:27017/belajar-express';

mongoose.set('strictQuery', true);

async function main() {
  await mongoose
    .connect(DB)
    .then(() => console.log('Database MongoDB Berhasil terhubung'))
    .catch((err) => 'Database Error');
}

main();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server berjalan di PORT ${PORT}`);
});
