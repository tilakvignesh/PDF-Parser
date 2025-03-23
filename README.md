# PDF PARSER:

## Context:
- Upload A PDF to the frontend, it parses the pdf using gemini and then returns
user details in that pdf. Also, stores these details in mongoDB.

## SETUP:

-  ```git clone https://github.com/tilakvignesh/PDF-Parser.git```


### Frontend:

1. ``` cd frontend/ ```
1.  ```npm i ```
1. ``` npm start ```

### Backend:

1. ``` cd backend/ ```
1. ``` npm i ```
1. Create a .env consisting of: 
    1. GEMINI_KEY
    1. MONGO_URI
    2. MONGO_USERNAME
    4. MONGO_PASSWORD
1. ```npm run dev```

### DB Setup:

1. ``` docker-compose up --build -d ```

## Additional Points:
- Now your backend should be running on ``` http://localhost:8080 ```
- Your frontend will be running on ```http://localhost:3000 ```


- You can view the swagger docs at ```http://localhost:8080/api-docs ```


#### NOTE: THE PDF PARSING MIGHT FAIL AT TIMES, IT'S MOST LIKELY GOING TO BE A GEMINI ISSUE. 
