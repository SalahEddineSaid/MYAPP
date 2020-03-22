import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Client} from '../models/models.client';
import {Observable} from 'rxjs';

@Injectable()
export class ClientService{

  constructor(private http: HttpClient){
  }

  getClients() : Observable<Client[]>{
    console.log('Service => getCliens');

    return this.http.get<Client[]>("http://localhost:8081/getAllClients");
  }

  saveClient (client: Client) {
    console.log('Service => saveClient');

    console.log(client);

    return this.http.post<Client>('http://localhost:8081/saveClient', client);

  }

  updateClient(client : Client){
    console.log('Service => updateClient');

    return this.http.put<Client>("http://localhost:8082/updateClient", client);
  }

  deleteClient(idClient : number){
    return this.http.delete("http://localhost:8081/deleteClient/"+idClient);
  }

  getClient(idclient:number){
    return this.http.get<Client>("http://localhost:8082/getClient/"+idclient);
  }



}
