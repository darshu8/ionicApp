import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AboutPage} from '../pages/about/about';
import {LoginPage} from '../pages/login/login';
import {MainScreenPage} from '../pages/main-screen/main-screen';
import { MyRequestProvider } from '../providers/my-request/my-request';
import { Flashlight } from '@ionic-native/flashlight';
import { BatteryStatus } from '@ionic-native/battery-status';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Httpd, HttpdOptions } from '@ionic-native/httpd';
import { HTTP } from '@ionic-native/http';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MainScreenPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  LoginPage,
    MainScreenPage
  ],
  providers: [
    StatusBar,
    HTTP,
    Camera,
    AdMobFree,
    SplashScreen,
    Flashlight,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MyRequestProvider,
    BatteryStatus,
    SpeechRecognition,
    Httpd,
    
  ]
})
export class AppModule {}
