import { Component, OnInit, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'contador',
  templateUrl: './output-props.component.html',
  styleUrls: ['./output-props.component.css']
})
export class OutputPropsComponent implements OnInit {

  @Input() valor: number = 0;

  mudouValor = new EventEmitter();

  incrementa () {
    this.valor += 1;
    return this.valor;
    this.mudouValor.emit({novoValor: this.valor});
  }
  
  decrementa() {
    this.valor -= 1;
    return this.valor;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
