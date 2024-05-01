pipeline{
    agent any
    tools{
        maven "maven"

    }
    stages{
        stage("Build JAR File"){
            steps{
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/JoseToroB/Tingeso1.v2']])
                dir("TingesoLab1"){
                    bat "mvn install -Dmaven.test.skip=true"
                }
            }
        }
        stage("Test"){
            steps{
                dir("TingesoLab1"){
                    bat "mvn test"
                }
            }
        }        
        stage("Build and Push Docker Image"){
            steps{
                dir("TingesoLab1"){
                    script{
                         withDockerRegistry(credentialsId: 'docker-credentials'){
                            bat "docker build -t josetorob/tingeso1v2 ."
                            bat "docker push josetorob/tingeso1v2"
                        }
                    }                    
                }
            }
        }
    }
}
