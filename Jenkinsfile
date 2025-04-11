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
        stage('Push image back'){
            environment{
                DOCKER_HUB = credentials('docker-hub-creds')
            }
            steps{
                sh 'echo ${DOCKER_HUB_PSW} | docker login -u ${DOCKER_HUB_USR} --password-stdin'
                sh "docker push malikh551/back_node"
                }
            }
    }
}