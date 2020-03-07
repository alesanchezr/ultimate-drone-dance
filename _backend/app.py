
from pyparrot.Minidrone import Mambo
from _utils import get_all_scripts, get_script_content, get_file_content, run_script, DeviceIDValidator, delete_all_scripts
from PyInquirer import prompt, print_json

print("Welcome!!! 😃")
resp = prompt([
    {
        'type': 'input',
        'name': 'drone_id',
        'message': 'Please specify the Drone Device ID (E.g: E0:AF:34:QF:43:SD)',
        'validate': DeviceIDValidator
    }
])

if 'drone_id' not in resp:
    print("Quitting the application")
    exit()
else:
    drone_id = resp['drone_id']
    print("Trying to connect with "+drone_id+"...")
    # mambo = Mambo(drone_id, use_wifi=False)
    # success = mambo.connect(num_retries=3)
    success = True
    if (success):
        stop = False
        print("SUCCESS! Amazing now we can start the game...")
        while stop == False:

            answers = prompt([
                {
                    'type': 'list',
                    'name': 'operation',
                    'choices': [
                        'List current scripts',
                        'Run a script',
                        'Delete all scripts (start from scratch)',
                        'Quit'
                    ],
                    'message': 'What do you want to do?',
                }
            ])
            if 'operation' not in answers:
                stop = True
                print("Quitting the application... Bye!")

            if answers['operation'] == 'Quit':
                stop = True
            if answers['operation'] == 'Delete all scripts (start from scratch)':
                result = delete_all_scripts()
            elif answers['operation'] == 'List current scripts':
                scripts = get_all_scripts()
                if len(scripts) == 0:
                    print("⚠️ There are no scripts!")
                for s in scripts:
                    print(s)
            elif answers['operation'] == 'Run a script':
                scripts = get_all_scripts()
                if len(scripts) == 0:
                    print("⚠️ There are no scripts!")
                    continue
                answer = prompt([
                    {
                        'type': 'list',
                        'name': 'operation',
                        'choices': scripts,
                        'message': 'Choose the script',
                    }
                ])
                if 'operation' not in answer:
                    stop = True
                    print("Quitting the application... Bye!")
                    break
                
                content = get_script_content(answer['operation'])
                with open('temp_script.py', "w+") as f:
                    f.write(get_file_content(drone_id,content))
                    f.close()

                run_script()
            answers = None

