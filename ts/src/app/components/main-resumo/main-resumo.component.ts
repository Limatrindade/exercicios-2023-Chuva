import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-resumo',
  templateUrl: './main-resumo.component.html',
  styleUrls: ['./main-resumo.component.scss']
})
export class MainResumoComponent implements OnInit {
  containerVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleContainer() {
    this.containerVisible = !this.containerVisible;
  }

}
