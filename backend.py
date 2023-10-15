from flask import Flask, request, jsonify
from geopy import distance
from request import Request

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
  print(dawg_requests)
  return jsonify(matches)

@app.route("/add_to_waitlist", )
def add_to_waitlist():
  user = request.args.get("user")
  longitude = float(request.args.get("long"))
  latitude = float(request.args.get("lat"))
  remove_old_requests(user)
  dawg_requests.add(Request(user, (latitude, longitude), 0))
  return jsonify(list(dawg_requests))

@app.route("/remove_from_waitlist", )
def remove_from_waitlist():
  user = request.args.get("user")
  remove_old_requests(user)
  return ""

def remove_old_requests(user):
  global dawg_requests
  dawg_requests = {request for request in dawg_requests if request.name != user}

def find_matches(user, destination):
    result = []
    for request in sorted(dawg_requests, key=lambda x: distance.distance(x.destination, destination).miles):
        if user == request.name:
            continue

        if distance.distance(request.destination, destination).miles >= 0.1:
            break
        result.append(request)
    return result

if __name__ == '__main__':
    app.run()
