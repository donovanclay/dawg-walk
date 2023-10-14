from flask import Flask

requests = []


app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/add_schedule", )
def add_schedule():
    return "<p>6, World!</p>"
  
if __name__ == '__main__':
    app.run()
