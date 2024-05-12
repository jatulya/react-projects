from flask import Flask, jsonify
from add import adds
app = Flask(__name__)

@app.route('/testing/<string:num>')
def testing(num):
    value = adds(num)
    return jsonify(sum=value)

if __name__ == '__main__':
    app.run(debug=True)