from flask import Flask,render_template
import air_update


app = Flask(__name__)
@app.route('/index/')
def index():  # put application's code here
    return render_template('index.html')

@app.route('/全球变暖/')
def global_warming():  # put application's code here
    return render_template('全球变暖.html')

@app.route('/森林面积/')
def forset_area():  # put application's code here
    return render_template('森林面积.html')

@app.route('/冰川融化/')
def melting_glaciers():  # put application's code here
    return render_template('冰川融化.html')

@app.route('/空气污染/')
def air_pollution():  # put application's code here
    return render_template('空气污染.html')

@app.route('/air_data/')
def air_data():
    bar = air_update.air_update()
    return bar.dump_options_with_quotes()

@app.route('/环保倡议/')
def proposal():  # put application's code here
    return render_template('环保倡议.html')


if __name__ == '__main__':
    app.run()
