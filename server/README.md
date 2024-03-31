# => Starting expressJs framework to build a project

# Day - 24 : ExpressJS (Evironment Set up)

STEPS TO CREATE PROJECT
=> create git project

=> git clone git project

=> open git project in vscode (README.ms is shown)

=> npm init (initialising npm command)

    version : (1.0.0) => version release => shows the relaease version of our project

    - major release : minor release : patch/ fix note

        entry point is always index.js which keeps the information of each and every part of the project works like Table of Content

=> npm i express --save (installing express package in our project)

=> npm i nodemon --save-dev (only required during development so we used -dev which will show this package in dev-dependencies )

    Update "test" inside scripts and replace it with "dev" and value as "nodemon index.js" and add another as "start" and value as "node index.js"

    Now, if we need to run project using nodemon then we can run => npm run dev ( nodemon index.js starts )

    if i run "npm run dev" then project run automatically after save but if we run "npm run start" then we need to run command everytime after some changes on the project

=> create .gitignore file and include node_modules and save it to ignore node_modules folder

=> npm i dotenv --save

# Day - 25 : Express Hello World and Route Building

METHODS

    GET => Fetch data from server to client

    POST => Create new data (client to server)

    PUT => Update more than one data of existing data (client to server)

    PATCH => Just update single data fo existing one (client to server)

    DELETE => Remove existing data from server (client to server)

    - Methods aer usefull to build URL .

# Day - 26 : Routing and URL building

- URL building using methods and URI

- Data Sending Mechanism (FrontEnd to BackEnd)

  => Params ===> localhost/:id
  => querry ===> localhost/?id=1&name=suraj
  => body ===> {"propertyName1" = "Value1", "propertyName2" = "Vlaue2"}
  => headers

- To use body as request we need to include following code in our index.js file

        => app.use(express.json);

- we can use above mentioned mecahnism to view data sent from request from frontend to backend

        => req.params;
        => req.body;
        => req.headers;
        => req.querry

# Day - 27 : Routing and URL nuilding

- Learned about folder structure

        => Index.js --> entry point
        => Env --> holds the secret keys
        => public --> holds the public assets like css,js,images
        => Routes --> holds the routing detail
        => Services --> hold the third party services call like nodemailer
        => Utils --> holds the simple js function like text parser, number parser
        => Views (optional) --> holds the UI part
        => Documentation --> holds the API documentation
        => __tests__ --> holds the unit test cases performed on API/controllers
        => Modules --> holds all the core business logic like model, controller etc.

