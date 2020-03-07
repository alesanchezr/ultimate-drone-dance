

1. Install untangle
(this is used to parse the xml files in the parrot SDK)
```sh
pipenv install untangle
```

2. Install Bluez (for bluethooth connection)
(Handles bluetooth connections)
```py
sudo apt-get install bluetooth bluez python-bluez
```

Note it is also possible that you will need to install bluepy (if it isn’t already there). These commands should do it:

sudo apt-get install python-pip libglib2.0-dev
sudo pipenv install bluepy
sudo apt-get update

3. pipenv install pyparrot


Find mambos:
sudo /home/pi/.local/share/virtualenvs/dron-challenge-Fp0dx6kX/bin/find_mambo

Look for: 
FOUND A MAMBO!
Device e0:14:60:27:3d:cf (random), RSSI=-47 dB
  Complete Local Name = Mambo_281442
