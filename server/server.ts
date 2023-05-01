import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
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

router.get('/record', async (ctx: any, next: any) => {
    const db_connect = dbo.getDb("users");
    const result = await db_connect.collection("records").find({}).toArray();
    ctx.body = result;
    next();
});

router.get('/record/:id', async (ctx: any, next: any) => {
    const db_connect = dbo.getDb();
    const myquery = { _id: new ObjectId(ctx.params.id) };
    ctx.body = await db_connect.collection("records").findOne(myquery);
    console.log("This" + ctx.status);
    await next();
});

router.post('/record/add', async (ctx: any, next: any) => {
    const db_connect = dbo.getDb();
    const myobj = {
        username: ctx.request.body.username,
        fName: ctx.request.body.fName,
        lName: ctx.request.body.lName,
        email: ctx.request.body.email,
        password: ctx.request.body.password,
        userType: ctx.request.body.userType,
    };
    const insertOne = db_connect.collection("records").insertOne(myobj);
    ctx.body = insertOne;
});

router.post('/update/:id', async (ctx: any, next: any) => {
    const db_connect = dbo.getDb();
    const myquery = { _id: new ObjectId(ctx.params.id) };
    const newvalues = {
        $set: {
            username: ctx.request.body.username,
            fName: ctx.request.body.fName,
            lName: ctx.request.body.lName,
            email: ctx.request.body.email,
            password: ctx.request.body.password,
            userType: ctx.request.body.userType,
        },
    };
    const updateOne = await db_connect.collection("records").updateOne(myquery, newvalues);
    console.log("1 document updated");
    ctx.body = updateOne;
});

router.delete('/:id', async (ctx: any, next: any) => {
    const db_connect = dbo.getDb();
    const myquery = { _id: new ObjectId(ctx.params.id) };
    const deleteOne = await db_connect.collection("records").deleteOne(myquery);
    ctx.body = deleteOne;
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