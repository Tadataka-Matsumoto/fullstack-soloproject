import "mocha";
import chai from "chai";
import chaiHttp from "chai-http";
import DatabaseConnectionManager from "../connection";
import { createServer } from "../server";

chai.use(chaiHttp);
chai.should();
const expect = chai.expect;

describe("GET /api", () => {
  let app;

  before(async () => {
    await DatabaseConnectionManager.connect();
    app = createServer();
  });

  describe("GET /api/prefectures without query params", () => {
    let request;

    beforeEach(() => {
      request = chai
        .request(app)
        .get("/api/prefectures")
        .set("Content-Type", "application/json");
    });

    it("should respond with JSON.", done => {
      request.end((_, res) => {
        res.should.be.json;
        done();
      });
    });

    it("should return status 200.", done => {
      request.end((_, res) => {
        res.status.should.equal(200);
        done();
      });
    });

    it('should have a "prefectures" property containing an array.', done => {
      request.end((_, res) => {
        const responseObject = JSON.parse(res.text);
        responseObject.should.have.a
          .property("prefectures")
          .that.is.an("array");
        done();
      });
    });

    it('should contain only prefectures with both "text" and an "flower".', done => {
      request.end((_, res) => {
        const { prefectures } = JSON.parse(res.text);
        for (const prefecture of prefectures) {
          expect(prefecture).to.be.an("object");
          expect(prefecture).to.have.property("prefecture"); //textからprefectureへ変更
          expect(prefecture).to.have.property("flower");
          expect(prefecture.prefecture).not.equal(""); //textからprefectureへ変更
          expect(prefecture.flower).should.not.equal("");
        }
        done();
      });
    });
  });

  describe("GET /api/prefectures with query params", () => {
    it("should allow an flowerName parameter with empty-value", done => {
      chai
        .request(app)
        .get("/api/flowers?flowerName=''") //flowerに変える
        .set("Content-Type", "application/json")
        .end((_, res) => {
          const { prefectures } = JSON.parse(res.text);
          prefectures.length.should.equal(0);
          done();
        });
    });
  });
});
