from flask import Flask
from flask import request

import DawgWalkRequest
from DawgWalkRequest import DawgRequest

dawg_requests = set()

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/add_schedule", )
def add_schedule():
    return "<p>6, World!</p>"

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
