import { useState } from "react";
import InputsTemplate2 from "./InputsTemplate2";
import { ValidationForm2 } from "./ValidationForm2";
import './style.css';
import pdfMake from "pdfmake/build/pdfmake.js";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export function UserGeneratePDF() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        aboutMe: '',
        formation: '',
        experience: ''
    });

    const handleChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    }

    const [errorMessage, setErrorMessage] = useState([]);

    const createPdf = () => {
        const labelMapping = {
            name: 'Nome',
            email: 'Email',
            contact: 'Contato',
            aboutMe: 'Sobre mim',
            formation: 'Formação',
            experience: 'Experiência Profisional'
        }

        const docDefinition = {
            content: [
                {
                    text: formData.name,
                    style: 'header',
                    color: '#1a1aff',
                    alignment: 'center',
                    margin: [0, 0, 0, 20]
                },
                {
                    text: 'CONTATO',
                    color: '#1a1aff',
                    style: 'subheader',
                    alignment: 'right',
                },
                {
                    text: `${formData.email}\n${formData.contact}`,
                    style: 'contact',
                    alignment: 'right',
                },
                {
                    canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1, lineColor: '#1a1aff' }],
                    margin: [0, 20, 0, 20],
                },
                {
                    text: 'SOBRE MIM',
                    style: 'subheader',
                    color: '#1a1aff',
                    alignment: 'left',
                },
                {
                    text: formData.aboutMe,
                    style: 'normalText',
                    margin: [0, 10, 0, 20],
                },
                {
                    canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1, lineColor: '#1a1aff' }],
                    margin: [0, 20, 0, 20],
                },
                {
                    text: 'FORMAÇÃO',
                    style: 'subheader',
                    color: '#1a1aff',
                    alignment: 'left',
                },
                {
                    text: formData.formation,
                    style: 'normalText',
                    margin: [0, 10, 0, 20],
                },
                {
                    canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1, lineColor: '#1a1aff' }],
                    margin: [0, 20, 0, 20],
                },
                {
                    text: 'EXPERIÊNCIA',
                    style: 'subheader',
                    color: '#1a1aff',
                    alignment: 'left',
                },
                {
                    text: formData.experience,
                    style: 'normalText',
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
            }
        }
        const pdfDocGenerator = pdfMake.createPdf(docDefinition);
        pdfDocGenerator.download('curriculo.pdf');



    }
    const handleClickButton = () => {
        const errors = ValidationForm2(formData);
        setErrorMessage(errors);

        errors.length > 0
            ? setErrorMessage(errors)
            : createPdf();
    }

    return (
        <>
            <div className="inputs-container">
                <InputsTemplate2
                    setName={(value) => handleChange('name', value)}
                    setEmail={(value) => handleChange('email', value)}
                    setContact={(value) => handleChange('contact', value)}
                    setAboutMe={(value) => handleChange('aboutMe', value)}
                    setFormation={(value) => handleChange('formation', value)}
                    setExperience={(value) => handleChange('experience', value)}
                />
            </div>
            {errorMessage.length > 0 && (
                <div className="error-container">
                    {errorMessage.map((error, index) => (
                        <p key={index}>{error}</p>
                    ))}
                </div>
            )}
            <button className="btn-gerate2" onClick={handleClickButton}>Criar PDF</button>
            <a href="/" className="template-link">Voltar</a>
        </>
    )
}


