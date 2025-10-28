import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { hotel } from '../model/hotel.model';
import { hotelService } from '../services/hotel';
import { Router } from '@angular/router';
import { classification} from '../model/classification.model';

@Component({
  selector: 'app-add-hotel',
  standalone: true, 
  imports: [FormsModule],
  templateUrl: './add-hotel.html'

})
export class Addhotel implements OnInit {
  newclassification!: classification;
message: any;
  ngOnInit(): void {

    this.classifications = this.hotelService.listeclassifications();
  }
  newIdClass! : number;
  classifications! : classification[];
  newhotel = new hotel(); 
  constructor(private hotelService: hotelService,private router :Router) { } 
  /*addhotel(){ 
      this.newclassification =
      this.hotelService.consulterClassification(this.newIdClass!);
      this.newhotel.classification= this.newclassification;
      this.hotelService.ajouterhotel(this.newhotel);
      if (this.router) {
        this.router.navigate(['hotels']);
      }
    }*/

      addhotel() { 
  const foundClass = this.hotelService.consulterClassification(this.newIdClass!);

  if (foundClass) { //  vérifie que la classification existe
    this.newclassification = foundClass;
    this.newhotel.classification = this.newclassification;
    this.hotelService.ajouterhotel(this.newhotel);
    this.router.navigate(['hotels']);
  } else {
    alert(" Classification introuvable !");
  }
}
  } 

