from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Abilita CORS su tutte le route

@app.route('/api/data')
def get_data():
    return jsonify({"message": "Ciao dal backend"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
