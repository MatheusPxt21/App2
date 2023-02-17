import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-usuario',
  templateUrl: './mostrar-usuario.page.html',
  styleUrls: ['./mostrar-usuario.page.scss'],
})
export class MostrarUsuarioPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  Usuario()
  {
    this.route.navigate(['/usuarios']);
  }

}
