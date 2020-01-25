import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  res: HttpResponse<any>;
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/octet-stream') };

  constructor(private http: HttpClient) { }

  getFoodCallRecords(): Observable<any> {
    console.log("http://localhost:8080/app/api/donor/foodcallrecords");
    return this.http.get("http://localhost:8080/app/api/donor/foodcallrecords");
  }

  saveDonorFoodDetails(foodDetails: any): Observable<any> {
    console.log("http://localhost:8080/app/api/donor/newdonorform");
    return this.http.post("http://localhost:8080/app/api/donor/newdonorform", foodDetails);
  }

  saveVolunteer(volunteer: any): Observable<any> {
    console.log("http://localhost:8080/app/api/volunteer", volunteer);
    return this.http.post("http://localhost:8080/app/api/volunteer", volunteer);
  }

  getDonorByID(id: number): Observable<any> {
    console.log("http://localhost:8080/app/api/donor/" + id);
    return this.http.get("http://localhost:8080/app/api/donor/" + id);
  }

  getDonors(): Observable<any> {
    console.log("http://localhost:8080/app/api/donor");
    return this.http.get("http://localhost:8080/app/api/donor");
  }

  getSignature(): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/octet-stream'

    })

    return this.http.get("http://localhost:8080/app/api/donor/feedback", { headers: headers,responseType:'text' });
  }

  getVolunteers(): Observable<any> {
    console.log("http://localhost:8080/app/api/volunteer");
    return this.http.get("http://localhost:8080/app/api/volunteer");
  }

  saveFoodcollectionDetails(collection: any): Observable<any> {
    console.log("http://localhost:8080/app/api/collection");
    return this.http.post("http://localhost:8080/app/api/collection", collection);
  }

  getCollectionByDonaorID(id: number): Observable<any> {
    console.log("http://localhost:8080/app/api/collection/" + id);
    return this.http.get("http://localhost:8080/app/api/collection/" + id);
  }

}
