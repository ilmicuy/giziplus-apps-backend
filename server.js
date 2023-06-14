const mongoose = require('mongoose');
const app = require('./app');

const DB = 'mongodb+srv://ilmicuy:nasel007@giziplus.ggtdyri.mongodb.net/giziplus?retryWrites=true&w=majority';

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
