##QuickStart

    cd /path/to/mclab-web
    virtualenv mcenv
    pip install -r requirements.txt  # Install python dependencies
    npm install  # Install js deps
    npm start  # In a separate terminal. This generates bundle.js and starts a watching task
    python manage.py migrate  # This should generate the sqlite file
    python manage.py runserver_plus  # Start the python dev server
    

If quickstart doesn't work, open an issue. 

