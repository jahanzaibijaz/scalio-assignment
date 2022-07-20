import { Component, OnInit,Input,SimpleChanges} from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Input() data: [] = [];
  getData: any;
  showTable: boolean=false;
  page=1;
  pageSize=9;
  collectionSize: number = 0;
  order: string = 'login';
  reverse: boolean = false;
  caseInsensitive: boolean = true;

  constructor(private orderPipe: OrderPipe) {
   }

  ngOnInit(): void {
  }
  ngOnChanges(changes : SimpleChanges){
    this.getData= changes.data.currentValue;
    this.showTable  = !changes.data.firstChange && changes.data.currentValue.length > 0 ? true : false
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
}
