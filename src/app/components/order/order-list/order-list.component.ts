import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../services/order.service';
import {Order} from '../../../models/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  public orders: Order[] = [];
  listFilter: string = '';

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getAll();
  }

  removeDeleteProduct(id:number):void{
    this.orders=this.orders.filter(x=>x.id!=id);
  }

  getAll():void{
    let request = this.orderService.getAll();

    request.subscribe((data) => {
      this.orders = data['body'];
    });
  }
}
