import { Component, OnInit,ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

import {Client} from 'src/models/models.client';
import {ClientService} from 'src/services/clients.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public clientList : Array<Client> = [];
  dataSource :any;
  displayedColumns: string[] = ['nom', 'prenom','dateNaissance','email','tel','photo','tag','actions'];
 

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public http:HttpClient, public clientService:ClientService,
              public router:Router) { }
             
  ngOnInit() {
    this.doSearch();
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  doSearch(){
    this.clientService.getClients().subscribe(
      data => {
        this.clientList = data;
          
    console.log(this.clientList);
        this.dataSource = new MatTableDataSource<Client>(this.clientList);
        
      }, err => {
        console.log(err);
      },()=>{
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }

  onAddClient(){
    console.log('onAddClient');
    this.router.navigate(['admin-ajouter-thematique']);
  }

  onDeleteClient(client:Client){
    let confirm=window.confirm('Est vous sur ?');
    if(confirm==true){
      console.log(client.id);
      this.clientService.deleteClient(client.id)
        .subscribe(data=>{
          this.clientList.splice(this.clientList.indexOf(client),1);
        },err=>{
          console.log(err);
        })
    }
  }

  onEditClient(idclient:number){
    console.log('onEditClient'+idclient);

    this.router.navigate(['edit-client/',{idclient}]);
  }
  
}
