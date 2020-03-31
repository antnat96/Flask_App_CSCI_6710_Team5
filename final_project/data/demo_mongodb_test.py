import pymongo

client = pymongo.MongoClient("mongodb+srv://flight-time-logger-app:csci6710team5@anthony-test-tfdgg.gcp.mongodb.net/test?retryWrites=true&w=majority")

db = client["flight-time-logger"]

#print(client.list_database_names())

col = db["info"]

#print(db.list_collection_names())

mydoc = {
    "id": "001",        
    "aircraft": {
      "type": "C-17 Globemaster",
      "tail_num": "06-0284"
    },
    "departure" : {
      "date": "3/22/2020",
      "location": "Charlotte, NC",
      "airport_code": "CLT",
      "time_local": "0520",
      "time_zulu": "0920",
    },
    "arrival" : {
      "date": "3/22/2020",
      "location": "Memphis, TN",
      "airport_code": "MEM",
      "time_local": "0700",
      "time_zulu": "1100",
    },
    "time" : 1.7,
    "cargo" : {
      "num_of_items": 5,
      "weight_lbs": 100,
      "weight_kg": 40,
      "loading_agents": "Loading Agent 1",
      "description": "Some cargo description."
    }
  }

x = col.insert_one(mydoc)

print(x.inserted_id)

data = col.find_one()

print(data)