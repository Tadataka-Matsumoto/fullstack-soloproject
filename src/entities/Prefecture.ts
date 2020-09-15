import { Flower } from "./Flower";
//使っているtypeormのファンクション？を以下に示す。
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
// This class is missing important decorators! Add the missing decorators to properly declare the entity.

//テーブル名をPrefecturesにする
@Entity({ name: "prefectures" /* Relation name in database */ })
export class Prefecture {
  //メインキー作る
  @PrimaryGeneratedColumn()
  public id: number;

  //prefectureのカラム作る
  @Column()
  public prefecture: string;

  // Think about which relationship this represents.
  // flowersのidを追加
  @ManyToOne(
    type => Flower,
    flower => flower.prefectures
  )
  public flower: Flower;
}
