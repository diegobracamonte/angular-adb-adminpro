import { Component, OnInit } from '@angular/core';
import { resolve } from 'dns';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuario().then(usuarios=>{
      console.log(usuarios);
    });
    // const promesa = new Promise((resolve,reject) => {
    //   if(false){
    //     resolve('Hola mundo');

    //   }else{
    //     reject('Algo salio mal');

    //   }
    // });

    // promesa.then(() => {
    //   console.log('hey termine');

    // }).catch(error=>console.log('error en mi promesa',error));

    // console.log('fin init');

  }

  getUsuario(){
    const promesa=new Promise(resolve=>{
      fetch('https://reqres.in/api/users?page=2')
      .then(resp=>resp.json())
      .then(body=>resolve(body.data));
    })
    return promesa;
  }

}
