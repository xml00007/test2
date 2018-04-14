/**
 * Created by Arthur on 2017/6/25.
 */

// export default function() {
//   return {b:2}
// }

class OpenApi {
  constructor(a) {
    this.a = a;
  }

  init() {
    console.log(this.a);
  }

  add(b) {
    console.log(this.a + b);
  }
}

const openapi = new OpenApi(2);
openapi.init();
export default openapi;