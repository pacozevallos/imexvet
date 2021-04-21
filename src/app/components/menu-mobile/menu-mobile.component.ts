import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent implements OnInit {

  links: any;

  constructor(
    private ds: DataService,
    public dialogRef: MatDialogRef<MenuMobileComponent>,
    ) { }

  ngOnInit(): void {
    this.links = this.ds.links;
  }

  cancelar() {
    this.dialogRef.close();
  }


}
