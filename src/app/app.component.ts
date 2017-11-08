import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

addFormMode = null;

  setCreateCustomer(){
    this.addFormMode = 'createCustomer';
  };
  setCreateActivity(){
    this.addFormMode = 'createActivity';
  };
  setAddActivity(event){
    this.addFormMode = event;
  };
  resetMode(event){
    this.addFormMode = event;
  };
 /*
people = [
  {
    name: "Tadeusz",
    surname: "Nowak",
    phone: "725-435-273",
    desc: "Jakiś losowy tekst o kimś",
    startDate: 2014,
    courses:[{
      name: "Muay-Thai",
      startDate: 2015,
      credit: 200
    },
    { 
      name: "Ping Pong",
      startDate: 2016,
      credit: 137
  }, 
  {
    name: "Pływanie",
    startDate:2017,
    credit:221
  }]
  },
  {
    name: "Adam",
    surname: "Nowakowski",
    phone: "933-415-681",
    desc: "Jakiś losowy tekst o kimś",
    startDate: 2005,
    courses:[{
      name: "Muay-Thai",
      startDate: 2010,
      credit: 2700
    },
    { 
      name: "Ping Pong",
      startDate: 2011,
      credit: 1375
  }, 
  {
    name: "Pływanie",
    startDate:2013,
    credit:1300
  }]
  },
  {
    name: "Robert",
    surname: "Kwiatkowski",
    phone: "455-653-277",
    desc: "Jakiś losowy tekst o kimś",
    startDate: 2010,
    courses:[{
      name: "Muay-Thai",
      startDate: 2012,
      credit: 2100
    },
    { 
      name: "Ping Pong",
      startDate: 2015,
      credit: 550
  }, 
  {
    name: "Pływanie",
    startDate:2017,
    credit:203
  }]
  }
];

sth = null;
chooseItem(elm){
  this.sth = elm;
  console.log(this.sth);
  }
    */  
}
