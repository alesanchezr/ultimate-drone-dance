
"""
Demo the direct flying for the python interface
Author: Amy McGovern
"""
import os

from pyparrot.Minidrone import Mambo

# you will need to change this to the address of YOUR mambo
# Broken D0:3A:F7:D9:E6:20

mamboAddr = os.environ.get('DRONE_ADDRESS')
mamboAddr = 'd0:3a:87:45:e6:5a'
print("Address found: ", mamboAddr)
# make my mambo object
# remember to set True/False for the wifi depending on if you are using the wifi or the BLE to connect
mambo = Mambo(mamboAddr, use_wifi=False)

print("trying to connect")
success = mambo.connect(num_retries=3)
print("connected: %s" % success)

if (success):
    # get the state information
    print("sleeping")
    mambo.smart_sleep(2)
    mambo.ask_for_state_update()
    mambo.smart_sleep(2)

    print("taking off!")
    mambo.safe_takeoff(5)
    
    
    
    print("landing")
    mambo.safe_land(5)
    mambo.smart_sleep(5)

    print("disconnect")
    mambo.disconnect()
