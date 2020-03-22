import { Component, OnInit,ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

import {Client} from 'src/models/models.client';
import {Devis} from 'src/models/models.devis';

import {ClientService} from 'src/services/clients.service';
import {DevisService} from 'src/services/devis.service';

import {Router} from '@angular/router';
@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {

  
  public devisList : Array<Devis> = [];
  dataSource :any;
  displayedColumns: string[] = ['designation', 'quantite','prixUnitaireTtc','tag','nom','actions'];
 
  
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public http:HttpClient,public devisService:DevisService,
              public router:Router) { }

  ngOnInit() {
    this.devisService.getAllDevis().subscribe(
      data => {
        this.devisList = data;
        console.log("devislist="+this.devisList);
        this.dataSource = new MatTableDataSource<Devis>(this.devisList);
      }, err => {
        console.log(err);
      },()=>{
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }



  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onAddDevis(){
    console.log('onAddDevis');
    this.router.navigate(['ajouter-devis']);
  }

  onDeleteDevis(devis:Devis){
    let confirm=window.confirm('Est vous sur ?');
    if(confirm==true){
      console.log(devis.id);
      this.devisService.deleteDevis(devis.id)
        .subscribe(data=>{
          this.devisList.splice(this.devisList.indexOf(devis),1);
        },err=>{
          console.log(err);
        })
    }
  }

  onEditDevis(iddevis:number){
    console.log('onEditDevis'+iddevis);

  //  this.router.navigate(['admin-editer-rubrique/',{idrubrique}]);
  }

}

