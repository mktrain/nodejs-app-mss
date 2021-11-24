const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: $ {{ secrets.SONAR_URL }},
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Sample',
	    'sonar.projectKey':'NodeJs',
	    'sonar.login': ${{ secrets.SONAR_TOKEN }},
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
