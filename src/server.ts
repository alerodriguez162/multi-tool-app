import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import passwordRoutes from './routes/passwordRoutes';
import unitRoutes from './routes/unitRoutes';
import nameRoutes from './routes/nameRoutes';

dotenv.config();

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'views')));

app.use('/', passwordRoutes);
app.use('/units', unitRoutes);
app.use('/names', nameRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
