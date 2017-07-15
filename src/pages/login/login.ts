import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
 
 person = { 
   name:"", 
   sname:"" 
};
  
 
 
 jdata:any;
data:string="{name:'darshan',sname:'jain'}";
  constructor(   private admob: AdMobFree,
                 public alertCtrl: AlertController,
                 public toastCtrl: ToastController,
                 public http: HTTP,
                 public navCtrl: NavController,
                 public navParams: NavParams) {
                  
admob.banner.config({
 id: 'ca-app-pub-6001156079150132~6833997408',
})

// Create banner
admob.banner.prepare()

// Show the banner
admob.banner.show()

// Hide the banner
admob.banner.hide()

// Remove the banner
admob.banner.remove()

admob.interstitial.config({
 id: 'ca-app-pub-6001156079150132~6833997408',
})

admob.interstitial.prepare()

admob.interstitial.show()
      
const bannerConfig: AdMobFreeBannerConfig = {
 // add your config here
 // for the sake of this example we will just use the test config
 isTesting: true,
 autoShow: true
};
this.admob.banner.config(bannerConfig);

this.admob.banner.prepare()
  .then(() => {
    // banner Ad is ready
    // if we set autoShow to false, then we will need to call the show method here
  })
  .catch(e => console.log(e));


              }
usr:string;
pws:string;
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  login()
  {
    

    this.http.get('http://192.168.1.102/login.php?usr='+this.usr+"&pws="+this.pws, {}, {})
  .then(data => {

if(data.data =="1")
{
    this.showAlert('Login Successfull','WELCOME USER '+this.usr);
}
else
{
this.showAlert('Login Unsuccessfull','Please provide valid username and password');
}


  })
  .catch(error => {

  this.showAlert('ERROR','Info: '+error.error);
  });
}

showAlert(ttl:string,msg:string) {
    let alert = this.alertCtrl.create({
      title: ttl,
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

}
