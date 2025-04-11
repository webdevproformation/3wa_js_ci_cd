pipeline {
    agent any

    stages {
        stage('build image back') {
            steps {
                sh 'echo "start build image back"'
                sh "docker build -t malikh551/back_node ./back"
                sh 'echo "end  build image back"'
            }
        }
        stage('build image front') {
            steps {
                sh 'echo "start build image front"'
                sh "docker build -t malikh551/front_node ./web"
                sh 'echo "end  build image front"'
            }
        }
        stage('Push image back'){
            environment{
                DOCKER_HUB = credentials('docker-hub-creds')
            }
            steps{
                sh 'echo ${DOCKER_HUB_PSW} | docker login -u ${DOCKER_HUB_USR} --password-stdin'
                sh "docker push malikh551/back_node"
                sh "docker push malikh551/front_node"
            }
        } 
        stage('docker compose sur EC2'){
            steps{
                sh 'echo "exécuter docker-compose up sur l EC2 créé"'
            }
        }
    }
}