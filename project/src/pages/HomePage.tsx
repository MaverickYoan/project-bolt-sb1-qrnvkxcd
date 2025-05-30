import React from 'react';
import { ArrowRight, BookOpen, CalendarClock, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Développeur Web et Web Mobile</h1>
            <p className="text-xl mb-8">Une formation complète pour maîtriser les technologies du web et devenir un développeur polyvalent.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/modules" className="bg-white text-blue-700 hover:bg-blue-100 px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center">
                <BookOpen size={18} className="mr-2" /> Découvrir le programme
              </Link>
              <Link to="/certification" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center">
                <GraduationCap size={18} className="mr-2" /> Certification
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Titre Professionnel</h3>
              <p>Développeur web et web mobile - Niveau 5 (Cadre national des certifications 2019)</p>
              <p className="mt-2 text-blue-600">Code NSF : 326t - Programmation, mise en place</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Période de Stage</h3>
              <div className="flex items-center mb-2">
                <CalendarClock size={20} className="text-blue-600 mr-2" />
                <p>Du 03/09/2025 au 28/10/2025</p>
              </div>
              <p>Stage non rémunéré en entreprise pour mettre en pratique vos compétences</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Projet Final</h3>
              <p>À la fin de la formation, vous présenterez un projet (niveau BAC+2) démontrant vos compétences en développement web.</p>
              <p className="mt-2 text-blue-600">Application responsive fonctionnant sur tous les navigateurs</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Modules */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Modules de Formation</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* HTML5 & CSS3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-24 bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white">HTML5 & CSS3</h3>
              </div>
              <div className="p-6">
                <p className="mb-4">Maîtrisez les fondamentaux du développement front-end avec HTML5 et CSS3. Créez des sites web responsives et modernes.</p>
                <Link to="/modules#html-css" className="text-orange-500 hover:text-orange-700 flex items-center">
                  Voir le module <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            {/* PHP & Symphony */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-24 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white">PHP & Symphony</h3>
              </div>
              <div className="p-6">
                <p className="mb-4">Développez des applications back-end puissantes avec PHP et le framework Symphony. Gérez des données et créez des API.</p>
                <Link to="/modules#php-symphony" className="text-indigo-500 hover:text-indigo-700 flex items-center">
                  Voir le module <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Bases de données */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-24 bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white">Base de données SQL</h3>
              </div>
              <div className="p-6">
                <p className="mb-4">Concevez, implémentez et gérez des bases de données relationnelles avec SQL. Apprenez à structurer et à interroger vos données.</p>
                <Link to="/modules#database" className="text-teal-500 hover:text-teal-700 flex items-center">
                  Voir le module <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/modules" className="bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors inline-flex items-center">
              Voir tous les modules <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à commencer votre formation ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Rejoignez notre programme de formation et développez les compétences recherchées dans le domaine du développement web et mobile.</p>
          <Link to="/contact" className="bg-white text-blue-900 hover:bg-blue-100 px-8 py-3 rounded-md font-medium transition-colors inline-block">
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;