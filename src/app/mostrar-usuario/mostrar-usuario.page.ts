import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-mostrar-usuario',
  templateUrl: './mostrar-usuario.page.html',
  styleUrls: ['./mostrar-usuario.page.scss'],
})
export class MostrarUsuarioPage implements OnInit {

  
  nome: string = "";
  usuario: string = "";
  senha: string = "";
  nivel: string = "";
  id: string = "";

  constructor(private actRoute: ActivatedRoute, private route: Router, private provider: Post) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data:any)=>{
      this.id = data.id;
      this.nome = data.nome;
      this.usuario = data.usuario;
      this.senha = data.senha;
      this.nivel = data.nivel;

    });
  }

  Usuario()
  {
    this.route.navigate(['/usuarios']);
  }

}
