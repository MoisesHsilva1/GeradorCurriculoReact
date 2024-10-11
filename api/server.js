import express from 'express';
import pdfRoutes from './api/routes /savePdf.js';

const app = express();

app.use(express.json({ limit: '10mb' }));
app.use('/api', pdfRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
