pipeline {
    agent any

    stages {
        stage('build image back') {
            
            steps {
                sh 'echo "start build image"'
                sh "docker build -t malikh551/back_node ./back"
                sh 'echo "start build image"'
            }
        }
    }
}