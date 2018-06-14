import { Component } from '@angular/core';
import { NavController, ModalController,  NavParams , ToastController} from 'ionic-angular';
import { constructor } from 'localforage';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html' 
  
})
export class ContactPage {
  
  id: any;
  obg: any;

  private url:string  = "http://localhost:3000/contact";
public dados: Array<{}>;       
  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: Http) {
                
                this.http.get(this.url)
                .subscribe((res: Response) => {
                  this.dados = res.json();
                }
              )}
}
