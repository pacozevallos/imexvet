import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { MenuMobileComponent } from '../menu-mobile/menu-mobile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links;

  constructor(
    private ds: DataService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.links = this.ds.links;
  }

  openModalMenuMobile() {
    const dialogRef = this.dialog.open(MenuMobileComponent, {
      panelClass: 'modalFullScreen',
    });
    dialogRef.afterClosed().subscribe();
  }

}
