from flask import Flask
from pymongo import MongoClient
from flask import render_template

app = Flask(__name__)
client = MongoClient("mongodb+srv://flight-time-logger-app:csci6710team5@anthony-test-tfdgg.gcp.mongodb.net/test?retryWrites=true&w=majority")
db = client["flight-time-logger"]
col = db["info"]
docs = col.find()
flights = list(docs)

@app.route("/")
@app.route("/index")
@app.route("/all-flights")
def all_flights():
    return render_template("index.html", flights=flights)

@app.route("/departures")
def departures():
    return render_template("departures.html")

@app.route("/arrivals")
def arrivals():
    return render_template("arrivals.html")

@app.route("/addFlight")
def addFlight():
    return render_template("addFlight.html")

@app.route("/reports")
def reports():
    return render_template("reports.html")
