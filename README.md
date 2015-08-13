# NomadSequenceGenerator
Numeric Sequence Generator
#Overview#

This application is used to generate different types of sequences when an Integer is given by the user as Input. Sample sequnces include Odd Numbers, Even Numbers, Fibnocci series..etc.
The solution for the "Numeric Sequence Generator" uses C#, ASP.NET, MVC with Angular JS. 

#How to Run the Application?#

1) Download the zip file
2) Open the Solution file using Visual Studion 2013(or higher).
3) Hit F5 to run the site. 

#How to Run Unit Tests?#

Unit testing with Karma and Jasmine for AngularJS

1) [Install Node](https://nodejs.org/) version v0.10.0 (or higher). [If you already have Node installed, to check your version run this from the command line: "node --version"]
2) Open Visual Studio command prompt and change directory to location of current solution
3) Run command "npm install" to install required Node modules
4) Change the directory to the unit tests folder
5)Run the unit tests "..\..\..\..\node_modules\.bin\karma start karma.config.js"


#How to Run UI tests?#

End to End UI Testing through browser using Protractor with Jasmine

1)Install JDK (http://www.oracle.com/technetwork/java/javase/downloads) for Selenium Server.
2) make sure that you have python 2.7 is installed on your machine and set the "python" environment variable to python.exe path
3) Open Visual Studio command prompt and Install Protractor and the Webdriver manager using command "npm install -g protractor"
4) Download binaries for the Selenium Server using command "webdriver-manager update"
5) Open another command prompt.
6) In this second command prompt, run the Selenium Server "webdriver-manager start"
7) Go back to your first command window and change the directory to uitests folder
8) Make sure that the site is running (in Visual Studio, hit F5)
9) Run the UI tests "protractor protractor.config.js"



