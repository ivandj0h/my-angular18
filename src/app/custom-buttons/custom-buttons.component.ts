import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-custom-buttons',
  standalone: true,
  imports: [CommonModule, ButtonModule, RippleModule],
  templateUrl: './custom-buttons.component.html',
  styleUrls: ['./custom-buttons.component.css']
})
export class CustomButtonsComponent implements OnInit {
  numberOne: number = 5;
  numberTwo: number = 10;
  sumResult: number | null = null;

  constructor() {}

  ngOnInit() {}

  submit() {
    this.sumResult = this.numberOne + this.numberTwo;
    console.log('Sum:', this.sumResult);
  }
}
