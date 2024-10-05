import curriculoImage from './Curriculo1.png';
import curriculoImage2 from './Curriculo2.png';
import './style.css';

export function SelectTemplate() {
    return (
        <>
            <div className="welcome-container">
                <h1>Seja bem-vindo ao projeto Fazendo futuro...</h1>
            </div>
            <section className="template-selection">
                <h1 className="main-title">Selecione um dos nossos modelos de currículo</h1>
                <div className="template-list">
                    <article className="template-item">
                        <figure>
                            <img src={curriculoImage} alt="Modelo de Currículo 1" className="template-image" />
                            <figcaption>
                                <a href="/ResumeTemplateOne" className="template-link">Modelo 1</a>
                            </figcaption>
                        </figure>
                    </article>
                    <article className="template-item">
                        <figure>
                            <img src={curriculoImage2} alt="Modelo de Currículo 2" className="template-image" />
                            <figcaption>
                                <a href="/ResumeTemplateTwo" className="template-link">Modelo 2</a>
                            </figcaption>
                        </figure>
                    </article>
                </div>
            </section>
        </>
    );
}
