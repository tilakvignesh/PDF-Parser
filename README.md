# PDF PARSER:

## SETUP:

-  ```git clone https://github.com/tilakvignesh/PDF-Parser.git```


- ```npm i ```

-  Create a .env consisting of: 
    1. GEMINI_KEY
    1. MONGO_URI
    2. MONGO_USERNAME
    4. MONGO_PASSWORD


- ``` docker-compose up --build -d ```




- ```npm run dev```

- Now your backend should be running on ``` http:localhost:8080 ```


- You can view the swagger docs at ```http://localhost:8080/api-docs ```


#### NOTE: THE PDF PARSING MIGHT FAIL AT TIMES, IT'S MOST LIKELY GOING TO BE A GEMINI ISSUE. 
