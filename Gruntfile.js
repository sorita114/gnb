module.exports = function ( grunt ) {
  grunt.initConfig({
      pkg : grunt.file.readJSON( 'package.json' ),
      coffee : {
        complied : {
            expand : true,
            flatten : true,
            cwd : '<%= pkg.paths.dist %>',
            src : ['*.coffee'],
            dest : '<%= pkg.paths.dist %>',
            ext : '.js'
            }
        },
        jsbeautifier : {
            files : [ '<%= pkg.paths.dist %>/*.js' ],
            options : {
                js : {
                    indentSize : 4
                }
            }
        }
    });

    grunt.loadNpmTasks( 'grunt-contrib-coffee' );
    grunt.loadNpmTasks( 'grunt-jsbeautifier' );

    grunt.registerTask( 'build' , ['coffee', 'jsbeautifier' ] );
    grunt.registerTask( 'compile' , ['coffee', 'jsbeautifier'] ); //build all, minify, concat
};
