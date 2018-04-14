import dbConnect from './dbConnect';
import * as config from './config';
import Model from './Models';

dbConnect(null, config.databaseConfig).then(function(data) {
  console.log('链接成功', data);
  // Model.linuxDoc.create({
  //   title: '信明良',
  // });
}).catch(function(err) {
  console.log(22222, err);
});
export default Model;
