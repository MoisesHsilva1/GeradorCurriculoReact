import express from 'express';
import fs from 'fs';
import path from 'path';

const pdfRoutes = express.Router();

pdfRoutes.post('/savePdf', (req, res) => {
    const { pdfBase64 } = req.body;
    const pdfBuffer = Buffer.from(pdfBase64, 'base64');
    const filePath = path.join(__dirname, 'saved-pdfs', `Curriculo-${Date.now()}.pdf`);

    fs.writeFile(filePath, pdfBuffer, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao salvar PDF' });
        }
        res.json({ message: 'PDF salvo com sucesso' });
    });
});

export default pdfRoutes; 
