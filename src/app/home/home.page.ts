import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
produtos = [
  {'id':0,'nome': 'ps5','preço':4000},
  {'id':1,'nome': 'ps4','preço':4000},
  {'id':2,'nome': 'nintendo','preço':4000},
  {'id':3,'nome': 'xbox','preço':4000},
  {'id':4,'nome': 'pcy','preço':4000},
 
]
}