# Day - 28 : Error handling and static files and Middlewares

     =>   try{

        }catch(err){

        }

    => throgw new Error();

    => try{

            Code block to run

        }catch(err){

            Code block to handle errors

        }finally{

            Code block to be executed regardless of the try result

        }

    Express, by defaukt does not allow us to server static files so we need to enable it using built-in middleware

    app.use(express.static('public))

# Day - 29 : Express Practice

- Questions Practicing

# BASIC DATABASE WEEK

# Day - 30 : Express Database Handling

# Day - 31 : Database Operations

# Day - 32 : callback, callbackhell, promises, async await and mongodb connection

# Day - 33 : CRUD Operation

    - using mongoose npm package
    - import mongoose
    - get schema
    - write down properties from object (Schema)
    - create model from schema

# Day - 34 : Data Validations and References

    - Validations

        -install Joi npm for validation

# Day - 35 : Express Blog Managemenet System (User Login)

    - User Registration
    - User Login
        -> Create login controller
        -> create post route as /api/v1/users/login
        -> in controller, get req.body (email and password)
        -> check if user exists in the system or not
        -> if user exist, get hanshed password from database
        -> compare user provided password with hashed password
        -> if result false, throw new Error ("Email or Password mismatched")
        -> Additional work

# Day - 36 : User Authorisation

    - User Authorisation continue on User login
        :
        ->  System needs to send something back to user (access_token)
        -> cookie, session, Json web token (JWT) => Three methods of authorisatin

        ================instal JWT==================
        - install npm package jsonwebtoken => npm i jsonwebtoken --save
        - jsonwebtoken, 2 utility function (token generator/ token validate)
        - create a toekn.js utility file
        - Add secret and duration in env file

        - if user successfully logsin, send the token to the user through login api
        - send the token for every request in req.headers
        - checkRole middleware update using token validate utility function
        - if false, permission denied error throw
        - if true, next()

# Day - 37 : User Password Actions

    - whenuser click forgate password
        => First, email need to be verified and if email exist in database
        => Then, generate an OTP code using math.random
        => store that otp in database collection
        => send email with otp code to the specific email address

        => In next step after user insert the otp code and new password into the file
        => extract the specific user from the database using email and store in a variable
        => compare the toke that user send and the database of the specific user from the databas
        => if otp doest not match then throw new error "invalid otp code"
        => else hash the password using bcryptjs
        => then update the password field into the database collection of specific user using updateOne and opt as empty
        => if update is failed then throw new error "password update failed"
        => else return "password is successfully changed, CONGRATULATIONS!!"

# Day - 38 : User Password Manipulation

- Reset Password => only by admin
- Change Password => only by user
- update profile => only by user

# Day - 39 : getUserProfile and updateProfile

# Day - 40 : Aggregation and Pagination

- learning aggregation in mongodb

=> $lookup, $unwind and $project

=>FIRST STEP:
for Instance: In blog collection there is a field called author which holds the id of the user who posted the blog. For security purpose we cannot show the id of the user instead we need the name of the specific user whose id is mentioned on on the field. So, for that purpose we need to do the aggregation which groups the mnultiple collections and convert into sinple collection. Very first step is to do lookup :

==============================================> STEPS FOR AGGREGATION IN MONGODB COMPASS <============================================================

To perform aggregation on certain collection we need to open Mongodbcompass. Then click on connect. In our case , as we are building blog app, we need to click on blog-app collection> click on blog collection> click on Aggregation> Click on AddStage button and search for the aggregation that we are going to use.

In our case we need to first lookup for so type lookup at the Stage 1 input field.

syntax of our case:

                    {
                    from: "users",
                    localField: "author",
                    foreignField: "\_id",
                    as: "author"
                    }

=>SECOND STEP:

Again click on AddStage and search for unwind:

- path: Path to the array field.
- preserveNullAndEmptyArrays: Optional
- toggle to unwind null and empty values.

         {
         path: "$author",
         preserveNullAndEmptyArrays: true
         }

=> THIRD STEP:

Again click on AddStage and search for project:

- specifications: The fields to
- include or exclude.

            {
                _id:0,
                title:1,
                content:1,
                author:0,
                author: "$author.name"
            }

In case of "\_id", 0 indicate false which means that in aggregate id field is excluded where as author field will contain the name of the author instead of id.

Now, we can export the code by clicking on Export button at the right side of the screen and copy the code and then include on model inside aggregate([collection of above code ]) as follows:

For instance:

    const getAll = () => {
    return BlogModel.aggregate([
        {
        $lookup: {
            from: "users",
            localField: "author",
            foreignField: "_id",
            as: "result",
        },
        },
        {
        $unwind: {
            path: "$result",
            preserveNullAndEmptyArrays: true,
        },
        },
        {
        $project: {
            _id: 0,
            title: 1,
            tags: 1,
            content: 1,
            slug: 1,
            author: 0,
            author: "$result.name",
        },
        },
    ]);
    };

# Day - 41 : Aggregation and Pagination Part 2

=> Aggregation usercase

    - multiple collection join

=> Pagination, sorting and searching

    - Pagination
    - Searching
    - Report Generation

=> using token , automatically assign authors for user role
=> else for admin as for userId

# Day - 42 : User Management Wrapup

# Day - 43 : Blog Management Wrapup

# Day - 44 : File Upload

=> while registering users into the database we need to accept multiple datatypes in a single request for instance, we need to send file as well as other text data like name, email, password and so on. So, this can be only possible to send data using multipart/form-data. In express server body parser does not handles the file uploades natively but a npm package called "Multer" handles the request with content type => multipart/form-data.So, to handle the multipart/form-data we will use multer npm package.

STEPS TO UPLOAD FILES INTO DATABASE AND SAVE TO PROJECT DIRECTORY USING MULTER

1.  Install multer package using using:

        npm i multer --save

2.  import the multer :

        const multer = require("multer);

3.  Defining the storage location

    => create a folder in the root directory. In our case we have created publi folder inside which we have created images folder where we are going to store all the files.

    => We are going to store data in disk storage so we are going to use disktorage to store the files and setup the destination and filename that is going to be saved into the folder. So following code is used :

            const storage = multer.diskStorage({
                destination: function (req, file, cb) {
                    cb(null, "./public/images");
                },
                filename: function (req, file, cb) {
                    cb(null, `${Date.now()}-${file.originalname}`);
                    // console.log(file.originalname.split("."));
                },
                });

    => In above code we have set the destination as ./public/images where we are going to save files and the filename determines what a file should be named in the folder. In this example, we use Date.now() to generate a unique timestamp for each uploaded file, which helps prevent filename clashes.

4.  After defining the storage location create an instance of multer by calling multer({storage}) as follows:

            const upload = multer({storage:storage});

5.  Now we can use upload instance to store files into database and save file to project folder as follows:

               router.post(
               "/register",
               upload.single("profilePic"),
               validate,
               async (req, res, next) => {
                   console.log(req.file);
                   console.log(req.body);
                   try {
                   if (req.file) {
                       const { path } = req.file;
                       req.body.profilePic = path.replace("public", "");
                   }
                   const result = await userController.registerUser(req.body);
                   res.status(200).json({ message: result });
                   } catch (error) {
                   next(error);
                   }
               }
               );

    => In above example, we have used the instance created above to accept the multipart/form-data as upload.single("<fiedname as in the postman>")=> upload.single("profilePic");

    => after that we need to store the file name along with the path where file is saved using above code by attaching the profilePic filed in req.body json as follows:

    req.file store following information about the file :

                {
            fieldname: 'profilePic',
            originalname: '077396AD-1148-4816-A65A-2EF7189A1665.jpeg',
            encoding: '7bit',
            mimetype: 'image/jpeg',
            destination: './public/images',
            filename: '1708524528116-077396AD-1148-4816-A65A-2EF7189A1665.jpeg',
            path: 'public/images/1708524528116-077396AD-1148-4816-A65A-2EF7189A1665.jpeg',
            size: 4187914
            }

    Now, if req.file is there then we can extract the path porperties of req.file object and set the value to profilePic which is set as the field name in database collection where image information is going to be stored:

    if(req.file)
    {
    const {path} = req.file;
    req.body.profilePic = path.replace("public","");
    }

    req.body BEFORE ADDING profilePic field and its value :

            {
        name: 'Suraj Pandey',
        email: 'surajpandey77@gmail.com',
        password: 'suraj1230',
        phoneNumber: '98957837483'
        }

    req.body AFTER ADDING profilePic and its value :

            {
        name: 'Suraj Pandey',
        email: 'surajpandey77@gmail.com',
        password: 'suraj1230',
        phoneNumber: '98957837483',
        profilePic: '/images/1708528868598-077396AD-1148-4816-A65A-2EF7189A1665.jpeg'
        }

Now, this data is going to be stored into the database.
