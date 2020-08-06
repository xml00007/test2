/**
 * Created by Arthur on 2017/7/14.
 */

/*File: Gruntfile.js*/
module.exports = function(grunt) {

  grunt.initConfig({
    start_mockserver: {
      start: {
        options: {
          serverPort: 1080,
          proxyPort: 1090
        }
      }
    },
    stop_mockserver: {
      stop: {
      }
    }
  });

  grunt.loadNpmTasks('mockserver-grunt');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['start_mockserver']);
  grunt.registerTask('stop', ['stop_mockserver']);
  grunt.registerTask('start', ['start_mockserver']);

};