import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { resolve } from 'dns';
import { Post } from 'src/services/post';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {

  id: string = "";
  nome: string = "";
  usuario: string = "";
  senha: string = "";
  nivel: string = "";
  constructor(private actRoute: ActivatedRoute, private route: Router, private provider: Post, private toastController: ToastController) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any)=>{
      this.id = data.id;
      this.nome = data.nome;
      this.usuario = data.usuario;
      this.senha = data.senha;
      this.nivel = data.nivel;
    });
  }


  async ToastMensagemSalvar() {
    const toast = await this.toastController.create({
      message: 'Saved Successfully!',
      duration: 2000,
      position: 'bottom',
      icon: 'checkmark-circle',
      color: 'primary'
    });

    await toast.present();
  }


  Usuario()
  {
    this.route.navigate(['/usuarios']);
  }

  cadastrar()
  {
    return new Promise(resolve => {
      let dados = {
        requisicao: 'add',
        nome : this.nome,
        usuario : this.usuario,
        senha : this.senha,
        nivel : this.nivel,
      };

      this.provider.dadosApi(dados, 'api.php').subscribe(data => {
        this.route.navigate(['/usuarios']);
        this.ToastMensagemSalvar();

      });

    });
  }

  editar()
  {
    return new Promise(resolve => {
      let dados = {
        requisicao: 'editar',
        nome : this.nome,
        usuario : this.usuario,
        senha : this.senha,
        nivel : this.nivel,
        id: this.id,
      };

      this.provider.dadosApi(dados, 'api.php').subscribe(data => {
        this.route.navigate(['/usuarios']);
        this.ToastMensagemSalvar();

      });

    });
  }

  remover()
  {

  }
}
