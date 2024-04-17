import { Component, OnInit } from '@angular/core';
import { AdminStatusService } from 'src/app/services/AdminStatus/admin-status.service';
import { AccountService } from 'src/app/services/login/account.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit{


	constructor(private adminServices: AdminStatusService) {	 

	}

ngOnInit(): void {
	
}


}
