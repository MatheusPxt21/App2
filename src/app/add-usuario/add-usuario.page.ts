import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  Usuario()
  {
    this.route.navigate(['/usuarios']);
  }

}
