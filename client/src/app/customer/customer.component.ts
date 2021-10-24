import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from 'src/app/services/customer.service';
import * as _ from 'lodash';
import { NgForm } from '@angular/forms';
import { Customer } from '../models/customer';
import { ToastrService } from 'ngx-toastr';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

interface OrderItems {
  name: string;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  options: FormGroup;
  searchTerm: any;
  orderByName: any;
  colorControl = new FormControl('primary');

  customer: Customer = {
    id: '',
    name: '',
    email: '',
    address: '',
    phone: '',
    status: 'active',
    customerId: '',
  };

  orderItems: OrderItems[] = [{ name: 'ASC' }, { name: 'DESC' }];

  @ViewChild('customerForm', { static: false })
  customerForm!: NgForm;

  customerData!: Customer;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'address',
    'phone',
    'status',
    'actions',
  ];
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  isEditMode = false;

  constructor(private customerService: CustomerService, fb: FormBuilder, private toastr: ToastrService) {
    this.options = fb.group({
      color: this.colorControl,
    });
    this.customerData = {} as Customer;
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllCustomers();
    
  }

  getAllCustomers() {
    this.customerService.getCustomer().subscribe((response: any) => {
      this.dataSource.data = response.data;
    });
  }

  editCustomer(element: any) {
    this.customerData = _.cloneDeep(element);
    this.customer = this.customerData;
  }

  deleteCustomer(id: string) {
    this.customerService.deleteCustomer(id).subscribe((response: any) => {
      this.getAllCustomers();
    });
  }

  saveCustomer(): void {

    if(!this.customer.name || !this.customer.email || !this.customer.address || !this.customer.phone  ){
      this.toastr.warning('Validation Error!');
    } else {
      var data = {
        name: this.customer.name,
        email: this.customer.email,
        address: this.customer.address,
        phone: this.customer.phone,
        customerId: '',
      };
  
      if (this.customer.id) {
        data.customerId = this.customer.id;
        this.customerService.updateCustomer(data).subscribe(
          (response) => {
            this.getAllCustomers();
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        this.customerService.createCustomer(data).subscribe(
          (response) => {
            this.getAllCustomers();
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
    
  }

  updateCustomerStatus(element: any) {
    this.customerData = _.cloneDeep(element);
    let data = {
      customerId: this.customerData.id,
      status: this.customerData.status == 'active' ? 'inactive' : 'active',
    };
    this.customerService.updateCustomerStatus(data).subscribe(
      (response) => {
        this.getAllCustomers();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  searchCustomer(): void {
    let orderByName = this.orderByName ? this.orderByName : 'ASC';
    let searchTerm = this.searchTerm ? this.searchTerm : '';
    let data = { searchTerm: searchTerm, orderByName: orderByName };
    this.customerService.searchCustomer(data).subscribe((response: any) => {
      this.dataSource.data = response.data;
    });
  }
}
