import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public people:any;
  temp: any[];
  constructor(public navCtrl: NavController, private http:Http) {
    this.http.get('https://randomuser.me/api/?results=10')
    .map(res => res.json())
    .subscribe(data =>{
      this.people = data.results;
      this.temp = this.people;
    });
  }
  getItems(ev: any){
    this.people = this.temp;
    let val = ev.target.value;

    if (val && val.trim() !='') {
      this.people = this.people.filter((item) => {
        return (item.name.first.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

  }

}
