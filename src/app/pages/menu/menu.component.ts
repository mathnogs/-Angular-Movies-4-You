import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    items: MenuItem[] = [];

    constructor( ) { }

    ngOnInit(): void {

      this.items = [
                //Ação
                {
                label: 'Ação',
                routerLink: 'genero',
                queryParams: {
                    url: 'https://static2.srcdn.com/wordpress/wp-content/uploads/2019/11/john-wick-2-header-1.jpg',
                            filme:'',
                            genero:'Ação'
                },

                        items: [
                            {
                                label: 'Duro de Matar',
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/25/88/20188922.jpg',
                                    genero:'Ação',
                                    filme:'Duro de Matar',
                                }
                            },
                            {
                                label: 'Mercenários',
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://upload.wikimedia.org/wikipedia/pt/thumb/8/80/Os_Mercen%C3%A1rios_Capa.jpg/230px-Os_Mercen%C3%A1rios_Capa.jpg',
                                    genero:'Ação',
                                    filme:'Mercenários',


                                }
                            },
                            {
                                label: 'Dunkirk',
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://upload.wikimedia.org/wikipedia/pt/thumb/0/0b/Dunkirk_p%C3%B4ster.png/250px-Dunkirk_p%C3%B4ster.png',
                                    genero:'Ação',
                                    filme:'Dunkirk',

                                }
                            },
                            {
                                label: 'Resident Evil',
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://upload.wikimedia.org/wikipedia/pt/thumb/2/28/Resident_Evil.jpg/250px-Resident_Evil.jpg',
                                    genero:'Ação',
                                    filme:'Resident Evil',

                                }
                            },
                            {
                                label: 'Kill Bill',
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/89/48/24/20122126.jpg',
                                    genero:'Ação',
                                    filme:'Kill Bill',

                                }
                            },
                            {
                                label: 'O Protetor',
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://br.web.img3.acsta.net/c_310_420/pictures/14/08/01/19/10/403236.jpg',
                                    genero:'Ação',
                                    filme:'O Protetor',

                                }
                            },
                            {
                                label: 'Mad Max',
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://upload.wikimedia.org/wikipedia/pt/thumb/2/23/Max_Mad_Fury_Road_Newest_Poster.jpg/250px-Max_Mad_Fury_Road_Newest_Poster.jpg',
                                    genero:'Ação',
                                    filme:'Mad Max',

                                }
                            },
                            {
                                label: '1917',
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://upload.wikimedia.org/wikipedia/pt/thumb/f/ff/1917_poster.jpg/220px-1917_poster.jpg',
                                    genero:'Ação',
                                    filme:'1917',

                                }
                            },
                            {
                                label: 'John Wick',
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://upload.wikimedia.org/wikipedia/pt/thumb/1/13/John_wick_ver3.jpg/250px-John_wick_ver3.jpg',
                                    genero:'Ação',
                                    filme:'John Wick',

                                }
                            },
                            {
                                label: 'Sicario',
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://br.web.img3.acsta.net/c_310_420/pictures/15/07/29/23/01/281503.jpg',
                                    genero:'Ação',
                                    filme:'Sicario',

                                }
                            },

                        ],
                },

                //Cinebiografia
                {

                    label: 'Cinebiografia',
                    routerLink: 'genero',
                    queryParams: {
                        url: 'https://cps-static.rovicorp.com/2/Open/Cinema_Source_84/Program/20004672/_derived_jpg_q90_600x800_m0/Lincoln.jpg',
                        genero:'Cinebiografia',
                        filme:''
                    },

                    items: [
                        {
                            label: 'A Lista de Schindler',
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://br.web.img3.acsta.net/c_310_420/pictures/19/04/10/19/44/2904073.jpg',
                                filme:'A Lista de Schindler',
                                genero:'Cinebiografia',

                            }
                        },
                        {
                            label: 'Prenda-me se for Capaz',
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'http://br.web.img3.acsta.net/pictures/210/100/21010048_20130603234956231.jpg',
                                filme:'Prenda-me se for Capaz',
                                genero:'Cinebiografia',

                            }
                        },
                        {
                            label: 'O Lobo de Wall Street',
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://br.web.img3.acsta.net/c_310_420/pictures/13/12/30/18/11/111145.jpg',
                                filme:'O Lobo de Wall Street',
                                genero:'Cinebiografia',

                            }
                        },
                        {
                            label: 'Lincoln',
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://cps-static.rovicorp.com/2/Open/Cinema_Source_84/Program/20004672/_derived_jpg_q90_600x800_m0/Lincoln.jpg' ,
                                filme:'Lincoln',
                                genero:'Cinebiografia',

                            }
                        },
                        {
                            label: '127 Horas',
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/33/30/20028710.jpg',
                                filme:'127 Horas',
                                genero:'Cinebiografia',

                            }
                        },
                        {
                            label: 'Touro Indomável',
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/93/46/58/20258527.JPG',
                                filme:'Touro Indomável',
                                genero:'Cinebiografia',

                            }
                        },
                        {
                            label: 'O Pianista',
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://br.web.img3.acsta.net/c_310_420/pictures/210/432/21043224_20130923202123729.jpg',
                                filme:'O Pianista',
                                genero:'Cinebiografia',

                            }
                        },
                        {
                            label: 'A Rede Social',
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://www.bing.com/th?id=AMMS_e51e5c1bae3f2012831abf771bf25bca&w=99&h=149&c=8&rs=1&o=5&pid=3.1&rm=2',
                                filme:'A Rede Social',
                                genero:'Cinebiografia',

                            }
                        },
                        {
                            label: 'O Jogo da Imitação',
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://br.web.img3.acsta.net/c_310_420/pictures/14/10/30/19/02/198128.jpg',
                                filme:'O Jogo da Imitação',
                                genero:'Cinebiografia',

                            }
                        },
                          {
                            label: 'Fome de Poder',
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://br.web.img2.acsta.net/c_310_420/pictures/17/02/21/19/09/113794.jpg',
                                filme:'Fome de Poder',
                                genero:'Cinebiografia',

                            }
                        },


                    ],



                },

                //Comédia
                {

                  label: 'Comédia',
                  routerLink: 'genero',
                  queryParams: {
                      url: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/92/90/97/20224646.jpg',
                      genero:'Comédia',
                      filme:''
                  },

                  items: [
                      {
                          label: 'Trovão Tropical',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/30/11/19874082.jpg',
                              filme:'Trovão Tropical',
                              genero:'Comédia',

                          }
                      },
                      {
                          label: 'Borat',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/92/90/97/20224646.jpg',
                              filme:'Borat',
                              genero:'Comédia',

                          }
                      },
                      {
                          label: 'Zumbilândia',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/21/81/20086182.jpg',
                              filme:'Zumbilândia',
                              genero:'Comédia',

                          }
                      },
                      {
                          label: 'O Máskara',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/86/15/20116705.jpg',
                              filme:'O Máskara',
                              genero:'Comédia',

                          }
                      },
                      {
                          label: 'Ace Ventura',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/86/97/26/19870677.jpg',
                              filme:'Ace Ventura',
                              genero:'Comédia',

                          }
                      },
                      {
                          label: 'Austin Powers',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/86/97/78/19870730.jpg',
                              filme:'Austin Powers',
                              genero:'Comédia',

                          }
                      },
                      {
                          label: 'Super-Herói: O Filme',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/23/87/19873431.jpg',
                              filme:'Super-Herói: O Filme',
                              genero:'Comédia',

                          }
                      },
                      {
                          label: 'Se Beber, Não Case!',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/29/37/19874003.jpg',
                              filme:'Se Beber, Não Case!',
                              genero:'Comédia',

                          }
                      },
                      {
                          label: 'Scott Pilgrim',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/pictures/210/077/21007756_2013052223593443.jpg',
                              filme:'Scott Pilgrim',
                              genero:'Comédia',

                          }
                      },
                        {
                          label: 'Kong-Fusão',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://image.tmdb.org/t/p/w185/1cSHYv1FSgFNUmTe43lE7jhsaIw.jpg',
                              filme:'Kong-Fusão',
                              genero:'Comédia',
                          }
                      },


                  ],



                },

                //Policial
                {

                  label: 'Policial',
                  routerLink: 'genero',
                  queryParams: {
                      url: 'https://image.tmdb.org/t/p/original/iqP3m9EdoDvSzi6lPMmpjOX6vLY.jpg',
                      genero:'Policial',
                      filme:''
                  },

                  items: [
                      {
                          label: 'Pulp Fiction',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://cps-static.rovicorp.com/2/Open/EU%20VOD%20Releases/Pulp%20Fiction/Belgium/_2by3/pulp-fiction-poster.JPG',
                              filme:'Pulp Fiction',
                              genero:'Policial',

                          }
                      },
                      {
                          label: 'O Poderoso Chefão',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://cps-static.rovicorp.com/2/Open/The_Movie_DB_2462/Program/4893672/4893672_PA_O-poderoso.jpg',
                              filme:'O Poderoso Chefão',
                              genero:'Policial',

                          }
                      },
                      {
                          label: 'Scarface',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://cps-static.rovicorp.com/2/Open/NBC%20Universal%20Distribution/Movies/Scarface/_2by3/_derived_jpg_q90_584x800_m0/Scarface-Poster.jpg',
                              filme:'Scarface',
                              genero:'Policial',

                          }
                      },
                      {
                          label: 'Sin City',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://cps-static.rovicorp.com/2/Open/Germany/RTL%20Media%20Group/VOX/Sin%20City/_2by3/sin-city-poster-art.jpg',
                              filme:'Sin City',
                              genero:'Policial',

                          }
                      },
                      {
                          label: 'Taxi Driver',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://th.bing.com/th/id/AMMS_14ad2822a5ea82d4f7126ed106e91ba7?pid=ImgDet&rs=1',
                              filme:'Taxi Driver',
                              genero:'Policial',

                          }
                      },
                      {
                          label: 'Good Fellas',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg',
                              filme:'Good Fellas',
                              genero:'Policial',

                          }
                      },
                      {
                          label: 'Laranja Mecânica',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://cps-static.rovicorp.com/2/Open/Warner%20Home%20Video/A%20Clockwork%20Orange/_2by3/_derived_jpg_q90_584x800_m0/AClockworkOrange-Poster.jpg',
                              filme:'Laranja Mecânica',
                              genero:'Policial',

                          }
                      },
                      {
                          label: 'Infiltrado na Klan',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://image.tmdb.org/t/p/original/iqP3m9EdoDvSzi6lPMmpjOX6vLY.jpg',
                              filme:'Infiltrado na Klan',
                              genero:'Policial',

                          }
                      },
                      {
                          label: 'O Abutre',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://www.cafecomfilme.com.br/media/k2/items/cache/62215c26e16ac37d25052e6a5e5d0b23_M.jpg?t=20141218_231504',
                              filme:'O Abutre',
                              genero:'Policial',

                          }
                      },
                        {
                          label: 'Baby Driver',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://upload.wikimedia.org/wikipedia/pt/thumb/7/78/Baby_Driver_poster.png/230px-Baby_Driver_poster.png',
                              filme:'Baby Driver',
                              genero:'Policial',

                          }
                      },


                  ],



                },

                //Fantasia
                {

                  label: 'Fantásia',
                  routerLink: 'genero',
                  queryParams: {
                      url: 'https://th.bing.com/th/id/R.bf02457049f6b231e50443cad8ab59e6?rik=kxaz4XN1ZpPLQw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-zS1tESkrh-A%2fUop5Ip62MnI%2fAAAAAAAABEA%2frdyfFdV6sD4%2fs1600%2fo-senhor-dos-aneis-sociedade-do-anel_CAPA.jpg&ehk=I%2fogUhLI2VZleHMIlK8s10%2bmb%2bPqgCt3wiY34XxScdI%3d&risl=&pid=ImgRaw&r=0',
                      genero:'Fantásia',
                      filme:''
                  },

                  items: [
                      {
                          label: 'O Mágico de Oz',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/93/94/10/20287529.jpg',
                              filme:'O Mágico de Oz',
                              genero:'Fantásia',
                          }
                      },
                      {
                          label: 'Senhor dos Anéis',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://th.bing.com/th/id/R.bf02457049f6b231e50443cad8ab59e6?rik=kxaz4XN1ZpPLQw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-zS1tESkrh-A%2fUop5Ip62MnI%2fAAAAAAAABEA%2frdyfFdV6sD4%2fs1600%2fo-senhor-dos-aneis-sociedade-do-anel_CAPA.jpg&ehk=I%2fogUhLI2VZleHMIlK8s10%2bmb%2bPqgCt3wiY34XxScdI%3d&risl=&pid=ImgRaw&r=0',
                              filme:'Senhor dos Anéis',
                              genero:'Fantásia',
                          }
                      },
                      {
                          label: 'Homem-Aranha',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img2.acsta.net/c_310_420/pictures/bzp/01/29007.jpg',
                              filme:'Homem-Aranha',
                              genero:'Fantásia',
                          }
                      },
                      {
                          label: 'O Grinch',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/89/69/60/20395922.jpg',
                              filme:'O Grinch',
                              genero:'Fantásia',
                          }
                      },
                      {
                          label: 'Vingadores',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/89/43/82/20052140.jpg',
                              filme:'Vingadores',
                              genero:'Fantásia',
                          }
                      },
                      {
                          label: 'Batman',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/96/03/40/20440821.jpg',
                              filme:'Batman',
                              genero:'Fantásia',
                          }
                      },
                      {
                          label: 'Conan, O Barbáro',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/95/80/79/20428505.jpg',
                              filme:'Conan, O Barbáro',
                              genero:'Fantásia',
                          }
                      },
                      {
                          label: 'Eragon',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/04/51/19871430.jpg',
                              filme:'Eragon',
                              genero:'Fantásia',
                          }
                      },
                      {
                          label: 'Motoqueira Fantasma',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/90/84/14/20115747.jpg',
                              filme:'Motoqueira Fantasma',
                              genero:'Fantásia',
                          }
                      },
                        {
                          label: 'Hancock',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/05/36/19871544.jpg',
                              filme:'Hancock',
                              genero:'Fantásia',
                          }
                      },


                  ],



                },

                //Ficção Cientifíca
                {

                  label: 'Ficção Cientifíca',
                  routerLink: 'genero',
                  queryParams: {
                      url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/95/62/20122008.jpg',
                      genero:'Ficção Cientifíca',
                      filme:''
                  },

                  items: [
                      {
                          label: ' Tenet',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/pictures/20/05/19/20/45/1889845.jpg',
                              filme:' Tenet',
                              genero:'Ficção Cientifíca',

                          }
                      },
                      {
                          label: 'Blade Runner',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/15/13/20132048.jpg',
                              filme:'Blade Runner',
                              genero:'Ficção Cientifíca',

                          }
                      },
                      {
                          label: 'De Volta Para o Futuro',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/95/62/20122008.jpg',
                              filme:'De Volta Para o Futuro',
                              genero:'Ficção Cientifíca',

                          }
                      },
                      {
                          label: 'Tron - O Legado',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/31/25/19874200.jpg',
                              filme:'Tron - O Legado',
                              genero:'Ficção Cientifíca',

                          }
                      },
                      {
                          label: 'Grávidade',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/pictures/210/232/21023259_20130729194021309.jpg',
                              filme:'Grávidade',
                              genero:'Ficção Cientifíca',

                          }
                      },
                      {
                          label: 'Alita',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/pictures/19/01/31/11/55/2714336.jpg',
                              filme:'Alita',
                              genero:'Ficção Cientifíca',

                          }
                      },
                      {
                          label: 'Avatar',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/30/40/20028676.jpg',
                              filme:'Avatar',
                              genero:'Ficção Cientifíca',

                          }
                      },
                      {
                          label: 'Star Wars IV',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/98/26/20172772.jpg',
                              filme:'Star Wars IV',
                              genero:'Ficção Cientifíca',

                          }
                      },
                      {
                          label: 'Star Trek',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/90/69/66/20108900.jpg',
                              filme:'Star Trek',
                              genero:'Ficção Cientifíca',

                          }
                      },
                        {
                          label: 'Duna',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/pictures/21/09/29/20/10/5897145.jpg',
                              filme:'Duna',
                              genero:'Ficção Cientifíca',

                          }
                      },


                  ],



                },

                //Romance
                {

                  label: 'Romance',
                  routerLink: 'genero',
                  queryParams: {
                      url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/89/56/94/20055685.jpg',
                      genero:'Romance',
                      filme:''
                  },

                  items: [
                      {
                          label: ' La La Land',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/pictures/17/01/24/17/13/228823.jpg',
                              filme:' La La Land',
                              genero:'Romance',

                          }
                      },
                      {
                          label: 'Ela',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/pictures/13/12/19/22/18/242683.jpg',
                              filme:'Ela',
                              genero:'Romance',

                          }
                      },
                      {
                          label: 'A Forma da Água',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/pictures/17/11/28/18/40/3044833.jpg',
                              filme:'A Forma da Água',
                              genero:'Romance',

                          }
                      },
                      {
                          label: 'Titanic',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/89/56/94/20055685.jpg',
                              filme:'Titanic',
                              genero:'Romance',

                          }
                      },
                      {
                          label: 'Biultiful',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/34/38/19874520.jpg',
                              filme:'Biultiful',
                              genero:'Romance',

                          }
                      },
                      {
                          label: 'Forrest Gump',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/30/21/19874092.jpg',
                              filme:'Forrest Gump',
                              genero:'Romance',

                          }
                      },
                      {
                          label: 'Antes do Amanhecer',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/91/22/16/20135213.jpg',
                              filme:'Antes do Amanhecer',
                              genero:'Romance',

                          }
                      },
                      {
                          label: 'Questão de Tempo',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img2.acsta.net/c_310_420/pictures/210/530/21053062_20131025204305591.jpg',
                              filme:'Questão de Tempo',
                              genero:'Romance',

                          }
                      },
                      {
                          label: 'Ghost',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/93/30/62/20248553.jpg',
                              filme:'Ghost',
                              genero:'Romance',

                          }
                      },
                        {
                          label: 'Sabrina',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/19/77/19873006.jpg',
                              filme:'Sabrina',
                              genero:'Romance',

                          }
                      },


                  ],



                },

                //Terror
                {

                  label: 'Terror',
                  routerLink: 'genero',
                  queryParams: {
                      url: 'https://br.web.img3.acsta.net/c_310_420/pictures/18/09/05/17/21/5348044.jpg',
                      genero:'Terror',
                      filme:''
                  },

                  items: [
                      {
                          label: ' O Iluminado',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/pictures/14/10/10/19/21/152595.jpg',
                              filme:' O Iluminado',
                              genero:'Terror',

                          }
                      },
                      {
                          label: 'Hallowen',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/pictures/18/09/05/17/21/5348044.jpg',
                              filme:'Hallowen',
                              genero:'Terror',

                          }
                      },
                      {
                          label: 'Psicopata Americano',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/74/81/20111330.jpg',
                              filme:'Psicopata Americano',
                              genero:'Terror',

                          }
                      },
                      {
                          label: 'Sexta-feira 13',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/pictures/15/03/10/19/40/135848.jpg',
                              filme:'Sexta-feira 13',
                              genero:'Terror',

                          }
                      },
                      {
                          label: 'Doutor Sono',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/pictures/19/11/06/00/16/1581276.jpg',
                              filme:'Doutor Sono',
                              genero:'Terror',

                          }
                      },
                      {
                          label: 'Maligno',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img2.acsta.net/c_310_420/pictures/19/01/31/20/19/2899368.jpg',
                              filme:'Maligno',
                              genero:'Terror',

                          }
                      },
                      {
                          label: 'O Farol',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/pictures/19/12/03/16/59/4821553.jpg',
                              filme:'O Farol',
                              genero:'Terror',

                          }
                      },
                      {
                          label: 'Nós',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/pictures/19/02/07/14/16/5034340.jpg',
                              filme:'Nós',
                              genero:'Terror',

                          }
                      },
                      {
                          label: 'Hereditário',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img2.acsta.net/c_310_420/pictures/18/06/14/13/11/1751062.jpg',
                              filme:'Hereditário',
                              genero:'Terror',

                          }
                      },
                        {
                          label: 'Corra!',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/pictures/17/04/19/21/08/577190.jpg',
                              filme:'Corra!',
                              genero:'Terror',

                          }
                      },


                  ],



                },

                //Suspense
                {

                  label: 'Suspense',
                  routerLink: 'genero',
                  queryParams: {
                      url: 'https://br.web.img3.acsta.net/c_310_420/pictures/17/08/11/20/15/167783.jpg',
                      genero:'Suspense',
                      filme:''
                  },

                  items: [
                      {
                          label: ' Seven',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img2.acsta.net/c_310_420/pictures/210/124/21012465_2013061319170245.jpg',
                              filme:' Seven',
                              genero:'Suspense',

                          }
                      },
                      {
                          label: 'Ilha do Medo',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/30/04/20028671.jpg',
                              filme:'Ilha do Medo',
                              genero:'Suspense',

                          }
                      },
                      {
                          label: 'Zodíaco',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/22/27/19873266.jpg',
                              filme:'Zodíaco',
                              genero:'Suspense',

                          }
                      },
                      {
                          label: 'Aminésia',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/pictures/14/05/22/20/00/155413.jpg',
                              filme:'Aminésia',
                              genero:'Suspense',

                          }
                      },
                      {
                          label: 'Mãe!',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/pictures/17/08/11/20/15/167783.jpg',
                              filme:'Mãe!',
                              genero:'Suspense',

                          }
                      },
                      {
                          label: 'Sexto Sentido',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/53/94/20101506.jpg',
                              filme:'Sexto Sentido',
                              genero:'Suspense',

                          }
                      },
                      {
                          label: 'Psicose',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/64/70/20210570.jpg',
                              filme:'Psicose',
                              genero:'Suspense',

                          }
                      },
                      {
                          label: 'Corpo Fechado',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/26/09/19873656.jpg',
                              filme:'Corpo Fechado',
                              genero:'Suspense',

                          }
                      },
                      {
                          label: 'Cidadão Kane',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/pictures/bzp/01/857.jpg',
                              filme:'Cidadão Kane',
                              genero:'Suspense',

                          }
                      },
                        {
                          label: 'Identidade',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/08/70/19871879.jpg',
                              filme:'Identidade',
                              genero:'Suspense',

                          }
                      },


                  ],



                },
                
                //Western
                {

                  label: 'Western',
                  routerLink: 'genero',
                  queryParams: {
                      url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/08/20/19871829.jpg',
                      genero:'Western',
                      filme:'Hombre'
                  },

                  items: [
                      {
                          label: 'Django Livre',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/07/53/20391069.jpg',
                              filme:'Django Livre',
                              genero:'Western',

                          }
                      },
                      {
                          label: 'Sol Vermelho',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/pictures/18/09/24/17/58/3179947.jpg',
                              filme:'Sol Vermelho',
                              genero:'Western',

                          }
                      },
                      {
                          label: 'Os Oito Odiados',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/pictures/16/01/07/20/59/207268.jpg',
                              filme:'Os Oito Odiados',
                              genero:'Western',

                          }
                      },
                      {
                          label: 'Os Improváveis',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/00/46/20125862.jpg',
                              filme:'Os Improváveis',
                              genero:'Western',

                          }
                      },
                      {
                          label: 'Matar ou Morrer',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/10/20/19872029.jpg',
                              filme:'Matar ou Morrer',
                              genero:'Western',

                          }
                      },
                      {
                          label: 'Consciências Mortas',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/94/88/56/20366893.jpg',
                              filme:'Consciências Mortas',
                              genero:'Western',

                          }
                      },
                      {
                          label: 'Flechas de Fogo',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://media.fstatic.com/nRmjQw9-D1zMLjmZknTI0L_JSlA=/210x312/smart/media/movies/covers/2016/03/flechas-de-fogo_t18479_n5Ckaay.jpg',
                              filme:'Flechas de Fogo',
                              genero:'Western',

                          }
                      },
                      {
                          label: 'Sangue de Heróis',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/pictures/210/058/21005867_20130514215930519.jpg',
                              filme:'Sangue de Heróis',
                              genero:'Western',

                          }
                      },
                      {
                          label: 'O Matador',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/pictures/16/03/04/16/23/584601.jpg',
                              filme:'O Matador',
                              genero:'Western',

                          }
                      },
                        {
                          label: 'Hombre',
                          icon: 'pi pi-fw pi-check',
                          routerLink: 'exibicao',
                          queryParams: {
                              url: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/08/20/19871829.jpg',
                              filme:'Hombre',
                              genero:'Western',

                          }
                      },


                  ],



                },

        ]
    }
}

