import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  addUsuario()
  {
    this.route.navigate(['/add-usuario']);
  }

}
