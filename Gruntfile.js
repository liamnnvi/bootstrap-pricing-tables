module.exports = function(grunt) {

  // grunt fire!
  grunt.initConfig({
    // watch the changes i make in my css.
    watch: {
      css: {
        files: ['style.css'],
        tasks: ['cssmin']
      }
    },
    // minify my css. 
    cssmin: {
      options: {
        banner: '/*\nbootstrap pricing tables v1.0.0\nlfamedia.com 2014\n*/'
      },          
    minify: {
      expand: true,
      cwd: '',
      src: ['*.css', '!*.min.css'],
      dest: '',
      ext: '.min.css'
    }
  }
  });

  // load the plugins.
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // default task.
  grunt.registerTask('default', ['cssmin']);

};
