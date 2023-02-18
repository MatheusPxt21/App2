import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  usuarios: any = [];
  limit: number = 10;
  start: number = 0;
  nome: string = "";

  public data = ['ABC', 'dec', 'obs', 'teste', 'adsavasfad', 'ABC', 'dec', 'obs', 'teste', 'adsavasfad', 'ABC', 'dec', 'obs', 'teste', 'adsavasfad'];
  public results = [...this.data];


  constructor(private route: Router, private provider: Post) { }

  ngOnInit() {
  }


  ionViewWillEnter(){
    this.usuarios = [];
    this.start = 0;
    this.carregar();
  }

  addUsuario()
  {
    this.route.navigate(['/add-usuario']);
  }


  carregar(){
    /*
    return new Promise(resolve => {
      this.usuarios = [];
      let dados = {
        requisicao : 'listar',
        nome : this.nome,
        limit : this.limit,
        start : this.start
        };

        this.provider.dadosApi(dados, 'api.php').subscribe(data => {

        if(data['result'] == '0') {
          this.ionViewWillEnter();
        }else{
          for(let usuario of data['result']){
            this.usuarios.push(usuario);

          }
        }

         resolve(true);

        });
    });
    */
  }

  handleChange(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
  }

  /*
  editar(id, nome, usuario, senha, nivel){
    this.route.navigate(['/add-usuario/' + id + '/' + nome + '/' + usuario + '/' + senha + '/' + nivel]);
  }

  mostrar(id, nome, usuario, senha, nivel){
    this.route.navigate(['/mostrar-usuario/' + id + '/' + nome + '/' + usuario + '/' + senha + '/' + nivel]);
  }
  */

  mostrarUsuario(){
    this.route.navigate(['/mostrar-usuario'])
  }
}



