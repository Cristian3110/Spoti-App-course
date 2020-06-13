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
        'Bearer BQD9ByBesFeJ3t_ys62SwrwqbPzfaxHcdPV9LI3GO8NSJAdaDg2PuvKGlZsyBiGcyaIRFl0Rvoh4ib-dqB4',
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
