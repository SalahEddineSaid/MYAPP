import {Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Devis} from '../models/models.devis';

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  constructor(private http: HttpClient) { }
 
  getAllDevis() : Observable<Devis[]>{
    return this.http.get<Devis[]>("http://localhost:8081/getAllDevis");
  }

  getDevisByClient(idclient) : Observable<Devis[]>{
    return this.http.get<Devis[]>("http://localhost:8081/getDevisByClient/"+idclient);
  }

  saveDevis (devis: Devis) {
    console.log("devis="+devis)
    return this.http.post<Devis>("http://localhost:8081/saveDevis", devis);
  }

  updateDevis(devis : Devis){
    return this.http.put<Devis>("http://localhost:8081/updateDevis", devis);
  }

  deleteDevis(idDevis : number){
    return this.http.delete("http://localhost:8081/deleteDevis/"+idDevis);
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  getDevis(idDevis:number){
    return this.http.get<Devis>("http://localhost:8082/getDevis/"+idDevis);
  }

}
