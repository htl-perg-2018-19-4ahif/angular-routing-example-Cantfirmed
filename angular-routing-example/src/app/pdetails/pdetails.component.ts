import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pdetails',
  templateUrl: './pdetails.component.html',
  styleUrls: ['./pdetails.component.css']
})
export class PdetailsComponent implements OnInit {

  public pokemon;
  public url: string ='https://pokeapi.co/api/v2/pokemon/';


  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.url += params['id'];
    });
    this.fetchPokemon();
  }

  async fetchPokemon(){
    this.pokemon = await this.http.get(this.url).toPromise();
  }
}
