# ArthySenpai

1/ Create un repo sur le site git sans code.

Create repo sur le site git
Copy URL
```
mkdir dossier
cd dossier
git clone https://github.com/TanSoloo/ArthySenpai.git
cd ArthySenpai
git status
git add .
git status
git commit -m "mon premier commit"
git status 
git log
git push
```




2/ Create un repo sur le site git avec du code déja présent en local
```
d'abord créer le repo sur git.

mkdir dossier
cd dossier
touch README.md

git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:TanSoloo/ES6-Training.git
git push --set-upstream origin master 
git push -u origin master

```

To create a new branch
```
git checkout -b test
git commit -a -m "testing branches"   //  git commit -a    equivaut à git add . + git commit

```
Move back to master

```
git checkout master

```


delete a branch 

```
git branch -d toto

```


will push the current branch on github

```
git push 
```





TODO : 
USE SSH pour ne pas avoir à entrer les cred à chaque fois.








