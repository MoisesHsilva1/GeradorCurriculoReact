import {useState} from "react";
import InputsTemplate3 from './InputsTemplate3';
import { ValidationForm3 } from './ValidationForm3';
import './style.css';
import pdfMake from "pdfmake/build/pdfmake.js";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export function UserGeneratePDF() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        address: '',
        objective: '',
        experience: '',
        education: '',
        skills: '',
    });

    const handleChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const [errorMessage, setErrorMessage] = useState([]);

    const createPdf = () => {
        const labelMapping = {
            name: 'Nome',
            email: 'Email',
            contact: 'Contato',
            address: 'Endereço',
            objective: 'Objetivo',
            experience: 'Experiência',
            education: 'Educação',
            skills: 'Habilidades',
        };

        const docDefinition = {
            content: [
                {
                    text: formData.name,
                    decoration: 'underline',
                    style: 'header',
                    color: '#1a1aff',
                    alignment: 'center',
                },
                {
                    text: 'CONTATO',
                    decoration: 'underline',
                    style: 'subheader',
                    color: '#1a1aff',
                    alignment: 'left',
                },
                {
                    text: `${formData.email}\n${formData.contact}\n${formData.address}`,
                    style: 'normalText',
                    alignment: 'left',
                },
                {
                    text: 'OBJETIVO',
                    decoration: 'underline',
                    style: 'subheader',
                    color: '#1a1aff',
                    alignment: 'left',
                },
                {
                    text: formData.objective,
                    style: 'normalText',
                    alignment: 'left',
                },
                {
                    text: 'EXPERIÊNCIA',
                    decoration: 'underline',
                    style: 'subheader',
                    color: '#1a1aff',
                    alignment: 'left',
                },
                {
                    text: formData.experience,
                    style: 'normalText',
                    alignment: 'left',
                },
                {
                    text: 'EDUCAÇÃO',
                    style: 'subheader',
                    decoration: 'underline',
                    color: '#1a1aff',
                    alignment: 'left',
                },
                {
                    text: formData.education,
                    style: 'normalText',
                    alignment: 'left',
                },
                {
                    text: 'HABILIDADES',
                    decoration: 'underline',
                    style: 'subheader',
                    color: '#1a1aff',
                    alignment: 'left',
                },
                {
                    text: formData.skills,
                    style: 'normalText',
                    alignment: 'left',
                },

            ],
            styles: {
                header: {
                    fontSize: 28,
                    bold: true,
                    margin: [0, 0, 0, 10],
                },
                subheader: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 10, 0, 5],
                },
                contact: {
                    fontSize: 10,
                    margin: [0, 0, 0, 10],
                },
                normalText: {
                    fontSize: 12,
                    margin: [0, 5, 0, 5],
                }
            },
            defaultStyle: {
                font: 'Roboto',
            },
        }

        const pdfDocGenerator = pdfMake.createPdf(docDefinition);
        pdfDocGenerator.download('Curriculo.pdf');
    };

    const handleClickButton = () => {
        setErrorMessage([]);
        const errors = ValidationForm3(formData);
    
        errors.length > 0
          ? setErrorMessage(errors)
          : createPdf();
      }

    return (
        <>
            <div className="input-container">
                <InputsTemplate3
                    setName={(value) => handleChange('name', value)}
                    setEmail={(value) => handleChange('email', value)}
                    setContact={(value) => handleChange('contact', value)}
                    setAddress={(value) => handleChange('address', value)}
                    setObjective={(value) => handleChange('objective', value)}
                    setExperience={(value) => handleChange('experience', value)}
                    setEducation={(value) => handleChange('education', value)}
                    setSkills={(value) => handleChange('skills', value)}
                />
            </div>
            {errorMessage.length > 0 && (
                <ul className="error-message" style={{ color: 'red' }}>
                    {errorMessage.map((msg, index) => (
                        <li key={index}>{msg}</li>
                    ))}
                </ul>
            )}
            <button className="btn-gerate3" onClick={handleClickButton}>Gerar pdf</button>
            <a href="/" className="template-link">Voltar</a>
        </>
    )
}
