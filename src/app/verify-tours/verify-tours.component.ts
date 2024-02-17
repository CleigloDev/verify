import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'verify-tours',
  template: `
    {{'test'}}
  `,
  styleUrls: ['./verify-tours.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerifyToursComponent implements OnInit {
  
  constructor(){}

  ngOnInit(): void {
      console.log('ciao');
  }
}
