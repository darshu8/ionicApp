import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { MainScreenPage } from '../main-screen/main-screen';
import { Http } from '@angular/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BatteryStatus } from '@ionic-native/battery-status';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Httpd, HttpdOptions } from '@ionic-native/httpd';
import { HTTP } from '@ionic-native/http';
import {LoginPage} from '../login/login';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { Flashlight } from '@ionic-native/flashlight';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
dataa :any;
public up:string;
batlev:any=0;
nm:string;
public d:any;
txt:string;
 options: HttpdOptions;
 pth:string;
  public base64Image: string;

  constructor( 
                private admob: AdMobFree,  
                private http: HTTP,
                private httpd: Httpd,
                private speechRecognition: SpeechRecognition,
                private batteryStatus: BatteryStatus,
                private flashlight: Flashlight,
                public camera: Camera,
                public navCtrl: NavController,
                public loadingCtrl: LoadingController,
                public toastCtrl: ToastController,
          ) {
    this.speechRecognition.requestPermission()
  .then(
    () => console.log('Granted'),
    () => console.log('Denied')
  )
       

     this. options  = {
     www_root: 'httpd_root', // relative path to app's www directory
     port: 80,
     localhost_only: false
 };



  }
takePicture(){
this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }


presentToast() {
 


    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000
    });
    toast.present();
  }
  
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 4000
    });
    loader.present();
    
  }
  load()
  {  
    this.navCtrl.push(MainScreenPage);
  } 

  flashing()
  {
    this.flashlight.toggle();
    console.log("Clicked");
  }
showDialogBox()
{
let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
}



batStatus()
{
  console.log('ionViewDidLoad BatteryStatus');
    // watch change in battery status
    let subscription = this.batteryStatus.onChange().subscribe(
    (status) => {
    console.log(status.level, status.isPlugged);
    this.batlev=status.level;
    
        let toast = this.toastCtrl.create({
          message: 'Battery LEVEL :'+this.batlev,
          duration: 3000
          });
    toast.present();


    }
    );
}

spee()
{
  this.speechRecognition.startListening()
  .subscribe(
    (matches: Array<string>) => this.txt=matches[0],
    (onerror) => console.log('error:', onerror)
  )
}

serverStrt(){
  this.httpd.startServer(this.options).subscribe((data) => {
 console.log('Server is live');
 this.pth="Server is live";
});
}
serverStp(){}

getur(){

let str=  this.httpd.getUrl();
str.then((url)=>{
  this.pth=url;
})
}
getlcl(){



  this.httpd.getLocalPath()
}
sendReq()
{



  this.http.get('http://192.168.43.55/jsonDemo.php', {}, {})
  .then(data => {

    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);
    this.dataa=data.data;
    
    this.d=JSON.parse(data.data);
    
    

  })
  .catch(error => {

    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
}
goToLogin()
{
     this.navCtrl.push(LoginPage);
  
}
jsonDemo()
{
  this.d=JSON.parse("{\"username\":\"dj\",\"password\":\"jd\"}");
}

}
