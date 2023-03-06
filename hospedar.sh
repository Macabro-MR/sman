git init
git config --global user.email "karolfelix785@gmail.com"
heroku git:remote -a thecybersfree
git add .
git commit -am "make it better"
git push heroku master --force