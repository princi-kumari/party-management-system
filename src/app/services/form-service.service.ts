import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor(private http: HttpClient) {}

  submitForm(formData: any[]): Observable<any> {
    // Replace with actual API endpoint or desired logic to handle form submission
    console.log('Form data:', formData);
    // Example: return this.http.post<any>('http://your-api-endpoint', formData);
    return new Observable<any>(observer => {
      observer.next({ status: 'success' }); // Simulated response
      observer.complete();
    });
  }
}
