import * as dotenv from 'dotenv'
dotenv.config()
import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import Router from '@koa/router'
import json from 'koa-json'
import cors from '@koa/cors';
import dbo from '../server/db/conn';
import { ObjectId } from 'mongodb';

const app = new Koa();
const router = new Router();
const port = process.env.PORT || 5000;

var options = {
    origin: '*'
};
app.use(cors(options));
app.use(json());

// Retrives all users in the database
router.get('/user', async (ctx: any, next: any) => {
    const db_connect = dbo.getDb("propgo");
    const result = await db_connect.collection("users").find({}).toArray();
    ctx.body = result;
    await next();
});

// Retrieves a user by their ID
router.get('/user/:id', async (ctx: any, next: any) => {
    const db_connect = dbo.getDb();
    const myquery = { _id: new ObjectId(ctx.params.id) };
    ctx.body = await db_connect.collection("users").findOne(myquery);
    console.log("This" + ctx.status);
    await next();
});

// Adds a new user to the database
router.post('/user/add', async (ctx: any, next: any) => {
    const db_connect = dbo.getDb();
    const myobj = {
        fName: ctx.request.body.fName,
        lName: ctx.request.body.lName,
        username: ctx.request.body.username,
        email: ctx.request.body.email,
        password: ctx.request.body.password,
        userType: ctx.request.body.userType,
    };
    const insertOne = db_connect.collection("users").insertOne(myobj);
    ctx.body = insertOne;
});

// Updates a user by their ID
router.post('/update/:id', async (ctx: any, next: any) => {
    const db_connect = dbo.getDb();
    const myquery = { _id: new ObjectId(ctx.params.id) };
    const newvalues = {
        $set: {
            fName: ctx.request.body.fName,
            lName: ctx.request.body.lName,
            username: ctx.request.body.username,
            email: ctx.request.body.email,
            password: ctx.request.body.password,
            userType: ctx.request.body.userType,
        },
    };
    const updateOne = await db_connect.collection("users").updateOne(myquery, newvalues);
    console.log("1 document updated");
    ctx.body = updateOne;
});

// Deletes a user by their ID
router.delete('/:id', async (ctx: any, next: any) => {
    const db_connect = dbo.getDb();
    const myquery = { _id: new ObjectId(ctx.params.id) };
    const deleteOne = await db_connect.collection("users").deleteOne(myquery);
    ctx.body = deleteOne;
});

// Authenticates a buyer user
router.post('/buyerlogin', async (ctx: any, next: any) => {
    const db_connect = dbo.getDb();
    const { email, password } = ctx.request.body;
    const user = await db_connect.collection("users").findOne({ email });
    if (!user || user.password !== password) {
        ctx.status = 401;
        ctx.body = { message: 'Invalid email or password' }
        return;
    }
    if (user.userType === 'seller') {
        ctx.status = 401;
        ctx.body = { message: 'Invalid user type for this page' };
        console.log(ctx.body);
        return;
    }
    ctx.body = { message: 'User logged in successfully' };
});

// Authenticates a seller user
router.post('/sellerlogin', async (ctx: any, next: any) => {
    const db_connect = dbo.getDb();
    const { email, password, userType } = ctx.request.body;
    const user = await db_connect.collection("users").findOne({ email });
    if (!user || user.password !== password) {
        ctx.status = 401;
        ctx.body = { message: 'Invalid email or password' }
        return;
    }
    if (user.userType === 'buyer') {
        ctx.status = 401;
        ctx.body = { message: 'Invalid user type for this page' };
        console.log(ctx.body);
        return;
    }
    ctx.body = { message: 'User logged in successfully' };
});

app
    .use(bodyparser())
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(port, async () => {
    dbo.connectToServer(function (err: Error) {
        if (err)
            console.error(err);
    });
    console.log(`Server is running on port: ${port}`)
});
