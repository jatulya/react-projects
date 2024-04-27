from flask import Flask

app = Flask(__name__)

@app.route('/testing')
def testing():
    return  "This is a test."

if __name__ == '__main__':
    app.run(debug=True)