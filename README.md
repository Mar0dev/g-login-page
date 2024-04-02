
# G Login Page

A login page imitating very popular authentication provider.


## Basic Info
At the begining of 2024 Google changed their login page to a new design. The goal of this project was to create a realistic google-looking page thath behaves in a very similiar way. This can be used for internal phishing assessments in a companies.
![g_login_page](https://github.com/Mar0dev/g-login-page/assets/57326089/6f121b8f-8eed-4cae-bef8-5bcd1bb4c70e)


## Features

- Matches company emails with regex
- Saves provided passwords in login.txt file
- Dynamically changes from providing username to asking for a password
- Redirect to original page after password capture


## Requirements
- Python3 (tested with 3.11.7)
- Libraries from requirements.txt
- Gunicorn - if you want to run it on VPS
## Installation

To install this login page:

```bash
  git clone https://github.com/Mar0dev/g-login-page.git
  cd g-login-page
  pip install -r requirements.txt
```
Configuration:

For proper configuration I advise changing company email from @example.com to your company's email.

## Usage

To run this app locally:
```bash
  python3 main.py
```
To run it on VPS:
```bash
  gunicorn -w 3 app:app -b localhost:8000 --daemon
```
A person should be provided with first path that exist in app.py. In this example /bamboohr_login. This will redirect a person to /login page. If someone tries to access /login without redirect, he will be redirected to dummy page. Simple security mechanism.
## Usage limitation

This tool is designed exclusively for authorized internal phishing assessments and security awareness training within an organization. Its use is strictly limited to educational purposes to help improve the organization's defense against cyber threats by increasing awareness and resilience against phishing attacks among employees.

Users assume full liability for any consequences resulting from the use of the tool.
