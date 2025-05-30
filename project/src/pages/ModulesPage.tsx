import React from 'react';
import { Code, Database, Globe, Lock, Palette, Server, Smartphone } from 'lucide-react';

const ModulesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Modules de Formation</h1>
          <p className="text-lg text-gray-600">Notre programme complet pour devenir développeur web et web mobile</p>
        </div>

        <div className="space-y-16">
          {/* HTML5 & CSS3 */}
          <section id="html-css" className="scroll-mt-24">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-orange-400 to-red-500"></div>
              <div className="p-6 md:p-8">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <Palette size={32} className="text-orange-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">HTML5 & CSS3 - Front-End</h2>
                    <p className="text-gray-600 mb-6">Maîtrisez les fondamentaux du développement front-end pour créer des interfaces web modernes et responsives.</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3">HTML5</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="bg-orange-100 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                            <span>Structure sémantique des pages web</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-orange-100 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                            <span>Formulaires et validation de données</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-orange-100 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                            <span>Médias et intégration de contenu</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-orange-100 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">4</span>
                            <span>Accessibilité et bonnes pratiques</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3">CSS3</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="bg-red-100 text-red-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                            <span>Sélecteurs et mise en forme avancée</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-red-100 text-red-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                            <span>Flexbox et Grid pour des layouts modernes</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-red-100 text-red-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                            <span>Animations et transitions</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-red-100 text-red-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">4</span>
                            <span>Design responsive avec media queries</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-semibold mb-2">Projet pratique</h4>
                      <p>Intégration du site "Restaurant Jadoo" - <a href="https://jadoo.store/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">https://jadoo.store/</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PHP & Symphony */}
          <section id="php-symphony" className="scroll-mt-24">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-green-400 to-indigo-500"></div>
              <div className="p-6 md:p-8">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <Server size={32} className="text-green-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">PHP & Symphony - Back-End</h2>
                    <p className="text-gray-600 mb-6">Développez des applications web dynamiques et robustes avec PHP et le framework Symphony.</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3">PHP</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                            <span>Syntaxe et concepts fondamentaux</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                            <span>Programmation orientée objet en PHP</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                            <span>Gestion des formulaires et validation</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">4</span>
                            <span>Sécurité des applications PHP</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3">Symphony</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="bg-indigo-100 text-indigo-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                            <span>Architecture MVC avec Symphony</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-indigo-100 text-indigo-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                            <span>Routes, contrôleurs et templates Twig</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-indigo-100 text-indigo-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                            <span>Doctrine ORM et gestion de BDD</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-indigo-100 text-indigo-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">4</span>
                            <span>API REST avec Symphony</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Base de données */}
          <section id="database" className="scroll-mt-24">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-green-400 to-teal-500"></div>
              <div className="p-6 md:p-8">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <Database size={32} className="text-green-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Base de données relationnelles</h2>
                    <p className="text-gray-600 mb-6">Maîtrisez les concepts de bases de données relationnelles et le langage SQL pour stocker et gérer efficacement vos données.</p>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">SQL</h3>
                      <ul className="space-y-2 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
                        <li className="flex items-start">
                          <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                          <span>Conception de bases de données relationnelles</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                          <span>Requêtes SQL (SELECT, INSERT, UPDATE, DELETE)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                          <span>Jointures et requêtes complexes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">4</span>
                          <span>Optimisation et indexation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">5</span>
                          <span>Modélisation de données (MCD, MLD)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">6</span>
                          <span>Intégration avec PHP et Symphony</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cloud & Sécurité */}
          <section id="cloud-security" className="scroll-mt-24">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-500"></div>
              <div className="p-6 md:p-8">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <Lock size={32} className="text-purple-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Cloud computing & Cybersécurité</h2>
                    <p className="text-gray-600 mb-6">Apprenez à déployer vos applications dans le cloud et à protéger vos systèmes contre les cyberattaques.</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Cloud Computing</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                            <span>Introduction aux services web</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                            <span>Déploiement d'applications</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                            <span>Gestion des serveurs et des ressources</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3">Cybersécurité</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="bg-pink-100 text-pink-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                            <span>Protection des systèmes d'information</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-pink-100 text-pink-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                            <span>Sécurisation des applications web</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-pink-100 text-pink-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                            <span>Prévention contre les cyberattaques</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* UML & Dev Mobile */}
          <section id="uml-mobile" className="scroll-mt-24">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
              <div className="p-6 md:p-8">
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                    <Smartphone size={32} className="text-yellow-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">UML & Développement Mobile</h2>
                    <p className="text-gray-600 mb-6">Concevez et modélisez des applications avec UML et développez des applications mobiles natives.</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3">UML & Méthode AGILE</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="bg-yellow-100 text-yellow-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                            <span>Diagrammes UML essentiels</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-yellow-100 text-yellow-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                            <span>Méthodes agiles (Scrum, Kanban)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-yellow-100 text-yellow-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                            <span>Conception et modélisation d'applications</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3">Développement Mobile</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                            <span>Java pour Android</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                            <span>Kotlin (officialisé par Google)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                            <span>Développement d'applications responsives</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">4</span>
                            <span>Frameworks front-end pour le mobile</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projet Web */}
          <section id="web-project" className="scroll-mt-24">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-teal-400 to-cyan-500"></div>
              <div className="p-6 md:p-8">
                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-lg mr-4">
                    <Globe size={32} className="text-teal-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Développement d'Application Web & Mobile</h2>
                    <p className="text-gray-600 mb-6">Mettez en pratique toutes vos compétences dans un projet complet de développement web et mobile.</p>

                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-semibold mb-2">Projet Jadoo</h4>
                      <p className="mb-2">Reproduction du site d'un restaurant japonais : <a href="https://jadoo.store/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">https://jadoo.store/</a></p>
                      <p>Créez un site responsive présentant la cuisine gastronomique du Chef Junichi IIDA, fonctionnant sur tous les navigateurs.</p>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-xl font-semibold mb-3">Compétences développées</h3>
                      <ul className="grid md:grid-cols-2 gap-3">
                        <li className="flex items-center">
                          <span className="bg-teal-100 text-teal-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                            <Code size={14} />
                          </span>
                          <span>Intégration HTML/CSS responsive</span>
                        </li>
                        <li className="flex items-center">
                          <span className="bg-teal-100 text-teal-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                            <Database size={14} />
                          </span>
                          <span>Gestion de base de données</span>
                        </li>
                        <li className="flex items-center">
                          <span className="bg-teal-100 text-teal-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                            <Server size={14} />
                          </span>
                          <span>Programmation back-end</span>
                        </li>
                        <li className="flex items-center">
                          <span className="bg-teal-100 text-teal-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                            <Smartphone size={14} />
                          </span>
                          <span>Adaptation pour mobile</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ModulesPage;