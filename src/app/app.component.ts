import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'verify-tours-available';

  constructor(
    private router: Router,
  ){}

  ngOnInit(): void {
    this.router.navigate(['/verify-tours']);
  }
}
