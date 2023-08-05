Create a new repository on the command line
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/pareshkubernetes/mysite.git
git push -u origin master

Push an existing repository from the command line
git remote add origin https://github.com/pareshkubernetes/mysite.git
git branch -M master
git push -u origin master

PROD = Creating Docker Image for Production use
       ~/Practice-Work/MySite (master) $ docker build -t patelpareshr/mysite:v1.0.0 -f Dockerfile.prod .

       Push image to docker private repo
       $ docker push patelpareshr/mysite:v1.0.0

DEV = = Creating Docker Image for Development use
        $ docker build -t patelpareshr/mysite-dev:v1.0.0 -f Dockerfile.dev .

       Push image to docker private repo
       $ docker push patelpareshr/mysite-dev:v1.0.0
