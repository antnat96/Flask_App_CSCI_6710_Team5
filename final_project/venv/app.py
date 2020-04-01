from flask import Flask, jsonify, render_template, request, send_from_directory
from pymongo import MongoClient
import os

app = Flask(__name__)
client = MongoClient("mongodb+srv://flight-time-logger-app:csci6710team5@anthony-test-tfdgg.gcp.mongodb.net/test?retryWrites=true&w=majority")
db = client["flight-time-logger"]
col = db["info"]


@app.route("/")
@app.route("/index")
@app.route("/all-flights")
def all_flights():
    docs = col.find()
    flights = list(docs)
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

@app.route("/ourTeam")
def ourTeam():
    return render_template("ourTeam.html")

@app.route("/ourMotivation")
def ourMotivation():
    return render_template("ourMotivation.html")

@app.route("/deleteFlight")
def deleteFlight():
    id_to_delete = request.args.get("id", "0", type=str)
    query = { "id" : id_to_delete }
    col.delete_one(query)
    return render_template("index.html")

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),'favicon.ico', mimetype='image/vnd.microsoft.icon')
