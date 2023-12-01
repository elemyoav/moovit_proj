pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Your build steps go here
                echo 'Building...'
            }
        }

        stage('Test') {
            steps {
                // Your test steps go here
                echo 'Testing...'
            }
        }

        stage('Deploy') {
            steps {
                // Your deployment steps go here
                echo 'Deploying...'
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded! You can add additional steps for success here.'
        }
        failure {
            echo 'Pipeline failed! You can add additional steps for failure here.'
        }
        always {
            echo 'This will always run, regardless of success or failure.'
        }
    }
}