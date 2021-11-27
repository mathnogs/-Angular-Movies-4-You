import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-exibicao',
  templateUrl: './exibicao.component.html',
  styleUrls: ['./exibicao.component.css']
})

export class ExibicaoComponent implements OnInit {

  items: MenuItem[] = [];
  home!: MenuItem;
  primeiro = true;

  imagem = '';
  genero = '';
  filme = '';
  imgGenero = '';

  constructor(private route: ActivatedRoute ) {
    this.route.queryParams.subscribe(params => {

      let url = params['url'];
      let genero = params['genero'];
      let filme = params['filme'];
      let imgGenero = params['imgGenero'];

      this.imagem = url;
      this.genero = genero;
      this.filme = filme;
      this.imgGenero = imgGenero;

      // console.log(this.genero); // Print the parameter to the console.
      // console.log(this.filme); // Print the parameter to the console.
      // console.log(this.imggenero); // Print the parameter to the console.
      // console.log(this.imagem); // Print the parameter to the console.

      this.InsereRota(this.genero, this.filme);
  });
  }

  ngOnInit(): void {
    this.home = {icon: 'pi pi-home', routerLink: '/home'};
  }

    public InsereRota(genero: string, filme: string){
      this.items = [];
      let item: MenuItem = {};
      item.label = genero;
      item.routerLink = '/genero';
      item.queryParams = {
        url: this.imgGenero,
                filme:'',
                genero: this.genero
    };
      if (genero != ''){
        this.items.push(item);
      }

      let item2: MenuItem = {};
      item2.label = filme;
      if (filme != ''){
        this.items.push(item2);
      }
       // console.log(item2);
    }


}
