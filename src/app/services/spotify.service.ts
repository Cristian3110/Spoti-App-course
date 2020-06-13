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
        'Bearer BQCHAqlQZde6BT6ew_eAzTuHZkqV7X4QXxNfqFsOlfDm5ezjv1asKb9kvp8Orp3xYp-46RK-RivYTfeG-zQ',
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
  getArtista(termino: string) {
    const headers = new HttpHeaders({
      // aqui voy a  especificar todos los token de la API
      Authorization:
        'Bearer BQCHAqlQZde6BT6ew_eAzTuHZkqV7X4QXxNfqFsOlfDm5ezjv1asKb9kvp8Orp3xYp-46RK-RivYTfeG-zQ',
    });

    return this.http.get(
      `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,
      {
        headers,
      }
    );
  }
}
