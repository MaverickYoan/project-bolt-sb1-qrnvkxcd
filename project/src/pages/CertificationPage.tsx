import React from 'react';
import { Award, Calendar, Check, Clock, FileText, GraduationCap } from 'lucide-react';

const CertificationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Certification DWWM</h1>
          <p className="text-lg text-gray-600">Développeur Web et Web Mobile - Titre Professionnel de Niveau 5</p>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-12">
          <div className="flex">
            <div className="flex-shrink-0">
              <GraduationCap className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-blue-800">Titre Professionnel : Développeur web et web mobile</p>
              <p className="mt-1 text-sm text-blue-600">Sigle du titre professionnel : DWWM</p>
              <p className="mt-1 text-sm text-blue-600">Niveau : 5 (Cadre national des certifications 2019)</p>
              <p className="mt-1 text-sm text-blue-600">Code(s) NSF : 326t - Programmation, mise en place</p>
            </div>
          </div>
        </div>

        {/* Certification Details */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="h-6 w-6 text-blue-600 mr-2" /> 
              Détails de la Certification
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Compétences attestées</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Développer la partie front-end d'une application web ou web mobile</span>
                  </li>
                  <li className="flex">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Développer la partie back-end d'une application web ou web mobile</span>
                  </li>
                  <li className="flex">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Concevoir et mettre en place une base de données</span>
                  </li>
                  <li className="flex">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Développer les composants d'accès aux données</span>
                  </li>
                  <li className="flex">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Élaborer et mettre en œuvre des composants dans une application de gestion de contenu</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Modalités d'évaluation</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <FileText className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Mise en situation professionnelle écrite et orale</span>
                  </li>
                  <li className="flex">
                    <FileText className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Dossier professionnel</span>
                  </li>
                  <li className="flex">
                    <FileText className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Entretien final avec le jury</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Calendar className="h-6 w-6 text-blue-600 mr-2" />
              Organisation de la Formation et de l'Épreuve Finale
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 h-full w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                      <div className="bg-blue-50 p-4 rounded-lg shadow-sm inline-block">
                        <h3 className="font-semibold text-blue-800">Formation théorique et pratique</h3>
                        <p className="text-gray-600">Apprentissage des modules et réalisation de projets pratiques</p>
                      </div>
                    </div>
                    <div className="z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full border-4 border-blue-400">
                      <Clock className="h-8 w-8 text-blue-500" />
                    </div>
                    <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                      <p className="text-sm text-gray-500">Premiers mois</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0 order-1 md:order-1">
                      <p className="text-sm text-gray-500">Du 03/09/2025 au 28/10/2025</p>
                    </div>
                    <div className="z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full border-4 border-blue-400 order-2">
                      <Calendar className="h-8 w-8 text-blue-500" />
                    </div>
                    <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 order-3">
                      <div className="bg-blue-50 p-4 rounded-lg shadow-sm inline-block">
                        <h3 className="font-semibold text-blue-800">Stage en entreprise</h3>
                        <p className="text-gray-600">Stage non rémunéré pour mettre en pratique les compétences acquises</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                      <div className="bg-blue-50 p-4 rounded-lg shadow-sm inline-block">
                        <h3 className="font-semibold text-blue-800">Préparation du projet final</h3>
                        <p className="text-gray-600">Développement d'une application web complète pour la présentation</p>
                      </div>
                    </div>
                    <div className="z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full border-4 border-blue-400">
                      <FileText className="h-8 w-8 text-blue-500" />
                    </div>
                    <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                      <p className="text-sm text-gray-500">Derniers mois</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0 order-1 md:order-1">
                      <p className="text-sm text-gray-500">Fin de formation</p>
                    </div>
                    <div className="z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full border-4 border-blue-400 order-2">
                      <Award className="h-8 w-8 text-blue-500" />
                    </div>
                    <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 order-3">
                      <div className="bg-blue-50 p-4 rounded-lg shadow-sm inline-block">
                        <h3 className="font-semibold text-blue-800">Présentation du projet & Certification</h3>
                        <p className="text-gray-600">Soutenance devant un jury et obtention du titre professionnel</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationPage;