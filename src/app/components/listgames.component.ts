import { Component, OnInit } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'app-listgames',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listgames.component.html',
  styleUrls: ['./listgames.component.scss']
})
export class ListgamesComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
