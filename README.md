# Epson-Autotest
Epson Autotest
Autotests repo https://github.com/MariyaQA/Epson-Autotest.git  

Cypress settings

If, for any reason, autotests doesn’t launch iin IDE correctly > there are few things that should be checked
* NodeJS should be installed
* Git should be installed
* WebStorm should be installed
* Clone the project by the next steps
  
  1 - open project in git
  
  2 - click “Code” and copy the path http://joxi.ru/bmoKRMpt7Yabjm
  
  3 - open prepared folder for a project in Webstorm, and clone with command git clone http://joxi.ru/823YWDZUaLoLJr 
* Need to instal few libraries 
** npm install 
** npm install -D cypress-xpath
** npm install -D cypress-iframe
  
Also, you need to be sure that you have opened the projects folder, and not the folder you’ve have created and pull the project there http://joxi.ru/Grqal0oTR35jPr 
this is how the project structure should look in IDE
Epson-master << this is the folder, that you’ve created for the project
cypress << this is the project itself

Main folders/files to be copy, just in case

* Data folder - here lies all the data that the user needs for registration, login, etc.
* Framework folder - here lies all actions and elements, that use in tests: folders is sorted in accordance to doc
* Tests folder - here lies all tests for current project
* cypress.env.json - here lies website url, that use in tests > you can change the url to another server. 

    ^^here^^ lies unique id, that is used for registration and further login
   
    --- to change unique id - change number ascending to written 

    --- before launch any test, first make sure that your user has been registered; for now use user by default 

* cypress.json - here lies timeout setting, chrome browser security setting
* support/inbox.js - here lies importing of commands and xpath require item
* support/commands.js - here lies iFrame code that is used in tests, visit path, imports, etc.

Starting Cypress with command >>> npx cypress open


Cypress reports

To launch autotesets in headless mode to receive a bug report afterwards use this command >>> npx cypress run --browser chrome --headless


After command was used > report/reports folders in Cypress main folder will be deleted automatically. 

After autotests will finish to run > report/reports folders will be created automatically and will contain index.html file with report about all autotests, that was performed in the last cycle
