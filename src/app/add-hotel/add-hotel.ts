import { Component, OnInit } from '@angular/core';
import { FormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { hotel } from '../model/hotel.model';
import { hotelService } from '../services/hotel';
import { Router } from '@angular/router';
import { classification } from '../model/classification.model';

@Component({
  selector: 'app-add-hotel',
  standalone: true, 
  imports: [FormsModule],
  templateUrl: './add-hotel.html'
})
export class Addhotel implements OnInit {
  newclassification!: classification;
  message: any;
  newIdClass!: number;
  classifications!: classification[];
  newhotel = new hotel();
  myForm!: FormGroup;

  constructor(
    private hotelService: hotelService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.classifications = this.hotelService.listeclassifications();
    
    this.myForm = this.formBuilder.group({  
      idhotel: ['', [Validators.required]],
      nomhotel: ['', [Validators.required]],
      ville: ['', [Validators.required]],
      prixnuit: ['', [Validators.required]],
      etoiles: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      idclass: ['', [Validators.required]],
    });
  }

  addhotel() { 
    const foundClass = this.hotelService.consulterClassification(this.newIdClass);

    if (foundClass) {
      this.newclassification = foundClass;
      this.newhotel.classification = this.newclassification;
      this.hotelService.ajouterhotel(this.newhotel);
      this.router.navigate(['hotels']);
    } else {
      alert("Classification introuvable !");
    }
  }
}