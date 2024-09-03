import { TagModel } from "./tag.model";

export interface ArticleModel {
  id: number;
  title: string;
  summary: string;
  img: string;
  img_alt:string;
  caption:string;
  url: string;
  tags: Array<TagModel>;
}