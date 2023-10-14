from flask import Flask
from flask import request

dawg_requests = []


app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/add_schedule", )
def add_schedule():
    return "<p>6, World!</p>"

@app.route("/anytime", methods = ['GET', 'POST'])
def anytime():
    info = request.form["hello"]
    print(info)
    return 8;

  
if __name__ == '__main__':
    app.run(host="localhost")
