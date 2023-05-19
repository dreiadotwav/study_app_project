import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule, Platform, ToastController } from '@ionic/angular';
import { DataService, Message } from '../services/data.service';
import axios from 'axios';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.page.html',
  styleUrls: ['./login-user.page.scss'],
})
export class LoginUserPage implements OnInit {
  public message!: Message;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);
  usuarios : any = {};
  mostrarPassword: boolean = false;

  toggleMostrarPassword() {
    this.mostrarPassword = !this.mostrarPassword;
  }
  constructor( private toastController: ToastController, private router: Router) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    axios.get('http://localhost:3000/users/'+ id, {
      headers: {
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RpZ28iOjEsIm5hbWUiOiJBbGVqYW5kcm8iLCJsYXN0X25hbWUiOiJMZXpjYW5vIiwiZW1haWwiOiJhbGVkYW5pZWx4aWFvbWlAZ21haWwuY29tIiwiYXZhdGFyIjoiZ29rdSIsImlhdCI6MTY4NDUxMjcyN30.2bo5O64DqUlXcjDKjqveoV0SigdObHyjWu8ezNv1JNA'
      },
    }).then(result=>{
      if(result.data.success){
        if(result.data.usuario!==null){
          this.usuarios=result.data.usuario;
        }
        
      }else{
        console.log( result.data.error);
       
      }
    
    }).catch(error=>{
      console.log(error.message);
    })
  }
  async presentToast(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration:1500,
      position: 'top'
    })
    await toast.present();
  }
  loginUser(){
   
    var data={
      password:this.usuarios.password,
      email:this.usuarios.email,
    }
    axios.post('http://localhost:3000/users/login', data ,).then(async result=>{
      if(result.data.success){
        localStorage.setItem('token',result.data.token)
        this.router.navigate(["/home"]);
      }else{
        
        await this.presentToast('Error '+result.data.error);
        
      }
    
    }).catch(async error=>{
      await this.presentToast('Error '+error.message);
      console.log(error.message);
    })
  }
  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Inbox' : '';
  }
}
