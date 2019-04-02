import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from 'url';
import { FormsModule } from '@angular/forms';

interface IPokemonList{
  count: number;
  results: IPokemon[];
}

interface IPokemon{
  name: string;
  url: Url;
}

@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})

export class PlistComponent implements OnInit {
  @Input() filter:string='';
  @Output() filterChange=new EventEmitter<string>();

  public pokelist:IPokemon[];
  public url: string ='https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchPokemon();
  }

  private async fetchPokemon() {
    let count: IPokemonList = await this.http.get<IPokemonList>(this.url).toPromise();
    this.pokelist = (await this.http.get<IPokemonList>(this.url+'?limit=' + count.count).toPromise()).results;
  }

  public onFilterChange(){
    this.filterChange.emit(this.filter);
  }

}
