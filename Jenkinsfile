pipeline {
    agent any
    environment {
        SKIP_TESTS = 'true' // Variable para indicar si los tests deben ser omitidos
    }
    tools {
        maven "maven"
    }
    stages {
        stage("Build JAR File") {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/JoseToroB/Tingeso1.v2']])
                dir("TingesoLab1") {
                    script {
                        def mavenCommand = "mvn install"
                        if (env.SKIP_TESTS == 'true') {
                            mavenCommand += " -Dmaven.test.skip=true"
                        }
                        bat mavenCommand
                    }
                }
            }
        }
        stage("Test") {
            when {
                expression {
                    return env.SKIP_TESTS != 'true'
                }
            }
            steps {
                dir("TingesoLab1") {
                    bat "mvn test"
                }
            }
        }
        stage("Build and Push Docker Image") {
            steps {
                dir("TingesoLab1") {
                    script {
                        withDockerRegistry(credentialsId: 'docker-credentials') {
                            bat "docker build -t josetorob/tingeso1v2 ."
                            bat "docker push josetorob/tingeso1v2"
                        }
                    }
                }
            }
        }
    }
}
