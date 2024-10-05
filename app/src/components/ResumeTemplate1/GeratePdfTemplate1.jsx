import { useState } from "react";
import Inputs from "./InputsTemplates1";
import { ValidationForm } from "./ValidationForm";
import './style.css';
import pdfMake from "pdfmake/build/pdfmake.js";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export function UserGeneratePDF() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contact: '',
    email: '',
    objective: '',
    formation: '',
    completeActivities: '',
    informationComplement: '',
  });

  const [errorMessage, setErrorMessage] = useState([]);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const createPdf = () => {
    const docDefinition = {
      content: [
        {
          text: formData.name,
          style: 'header',
          alignment: 'center',
        },
        {
          text: `Endereço: ${formData.address}`,
          alignment: 'left',
        },
        {
          text: `Telefone: ${formData.contact} / ${formData.email}`,
          alignment: 'left',
        },
        {
          text: 'OBJETIVO',
          style: 'subheader',
          alignment: 'center',
        },
        {
          text: formData.objective,
          alignment: 'center',
          margin: [0, 0, 0, 20],
        },
        {
          text: 'FORMAÇÃO',
          style: 'subheader',
          alignment: 'center',
        },
        {
          ul: formData.formation.split('\n'),
          margin: [0, 0, 0, 20],
        },
        {
          text: 'APERFEIÇOAMENTO E ATIVIDADES COMPLEMENTARES',
          style: 'subheader',
          alignment: 'center',
        },
        {
          ul: formData.completeActivities.split('\n'),
          margin: [0, 0, 0, 20],
        },
        {
          text: 'INFORMAÇÕES COMPLEMENTARES',
          style: 'subheader',
          alignment: 'center',
        },
        {
          ul: formData.informationComplement.split('\n'),
          margin: [0, 0, 0, 20],
        },
      ],
      styles: {
        header: {
          fontSize: 22,
          bold: true,
          margin: [0, 20, 0, 10],
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5],
        },
      },
    };
    const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    pdfDocGenerator.download('Curriculo.pdf');
  };

  const handleClickButton = () => {
    setErrorMessage([]);
    const errors = ValidationForm(formData);

    errors.length > 0
      ? setErrorMessage(errors)
      : createPdf();
  }

  return (
    <>
      <div className="input-container">
        <Inputs
          setName={(value) => handleChange('name', value)}
          setAddress={(value) => handleChange('address', value)}
          setContact={(value) => handleChange('contact', value)}
          setEmail={(value) => handleChange('email', value)}
          setObjective={(value) => handleChange('objective', value)}
          setCompleteActivities={(value) => handleChange('completeActivities', value)}
          setInformationComplement={(value) => handleChange('informationComplement', value)}
          setFormation={(value) => handleChange('formation', value)}
        />
      </div>
      {errorMessage.length > 0 && (
        <ul className="error-message" style={{ color: 'red' }}>
          {errorMessage.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      )}
      <button className="btn-gerate" onClick={handleClickButton}>Gerar PDF</button>
      <a href="/" className="template-link">Voltar</a>
    </>
  );
}
