import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order} from '../../../../models/order.model';
import {OrderService} from '../../../../services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  public order: Order;

  @Input()
  set entry(order: Order){
    this.order = order;
  }

  @Output() remove: EventEmitter<number> = new EventEmitter<number>();

  constructor(private productService: OrderService) { }

  ngOnInit(): void {
  }


  delete(){
    if (!confirm('Esta seguro de realizar esta acción')) {
      return;
    }

    this.productService.delete(this.order.id)
      .subscribe(() => {
        this.remove.next(this.order.id);
      });
  }
}
