from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/metadata')
def metadata():
    return jsonify({'name': 'Sample Service', 'version': '1.0'})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
