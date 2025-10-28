import { Component, OnInit } from '@angular/core';
import { hotel } from '../model/hotel.model';
import { CommonModule } from '@angular/common';
import { hotelService } from '../services/hotel';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hotels',
  standalone: true, 
  imports: [CommonModule,RouterLink],
  templateUrl: './hotels.html',

})
export class hotels implements OnInit{
   
   hotels: hotel[]; 

   constructor(private hotelService: hotelService ) { 
  
    this.hotels = hotelService.listehotels();
   } 
 
  supprimerhotel(l: hotel) { 
    
    let conf = confirm("Etes-vous sûr ?"); 
    if (conf) 
    this.hotelService.supprimerhotel(l); }

ngOnInit(){

}
}