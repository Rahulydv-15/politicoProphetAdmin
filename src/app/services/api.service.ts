import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsersInfo(): Observable<any> {
    return this.http.get('https://politicoprophetbackend.onrender.com/api/getUserInfo');
  }
  getArticles(): Observable<any> {
    return this.http.get('https://politicoprophetbackend.onrender.com/api/articles');
  }
  composeArticle(title: string, body: string, hindiBody: string): Observable<any> {
    const url = `https://politicoprophetbackend.onrender.com/api/compose`;
    const article = {
      title: title,
      body: body,
      hindiBody: hindiBody
    };
    return this.http.post(url, article);
  }
  deleteArticle(title: string): Observable<any> {
    const url = `https://politicoprophetbackend.onrender.com/api/deleteArticle`;
    const article = {
      title: title
    };
    return this.http.post(url, article);
  }
}
