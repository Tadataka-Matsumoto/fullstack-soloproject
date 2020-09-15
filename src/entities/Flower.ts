// This class is missing important decorators! Add the missing decorators to properly declare the entity.
//使っているtypeormのファンクションを以下に列挙
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Prefecture } from "./Prefecture";

// export class Flower {
//   id: number;
//   name: string;
// }
//テーブル名をflowersにする
@Entity({ name: "flowers" /* Relation name in database */ })
export class Flower {
  //メインキー作る
  @PrimaryGeneratedColumn()
  public id: number;

  //nameのカラム作る
  @Column()
  public name: string;

  //yusuke氏の助言、ファイスブックのイベントの表題はいっぱいあるが人は限られている、だから人に対してイベントは多いからOneToManyとなる
  @OneToMany(
    type => Prefecture,
    prefecture => prefecture.flower
  )
  public prefectures: Prefecture[];
}
// export default Flower;
