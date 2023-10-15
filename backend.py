from flask import Flask, request, jsonify
from geopy import distance
from request import Request
requests = set({})


dawg_requests = set()

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/add_schedule", )
def add_schedule():
    return "<p>6, World!</p>"

@app.route("/make_request", )
def make_request():
  # when user makes a request, 
  # look for requests that are in the same block
  user = request.args.get("user")
  longitude = float(request.args.get("long"))
  latitude = float(request.args.get("lat"))
  destination = (latitude, longitude)
  matches = find_matches(user, destination)
  print(requests)
  return jsonify(matches)

@app.route("/add_to_waitlist", )
def add_to_waitlist():
  user = request.args.get("user")
  longitude = float(request.args.get("long"))
  latitude = float(request.args.get("lat"))
  requests.add(Request(user, (latitude, longitude)))
  remove_old_requests(user)

def remove_old_requests(user):
  requests = set(filter(lambda x : x.name != user, requests))

def find_matches(user, destination):
    result = []
    for request in sorted(requests, key=lambda x: distance.distance(x.destination, destination).miles):
        if user == request.name:
            continue

        if distance.distance(request.destination, destination).miles >= 0.1:
            break
        result.append(request)
    return result

@app.route("/anytime", methods = ['GET', 'POST'])
def anytime():
    data = request.get_json()
    print(data)
    dawg_request = DawgWalkRequest.DawgRequest(data["name"],
                                  data["destination"],
                                  data["meeting_location"],
                                  None)
    print(dawg_request.depart_time)
    dawg_requests.add(dawg_request)
    print("\nrequest added\n")
    return "43";

  
if __name__ == '__main__':
    app.run(host="localhost")
