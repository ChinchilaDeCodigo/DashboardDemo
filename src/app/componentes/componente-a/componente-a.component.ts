import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent {


  readonly APIurl = "http://localhost:5072/api/Hero/";

  heroes: any = [];

  constructor(private http: HttpClient)
  {}

  ngOnInit(){
    this.getHeroes()
  }

  getHeroes(){
    this.http.get(this.APIurl+'GetHeroes').subscribe(data => {
      this.heroes = data;
    })
  }

  addHero(){
    var newHero =(<HTMLInputElement>document.getElementById("newHero")).value
    var formData = new FormData()
    formData.append("newHero", newHero)
    this.http.post(this.APIurl+'AddHero', formData).subscribe(data => {
      alert(data)
      this.getHeroes()
    })
  }

  deleteHero(id: number){
    this.http.delete(this.APIurl+'DeleteHero?id='+id).subscribe(data => {
      alert(data)
      this.getHeroes()
    })
  }

}
