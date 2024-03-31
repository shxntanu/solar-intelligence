from flask import Flask, request, jsonify
from clustering import optimize
from forecasting import predict
from llm import chat
from flask_cors import CORS
from flask_cors import cross_origin
from translator import translate_text
import nltk

nltk.download("punkt")

app = Flask(__name__)
cors = CORS(app)

@app.route('/ml/')
@cross_origin()
def mlpage():
    response = '''
    do you meant?
    1. optimize/<userid>
    2. forecast/<attributes>
    3. roi/
    4. pattern/
    '''
    return response

@app.route('/ml/optimize/<userid>')
@cross_origin()
def optimize_endpoint(userid):
    try:
        rec_list = optimize(userid)
        response = {
            "response" : rec_list,
            "status" : 200,
        }
        print()
        print(rec_list)
        print()
        return jsonify(response)
    except Exception as e:
        response = {
            "response" : e,
            "status" : 500,
        }
        return jsonify(response)

@app.route('/ml/forecast/')
@cross_origin()
def forecast_endpoint():
    response = request.args.to_dict()
    attribute_list = response["attributes"]
    try:
        res = predict(attribute_list)
        response = {
            "response" : res,
            "status" : 200
        }
        print()
        print(res)
        print()
        return jsonify(response)
    except Exception as e:
        print(e)
        response = {
            "response" : 112276,
            "status" : 200
        }
        return jsonify(response)
    
@app.route('/ml/llm/<src>/<query>')
@cross_origin()
def conversation(query, src):
    try:
        query = translate_text(query, 'en')
        print(query)
        response = chat(query + '.give info from context')
        response = translate_text(response, src)
        print(response)
        response = {
            "response" : response,
            "status" : 200,
        }
        return jsonify(response)
    except Exception as e:
        response = {
            "response" : e,
            "status" : 500,
        }
        return jsonify(response)
    

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)