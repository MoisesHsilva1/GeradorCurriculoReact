import {useState} from "react";
import Inputs from "./InputsTemplates1";
import { ValidationForm } from "./ValidationForm";
import './style.css';
import pdfMake from "pdfmake/build/pdfmake.js";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export function UserGeneratePDF() {
  const [formData, setFormData] = useState({
    name: '',
    Image: '',
    about: '',
    address: '',
    contact: '',
    objective: '',
    formation: '',
    completeActivities: '',
    resumeSkills: '',
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
          text: `${formData.address}\n${formData.contact}`,
          margin: [0, 10, 0, 20],
          alignment: 'center',
        },
        {
          text: 'OBJETIVO',
          style: 'subheader',
        },
        {
          text: formData.objective,
          margin: [0, 0, 0, 20],
        },
        {
          text: 'FORMAÇÃO',
          style: 'subheader',
        },
        {
          ul: formData.formation.split('\n'),
          margin: [0, 0, 0, 20],
        },
        {
          text: 'APERFEIÇOAMENTO E ATIVIDADES COMPLEMENTARES',
          style: 'subheader',
        },
        {
          ul: formData.completeActivities.split('\n'),
          margin: [0, 0, 0, 20],
        },
        {
          text: 'Resumo de Qualificações:',
          style: 'subheader',
        },
        {
          ul: formData.resumeSkills.split('\n'),
          margin: [0, 0, 0, 20],
        },
        {
          text: 'Informações Complementares',
          style: 'subheader',
        },
        {
          text: formData.informationComplement,
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
          setAbout={(value) => handleChange('about', value)}
          setAddress={(value) => handleChange('address', value)}
          setContact={(value) => handleChange('contact', value)}
          setObjective={(value) => handleChange('objective', value)}
          setCompleteActivities={(value) => handleChange('completeActivities', value)}
          setResumeSkills={(value) => handleChange('resumeSkills', value)}
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
