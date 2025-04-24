import { Gif } from "../interfaces/gif.interfaces";
import { GiphyItem } from "../interfaces/giphy.interfaces";

export class GifMapper {
  static mapGiphyItemToGif(giphyItem: GiphyItem): Gif {
    return{
      id: giphyItem.id,
      title: giphyItem.title,
      url: giphyItem.images.original.url,
    }
}
static mapGiphyItemsToGifs(items: GiphyItem):Gif[] {
  return items.map(this.mapGiphyItemToGif);
}
}
