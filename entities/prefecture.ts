// This class is missing important decorators! Add the missing decorators to properly declare the entity.
//使っているtypeormのファンクションを以下に列挙
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Prefecture } from "./prefecure";

// export class Author {
//   id: number;
//   name: string;
// }
//テーブル名をauthorsにする
@Entity({ name: "Prefectures" /* Relation name in database */ })
export class Author {
  //メインキー作る
  @PrimaryGeneratedColumn()
  public id: number;

  //nameのカラム作る
  @Column()
  public name: string;

  //yusuke氏の助言、ファイスブックのイベントの表題はいっぱいあるが人は限られている、だから人に対してイベントは多いからOneToManyとなる
  @OneToMany(
    type => Quote,
    quote => quote.author
  )
  public quotes: Quote[];
}
// export default Author;
