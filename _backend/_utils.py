import requests, os,subprocess, pathlib, regex
from PyInquirer import Validator, ValidationError

class DeviceIDValidator(Validator):
    def validate(self, document):
        ok = regex.match('^[\d\w]{2}:[\d\w]{2}:[\d\w]{2}:[\d\w]{2}:[\d\w]{2}:[\d\w]{2}?$', document.text)
        if not ok:
            raise ValidationError(
                message='Please enter a valid drone id with a format like E0:AF:34:QF:43:SD',
                cursor_position=len(document.text))  # Move cursor to end

HOST = 'https://assets.breatheco.de/'
def delete_all_scripts():
    print("Deleting all scripts ...")
    resp = requests.delete(HOST+"apis/drone-challenge/scripts/all")
    if resp.status_code == 200:
        print("SUCCESS! All scripts have been deleted")
        return True
    else:
        print("ERROR! Scripts could not be deleted")
        return False

def get_all_scripts():
    print("Fetching all scripts ...")
    resp = requests.get(HOST+"apis/drone-challenge/scripts/all")
    if resp.status_code == 200:
        return resp.json()
    else:
        return False

def get_script_content(script_name):
    print("Fetching the script content for "+script_name+"...")
    resp = requests.get(HOST+"apis/drone-challenge/scripts/"+script_name)
    if resp.status_code == 200:
        return resp.text
    else:
        print("ERROR! Fetching the script content for "+script_name)
        return False

def get_file_content(mamboAddr, body):
    return f"""
import os
from pyparrot.Minidrone import Mambo
mambo = Mambo('{mamboAddr}', use_wifi=False)
if mambo == False or mambo is None:
    print("Mambo not available")
print("Trying to connect")
success = mambo.connect(num_retries=3)
if success == False or success is False:
    print("Error connecting to address {mamboAddr}")
    mambo.disconnect()
    exit(0)

{body}
mambo.disconnect()
"""

def run_script():
    print("Running downloaded script...")
    path = pathlib.Path(__file__).parent.absolute()
    subprocess.call(f"python {path}/temp_script.py", shell=True)

