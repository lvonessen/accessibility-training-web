# Accessibility Curriculum Resource Tool Readme

## Using the files already in the repo

### To host this project online, you will need to upload:

- build/
- content-media/
- slides/
- index.html
- custom.css
- .htaccess

(although technically speaking I think at the moment the 'slides/' directory is not used)

### To view it locally, navigate to the top folder of the project, and run:

python server.py

### Use any browser to go to the following site:

http://127.0.0.1:8000 

### Voila!

## Editing the files

Note that this app is written using ReactJS

### The 'src' directory

- app.js controls which view people see. It should give you some idea of the architecture
- At the moment, the "course" view (see course.js) only shows the first topic (see json/course.json) of each course. A topic will show its argument (this depends on the course, so it's stored in json/course.json), then a list of subtopics determined by the course's topic "flavor" (this was based on the idea that an accessibility topic like "exposing structure" would have a different set of topics in, say, a web dev class than an HCI class). The subtopics (json/subtopics.json) (presented as specified in lotile.js) in particular have a field "material" which has as its value the html to be presented to instructors.
- Sorry it's confusing but maybe this info helps a bit?

### To build the files, run:

npm run build

### You can also use:

npm run watch

### but in that case make sure not to use 'git checkout' to change many files at once, because npm will try to build once per changed file and freeze your computer

## Other files

### I don't actually know which ones React.js needs and which are surplus. Sorry!

