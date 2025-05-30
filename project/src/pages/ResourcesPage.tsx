import React from 'react';
import { BookOpen, ExternalLink, Globe, Server, Code, Database } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const resources = [
    {
      category: "Plateformes de formation",
      icon: <BookOpen size={24} className="text-purple-500" />,
      items: [
        {
          title: "Plateforme de formation",
          url: "https://pf.vos-competences.com/apprenant/default.php",
          description: "Accédez à votre espace de formation et aux cours en ligne"
        },
        {
          title: "Plateforme des stagiaires",
          url: "https://sifp2-stagiaire-prod.bourgognefranchecomte.fr/Stagiaires/Portail/Menu.aspx",
          description: "Portail de la région Bourgogne Franche-Comté pour les stagiaires"
        },
        {
          title: "Dossiers partagés",
          url: "https://pf.vos-competences.com/apprenant/dossier_partage/php/partage_dossiers.php?guid_dossier_selectionne=356340DA99B0393F6AA68733BFC9BD5ECF09",
          description: "Accédez aux ressources partagées par les formateurs"
        },
        {
          title: "Dashboard",
          url: "https://pf.vos-competences.com/apprenant/default.php",
          description: "Tableau de bord de votre espace apprenant"
        },
        {
          title: "Me former",
          url: "https://pf.vos-competences.com/php5/competences/formations/index/last_theme/10618",
          description: "Accédez aux modules de formation disponibles"
        },
        {
          title: "Évaluation et positionnement",
          url: "https://pf.vos-competences.com/apprenant/liste_eval_app.php?prepost=pre&idutilisateur=&filter=385",
          description: "Passez vos évaluations et tests de positionnement"
        },
        {
          title: "Outils IA",
          url: "https://pf.vos-competences.com/php5/competences/formations/visu/id/31736",
          description: "Découvrez les outils d'intelligence artificielle pour le développement web"
        }
      ]
    },
    {
      category: "Tutoriels et Documentation",
      icon: <Code size={24} className="text-blue-500" />,
      items: [
        {
          title: "Grafikart",
          url: "https://grafikart.fr",
          description: "Tutoriels vidéo en français sur le développement web"
        },
        {
          title: "OpenClassrooms",
          url: "https://openclassrooms.com",
          description: "Créez votre première page web en HTML et bien plus"
        },
        {
          title: "Nouvelle Techno",
          url: "https://nouvelle-techno.fr/",
          description: "Plateforme de tutoriels en ligne sur les langages du web"
        },
        {
          title: "Symfony",
          url: "https://symfony.com/",
          description: "Documentation officielle du framework PHP Symfony"
        },
        {
          title: "MDN Web Docs Play",
          url: "https://developer.mozilla.org/en-US/play",
          description: "Éditeur de code en ligne pour tester vos connaissances"
        }
      ]
    },
    {
      category: "Outils de développement",
      icon: <Server size={24} className="text-green-500" />,
      items: [
        {
          title: "Material Design Color Tool",
          url: "https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors",
          description: "Outil pour choisir des palettes de couleurs harmonieuses"
        },
        {
          title: "CSS Diner",
          url: "https://flukeout.github.io/",
          description: "Jeu pour apprendre les sélecteurs CSS de façon interactive"
        },
        {
          title: "Can I Use",
          url: "https://caniuse.com/",
          description: "Vérifiez la compatibilité des fonctionnalités web sur différents navigateurs"
        },
        {
          title: "GitHub",
          url: "https://github.com/",
          description: "Plateforme de gestion de versions et de collaboration pour le code"
        }
      ]
    },
    {
      category: "Projet Jadoo",
      icon: <Globe size={24} className="text-red-500" />,
      items: [
        {
          title: "Site de référence Jadoo",
          url: "https://jadoo.store/",
          description: "Site web du restaurant japonais à reproduire pour le projet"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Ressources et Liens Utiles</h1>
          <p className="text-lg text-gray-600">Une collection de ressources pour vous accompagner dans votre formation</p>
        </div>

        <div className="space-y-10">
          {resources.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="mr-3">{category.icon}</span>
                  {category.category}
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((resource, rIndex) => (
                    <div key={rIndex} className="border border-gray-200 rounded-lg p-4 transition-all hover:shadow-md hover:border-blue-200">
                      <h3 className="font-semibold text-lg mb-2">
                        <a 
                          href={resource.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-blue-600 hover:text-blue-800 flex items-center"
                        >
                          {resource.title}
                          <ExternalLink size={16} className="ml-1" />
                        </a>
                      </h3>
                      <p className="text-gray-600">{resource.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          <div className="bg-blue-50 rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-800 flex items-center">
              <Database size={20} className="mr-2" />
              Astuces et raccourcis utiles
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-blue-700 mb-2">Raccourcis clavier pour caractères spéciaux</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>É = Alt + 144</li>
                  <li>È = Alt + 212</li>
                  <li>Ê = Alt + 0202</li>
                  <li>Å = Alt + 0197</li>
                  <li>À = Ctrl + Alt + 7</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-700 mb-2">Astuces VS Code</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>! + espace = créer un template HTML</li>
                  <li>Extension LiveServer pour prévisualiser</li>
                  <li>Sélectionner un texte + Ctrl+D = sélectionner toutes les occurrences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;