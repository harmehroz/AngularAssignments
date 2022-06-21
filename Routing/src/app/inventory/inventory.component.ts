import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private router:Router) { }

  onBack(): void {

     this.router.navigate(['/Product']);

  }
  ngOnInit(): void {
      
  }


}
