pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                sh '/usr/bin/npm install'
            }
        }

        stage('Test') {
            steps {
                sh '/usr/bin/npm test'
            }
        }

        stage('Build') {
            steps {
                echo 'Build completed'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Application deployment completed'
            }
        }
    }
}
