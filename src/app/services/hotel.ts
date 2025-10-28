import { Injectable } from '@angular/core';
import { hotel } from '../model/hotel.model';
import { classification } from '../model/classification.model';

@Injectable({
  providedIn: 'root'
})
export class hotelService {
  private hotels: hotel[] = [];
  private classifications: classification[] = [];

  constructor() {
    // Initialisation des classifications
    this.classifications = [
      { idClass: 1, nomClass: "Luxe" },
      { idClass: 2, nomClass: "Économique" },
      { idClass: 3, nomClass: "Familial" },
      { idClass: 4, nomClass: "Affaires" },
      { idClass: 5, nomClass: "Aventure" },
      { idClass: 6, nomClass: "Romantique" } 
    ];

    // Initialisation des hôtels
    this.hotels = [
      {
        idhotel: 1,
        nomhotel: "Hôtel Le Paradis",
        ville: "Tunis",
        prixnuit: 150.00,
        etoiles: 5,
        classification: { idClass: 1, nomClass: "Luxe" }
      },
      {
        idhotel: 2,
        nomhotel: "Hôtel Les Palmiers",
        ville: "Sousse",
        prixnuit: 90.00,
        etoiles: 4,
        classification: { idClass: 2, nomClass: "Économique" }
      },
      {
        idhotel: 3,
        nomhotel: "Hôtel La Mer Bleue",
        ville: "Hammamet",
        prixnuit: 120.00,
        etoiles: 4,
        classification: { idClass: 3, nomClass: "Familial" }
      },
       {
      idhotel: 4,
      nomhotel: "Hôtel The Royal",
      etoiles: 5,
      ville: "Tunis",
      prixnuit: 200,
      classification: { idClass: 1, nomClass: "Luxe" }
    },
    {
      idhotel: 5, 
      nomhotel: "Hôtel Sea View",
      etoiles: 3,
      ville: "Sfax",
      prixnuit: 80,
      classification: { idClass: 2, nomClass: "Economique" }
    },
    {
      idhotel: 6,
      nomhotel: "Hôtel Mountain Resort",
      etoiles: 4, 
      ville: "Ain Draham",
      prixnuit: 110,
      classification: { idClass: 3, nomClass: "Familial" }
    },
    {
      idhotel: 7,
      nomhotel: "Hôtel Business Inn",
      etoiles: 4,
      ville: "Tunis",
      prixnuit: 130,
      classification: { idClass: 4, nomClass: "Affaires" }
    },
    {
      idhotel: 8,
      nomhotel: "Hôtel Desert Oasis",
      etoiles: 3,
      ville: "Tozeur", 
      prixnuit: 95,
      classification: { idClass: 5, nomClass: "Aventure" }
    },
    {
      idhotel: 9,
      nomhotel: "Hôtel Rêve à Deux",
      etoiles: 5,
      ville: "Djerba",
      prixnuit: 220,
      classification: { idClass: 6, nomClass: "Romantique" }
    },
    {
      idhotel: 10,
      nomhotel: "Hôtel Lune de Miel",
      etoiles: 4,
      ville: "Monastir",
      prixnuit: 150,
      classification: { idClass: 6, nomClass: "Romantique" }
    },

    ];
  }

  // retourne la liste complète des hôtels
  listehotels(): hotel[] {
    return [...this.hotels]; // retourne une copie
  }

  // retourne la liste des classifications
  listeclassifications(): classification[] {
    return [...this.classifications];
  }

  // ajoute un hôtel
  ajouterhotel(hot: hotel) {
    this.hotels.push(hot);
  }

  // supprime un hôtel
  supprimerhotel(hot: hotel) {
    const index = this.hotels.findIndex(h => h.idhotel === hot.idhotel);
    if (index > -1) {
      this.hotels.splice(index, 1);
    }
  }

  // consulte un hôtel par son id
  consulterhotel(id: number): hotel | undefined {
    return this.hotels.find(l => l.idhotel === id);
  }

  // met à jour un hôtel
  updatehotel(hot: hotel) {
    const index = this.hotels.findIndex(h => h.idhotel === hot.idhotel);
    if (index > -1) {
      this.hotels[index] = hot;
    }
  }

  // consulte une classification par id
  consulterClassification(id: number): classification | undefined {
    return this.classifications.find((cla: classification) => cla.idClass === id);
  }

  // recherche les hôtels selon une classification
  rechercherParClassification(idClass: number): hotel[] {
    return this.hotels.filter(cur => cur.classification?.idClass === idClass);
  }

  // recherche les hôtels selon un nom (insensible à la casse)
  rechercherParNom(nom: string): hotel[] {
    const keyword = nom.toLowerCase();
    return this.hotels.filter(h => h.nomhotel?.toLowerCase().includes(keyword));
  }

  
}
