from flask import Flask

requests = []

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/add-schedule", )
def hello_world():
    return "<p>Hello, World!</p>"

if __name__ == '__main__':
    app.run()