import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the MainScreenPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-main-screen',
  templateUrl: 'main-screen.html',
})
export class MainScreenPage {
totalItem:number=0;
totalPrice:number=0;
mdcount:number=0;
mdtotal:number=0;
pdcount:number=0;
pdtotal:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
  }


  paybil(){
    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000
    });
    toast.present();
  }
incCount(type:string)
{
 if(type="kpd")
    {
    
        this.pdcount++;
        this.pdtotal=this.pdcount*50;
        this.totalPrice=this.mdtotal+this.pdtotal;
        this.totalItem=this.pdcount+this.mdcount;  
    }


}
decCount(type:string)
{

  if(type="md")
  {
      if(this.mdcount>0)
      {
        this.mdcount--;
        this.mdtotal=this.mdcount*40;
        this.totalPrice=this.mdtotal+this.pdtotal
        }
   }
   if(type="pd")
  {
      if(this.pdcount>0)
      {
        this.pdcount--;
        this.pdtotal=this.pdcount*50;
        this.totalPrice=this.mdtotal+this.pdtotal
        }
   }
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainScreenPage');
  }

}
