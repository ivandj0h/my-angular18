import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  loading: boolean = false;
  numberOne: number = 5;
  numberTwo: number = 10;
  sumResult: number | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  load() {
    this.loading = true;

    setTimeout(() => {
      this.sumResult = this.numberOne + this.numberTwo;
      console.log('Sum:', this.sumResult);
      this.loading = false;
      this.cdr.detectChanges(); 
    }, 2000); 
  }
}
