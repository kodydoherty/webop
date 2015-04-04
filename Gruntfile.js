
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                'js/*.js'
                ],
                dest: 'js/build/production.js',
            }

        },

        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg}'],
                    dest: 'img/build/'
                }]
            },

                  // single: {
                  //   cwd: 'views/images/',
                  //   files: 'images/modules/img.png': 'images/modules/img.png',
                  //   dest: 'images/modules'
                  // }
        },

        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: 'css',
              src: ['*.css', '!*.min.css'],
              dest: 'css/build/',
              ext: '.min.css'
          }]
      }
  },
//   ngrok: {
//     options: {
//         server: {
//           proto: 'tcp',
//           port: 50010,
//           remotePort: 50010,
//           subdomain: 'mytestapp',
//           onConnected: function(url) {
//             grunt.log.writeln('Local server exposed to %s!', url);
//          }
//          },
//     },
// },

watch: {
    options: {
        livereload: true,
    },
    scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
            spawn: false,
        },
    }
}
});

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-cssmin');
// grunt.loadNpmTasks('grunt-ngrok');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['concat', 'uglify','imagemin','cssmin']);
};

