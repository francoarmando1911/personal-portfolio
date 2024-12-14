import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header className="mb-16 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
        Franco Armando
      </h1>
      <div className="flex justify-center space-x-4 mb-8">
        <a href="https://github.com/francoarmando1911" className="text-gray-400 hover:text-white transition-colors">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/franco-armando/" className="text-gray-400 hover:text-white transition-colors">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
        Soy estudiante de la Tecnicatura Universitaria en Programación en la UTN FRCU, con un interés sólido 
        en la creación de soluciones innovadoras a través de la programación, especialmente en el ecosistema 
        Java. Cuento con experiencia en Programación Orientada a Objetos (POO) y en el desarrollo de aplicaciones 
        web usando Spring Boot, junto con herramientas como Maven y conceptos de HTTP-REST.

        Actualmente, estoy ampliando mis habilidades y conocimientos al estudiar JavaScript, React y TypeScript, 
        para abordar las demandas del desarrollo web moderno. Me defino como una persona comprometida, trabajadora 
        y constante, con una motivación constante para aprender y contribuir significativamente a nuevos proyectos.
      </p>
    </header>
  );
}