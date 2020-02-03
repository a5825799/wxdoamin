import { HTTP } from "../utils/http.js"

class TestModel extends HTTP {
  findTestList (){
    return this.request({"url":"/test"})
  }
}

export {TestModel}