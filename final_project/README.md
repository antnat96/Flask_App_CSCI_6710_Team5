# Flight Time Logger
Allows the user to view and update flight time, cargo, and departure information.

## Technologies
- Flask
- HTML/Jquery
- Javascript
- Mongodb (Atlas google cloud platform)

## Team Members
Anthony Natale, Jared Mello, (Oliver) Huan-Yun Chen

## Emails
natalea20@students.ecu.edu, melloj20@students.ecu.edu, chenh15@students.ecu.edu

## Architecture
Architecture: Flask web app framework
Front-End: HTML/CSS/JS/jQuery, Bootstrap
Back-End: Python
Database: MongoDB Atlas on Google Cloud

Motivation: Loadmaster in NC Air National Guard, need to track flight times and details for reporting

Features: All flights, modals with details, ability to delete, arrivals, departures, reports-can run queries against previously inputted info & returns JSON docs with info. 

## Usage/Installation
1. Ensure that the latest version of Python is installed on your machine.
2. Ensure that PIP is installed on your machine.
3. Clone this repository.
4. Open up a command prompt/terminal in the repository directory
5. cd into final_project directory
6. SetUp the python enviroment by following the link (https://flask.palletsprojects.com/en/1.1.x/installation/)
7. Activate the enviroment after created
8. Ensure that the Flask package is installed on your machine. "pip install flask"
9. Ensure that the PyMongo driver is installed in the Scripts folder on your machine. "pip install pymongo"
10. Ensure that the dnspython package is installed on your machine. "pip install dnspython"
11. Move the static and templates folders and the app.py file into the virtual environment directory just created
12. Run "flask run" in the terminal while in the virtual environment
12. The server is running on default localhost:5000 or 127.0.0.1:5000
13. Open index.html in a browser of your choice by typing any of the following urls: (localhost:5000, localhost:5000/index, localhost:5000/all-flights)
