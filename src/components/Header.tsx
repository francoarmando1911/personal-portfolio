import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header className="mb-16 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
        John Developer
      </h1>
      <div className="flex justify-center space-x-4 mb-8">
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
        Passionate full-stack developer with expertise in creating modern web applications.
        Specialized in React, Node.js, and cloud technologies with a focus on delivering
        exceptional user experiences.
      </p>
    </header>
  );
}