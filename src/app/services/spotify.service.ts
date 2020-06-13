import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('spotify service listo');
  }

  getNewRelease() {
    const headers = new HttpHeaders({
      // aqui voy a  especificar todos los token de la API
      Authorization:
        'Bearer BQAkbOBufU73-oPTeZnMZ5wYhxDEYDR8T-FCSVGDBnw5E_uhmuPSYXIvdLmkm-IcvHKhuhCRdZCtIW6MUnc',
    });

    return this.http.get(
      'https://api.spotify.com/v1/browse/new-releases?limit=20',
      {
        headers,
      }
    );
    // .subscribe((data) => {
    //   console.log(data);
    // });
  }
}
