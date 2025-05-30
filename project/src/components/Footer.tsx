import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Formation DWWM</h3>
            <p className="mb-4">Développeur web et web mobile - Niveau 5</p>
            <p className="mb-4">Code NSF : 326t - Programmation, mise en place</p>
            <p>Stage non rémunéré du 03/09/2025 au 28/10/2025</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contacts</h3>
            <div className="flex items-start mb-2">
              <Phone size={18} className="mr-2 mt-1" />
              <div>
                <p>Référent TH</p>
                <p>Céline LACREUSE</p>
                <p>Facilitatrice en insertion pro.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail size={18} className="mr-2 mt-1" />
              <div>
                <p>Fatima MALLET</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul>
              <li className="mb-2 hover:text-green-300">
                <a href="https://pf.vos-competences.com/apprenant/default.php" target="_blank" rel="noopener noreferrer">
                  Plateforme de formation
                </a>
              </li>
              <li className="mb-2 hover:text-green-300">
                <a href="https://sifp2-stagiaire-prod.bourgognefranchecomte.fr/Stagiaires/Portail/Menu.aspx" target="_blank" rel="noopener noreferrer">
                  Plateforme des stagiaires
                </a>
              </li>
              <li className="hover:text-green-300">
                <a href="https://pf.vos-competences.com/apprenant/dossier_partage/php/partage_dossiers.php?guid_dossier_selectionne=356340DA99B0393F6AA68733BFC9BD5ECF09" target="_blank" rel="noopener noreferrer">
                  Dossiers partagés
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-400">
          <p>© 2025 Formation OnlineFormaPro - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;