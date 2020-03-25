from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
@app.route("/index")
@app.route("/all-flights")
def all_flights():
    return render_template("index.html")

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
