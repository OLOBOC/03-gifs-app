import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { environment } from "environments/environment";
import { __param } from "tslib";
import { GiphyResponse } from "../interfaces/giphy.interfaces";
import { Gif } from "../interfaces/gif.interfaces";
import { GifMapper } from "../mapper/gif.mapper";
@Injectable({
  providedIn: "root",
})
export class GifsService {

  private http = inject(HttpClient);
  trendigGifs = signal<Gif[]>([]);

  constructor() {
    this.loadTrendingGifs();
  }


  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/trending`,
      //<GiphyResponse> es una forma de decirle a typescript que la respuesta es de tipo GiphyResponse
      {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,

        },
      }).subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemToGif(resp.data);
        console.log(gifs);
      });

}

}
