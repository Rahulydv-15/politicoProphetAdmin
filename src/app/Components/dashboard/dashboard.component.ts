import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
interface UserInfo {
  _id: string;
  ipAddress: string;
  latitude: string;
  longitude: string;
  createdAt: string;
}

interface UsersInfoResponse {
  totalCount: number;
  uniqueCount: number;
  deviceInfo: UserInfo[];
}
interface Article {
  _id: string;
  title: string;
  // Add more properties as necessary
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  usersInfo!: UsersInfoResponse;
  articles!: Article[];
  dataRecieved!: any;
  constructor(private apiService: ApiService, private router: Router) {}
  ngOnInit(): void {
    this.apiService.getUsersInfo().subscribe(
      (response) => {
        // Assign the retrieved users info to a variable
        this.usersInfo = response;

        // Call the second API after the first API response is received
        this.apiService.getArticles().subscribe(
          (response) => {
            // Assign the retrieved articles to a variable
            this.articles = response;
            this.dataRecieved = true;
          },
          (error) => {
            // Handle any errors that occur during the second API call
            this.router.navigate(['/error']);
          }
        );
      },
      (error) => {
        // Handle any errors that occur during the first API call
        this.router.navigate(['/error']);
      }
    );
  }
}
