import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule, Platform, ToastController } from '@ionic/angular';
import { DataService, Message } from '../services/data.service';
import axios from 'axios';

@Component({
  selector: 'app-edit-topic',
  templateUrl: './edit-topic.page.html',
  styleUrls: ['./edit-topic.page.scss'],
})
export class EditTopicPage implements OnInit {
  public message!: Message;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);
  topicos : any = {};

  constructor( private toastController: ToastController, private router: Router) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    axios.get('http://localhost:3000/topics/'+ id, {
    }).then(result=>{
      if(result.data.success){
        if(result.data.topico!==null){
          this.topicos=result.data.topico;
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
  saveTopic(){
    let id=null;
    if(this.topicos.id===0){
      id=null;
    }else{
      id=this.topicos.id
    }
    var data={
      id:id,
      name:this.topicos.name,
      create_date:this.topicos.create_date,
      topic_id:this.topicos.topic_id,
      order:this.topicos.order,
      priority:this.topicos.priority,
      color: this.topicos.color,
      owner_user_id: this.topicos.owner_user_id
    }
    axios.post('http://localhost:3000/topics/update', data ,{

    }).then(async result=>{
      if(result.data.success){
        
        await this.presentToast('Topico Guardado');
        this.topicos=result.data.topico;
        this.router.navigate(["/home-topics"]);
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
