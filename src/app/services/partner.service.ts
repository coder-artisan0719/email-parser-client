import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Partner } from '../models/partner.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPartners(): Observable<Partner[]> {
    return this.http.get<Partner[]>(this.apiUrl);
  }
}