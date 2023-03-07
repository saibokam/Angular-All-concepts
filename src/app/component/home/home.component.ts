import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  required=true;
  
interpt="Hai,This is interpolation";

cb="cbcss";

cb2={
  cbcss1:this.required,
  cbcss2:this.required
}

sb={
  'text-align':'center',
  'color':'blue',
  'font-size':'50px',
  'background-color':'red'
}
eb=""
fun(){
  this.eb="Hai,This is event binding interpolation"
}

x={
  mohan:this.required,
  krishna:this.required
}

y="";

ngs="2";

yx=["a","b","c","d","e","f"];

m={
  Name:"Mohan",
  "Age":23,
  "Place":"sabbavaram",
  "Qualification":"Diploma in mechanical"
};

s=[
  {
    Name:"Mohan",
    "Age":23,
    "Place":"sabbavaram",
    "Qualification":"Diploma in mechanical"
  },
  {
    Name:"Krishna",
    "Age":23,
    "Place":"sabbavaram",
    "Qualification":"Diploma in mechanical"
  }
]

}

