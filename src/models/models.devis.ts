import {Client} from './models.client';

export class Devis{
 
  id: number;
  designation:string;
  unite:string;
  quantite:string; 
  prixUnitaireTtc:string;
  prixTotalTtc:string;
  tag:boolean;
  client:Client=new Client();
}
