import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { hotel } from '../model/hotel.model';
import { hotelService } from '../services/hotel';
import { ActivatedRoute, Router } from '@angular/router';
import { classification } from '../model/classification.model';

@Component({
  selector: 'app-update-hotel',
  standalone: true, 
  imports: [FormsModule, CommonModule],
  templateUrl: './update-hotel.html',
  styles: ``
})
export class Updatehotel implements OnInit {
  currenthotel!: hotel; // On utilisera '!' pour dire à TypeScript qu'elle sera initialisée
  classifications!: classification[];
  updatedClassId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router, 
    private hotelService: hotelService
  ) { } 

  ngOnInit(): void {
    // Charger les classifications
    this.classifications = this.hotelService.listeclassifications();

    // Récupérer l'ID depuis l'URL
    const hotelId = Number(this.activatedRoute.snapshot.params['id']);

    // Consulter l'hôtel avec vérification
    const foundHotel = this.hotelService.consulterhotel(hotelId);

    if (foundHotel) {
      this.currenthotel = foundHotel;
      this.updatedClassId = this.currenthotel.classification?.idClass ?? 0;
    } else {
      console.error("Hôtel non trouvé avec cet ID :", hotelId);
      // Redirection si l'hôtel n'existe pas
      this.router.navigate(['hotels']);
    }
  }

  updatehotel(): void { 
    // Mettre à jour la classification
    this.currenthotel.classification = this.hotelService.consulterClassification(this.updatedClassId);

    // Mettre à jour l'hôtel dans le service
    this.hotelService.updatehotel(this.currenthotel);

    // Redirection vers la liste des hôtels
    this.router.navigate(['hotels']);
  }
}
