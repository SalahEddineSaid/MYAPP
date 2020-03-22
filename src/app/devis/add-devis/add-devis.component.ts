import { Component, OnInit } from '@angular/core';
import {Client} from 'src/models/models.client';
import {Devis} from 'src/models/models.devis';
import {HttpClient} from '@angular/common/http';

import {ClientService} from 'src/services/clients.service';
import {DevisService} from 'src/services/devis.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-devis',
  templateUrl: './add-devis.component.html',
  styleUrls: ['./add-devis.component.css']
})
export class AddDevisComponent implements OnInit {

  clientList : Array<Client> = [];
  
    constructor(public http:HttpClient,
                public devisService:DevisService,
                public clientService:ClientService,
                public router:Router) { }
  
    ngOnInit() {
      this.clientService.getClients().subscribe(
        data => {
          this.clientList = data;
        }, err => {
          console.log(err);
        })
    }
  
    onSaveDevis(dataForm){
  

      console.log("ss"+dataForm);
      this.devisService.saveDevis(dataForm)
         .subscribe(data=>{
           console.log(data);
         },err=>{
          // console.log(JSON.parse(err._body).message);
         })
    }
  
    returnToList(){
      this.router.navigate(['devis']);
    }
  
  
  }
  