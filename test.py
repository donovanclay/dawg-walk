import requests

data = {
    "name": "denny",
    "destination": "west_campus",
    "meeting_location": "hub"
}

requests.post("http://localhost:5000/anytime", json=data)
