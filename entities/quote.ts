import { Prefecture } from "./prefecture";
//使っているtypeormのファンクション？を以下に示す。
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
// This class is missing important decorators! Add the missing decorators to properly declare the entity.

//テーブル名をquotesにする
@Entity({ name: "flowers" /* Relation name in database */ })
export class Flower {
  //メインキー作る
  @PrimaryGeneratedColumn()
  public id: number;

  //quoteのカラム作る
  @Column()
  public quote: string;

  // Think about which relationship this represents.
  // authorsのidを追加
  @ManyToOne(
    type => Author,
    author => author.quotes
  )
  public author: Author;
}
