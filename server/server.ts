import * as dotenv from 'dotenv'
dotenv.config()
import Koa, {Context, Next} from 'koa';
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
    const myobj: {
      fName: string;
      lName: string;
      username: string;
      email: string;
      password: string;
      userType: string;
      properties?: any[];
    } = {
      fName: ctx.request.body.fName,
      lName: ctx.request.body.lName,
      username: ctx.request.body.username,
      email: ctx.request.body.email,
      password: ctx.request.body.password,
      userType: ctx.request.body.userType,
    };
    if (ctx.request.body.userType === 'seller') {
      myobj.properties = [];
    }
    const insertOne = await db_connect.collection('users').insertOne(myobj);
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
router.delete('/user/:id', async (ctx: any, next: any) => {
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

// Retrives all properties in the database
router.get('/property', async (ctx: any, next: any) => {
    const db_connect = dbo.getDb("propgo");
    const result = await db_connect.collection("properties").find({}).toArray();
    ctx.body = result;
    await next();
});

// Retrieves a property by its ID
router.get('/property/:id', async (ctx: any, next: any) => {
    const db_connect = dbo.getDb();
    const myquery = { _id: new ObjectId(ctx.params.id) };
    ctx.body = await db_connect.collection("properties").findOne(myquery);
    console.log("This" + ctx.status);
    await next();
});

// Adds a new property to the database
router.post('/user/add', async (ctx: any, next: any) => {
    const db_connect = dbo.getDb();
    const myobj: {
      fName: string;
      lName: string;
      username: string;
      email: string;
      password: string;
      userType: string;
      properties?: any[];
    } = {
      fName: ctx.request.body.fName,
      lName: ctx.request.body.lName,
      username: ctx.request.body.username,
      email: ctx.request.body.email,
      password: ctx.request.body.password,
      userType: ctx.request.body.userType,
    };
    if (ctx.request.body.userType === 'seller') {
      const propertyData = ctx.request.body.propertyData;
      const properties = await Promise.all(
        propertyData.map(async (property: any) => {
          const insertOne = await db_connect.collection('properties').insertOne(property);
          return insertOne.ops[0]._id;
        })
      );
      myobj.properties = properties;
    }
    const insertOne = await db_connect.collection('users').insertOne(myobj);
    ctx.body = insertOne;
  });

// Updates a property by its ID
router.post('/property/:id', async (ctx: any, next: any) => {
    const db_connect = dbo.getDb();
    const myquery = { _id: new ObjectId(ctx.params.id) };
    const newvalues = {
        $set: {
            location: ctx.request.body.location,
            age: ctx.request.body.age,
            floorPlanImg: ctx.request.body.floorPlanImg,
            squareFootage: ctx.request.body.squareFootage,
            numBeds: ctx.request.body.numBeds,
            numBaths: ctx.request.body.numBaths,
            hasParking: ctx.request.body.hasParking,
            hasGarden: ctx.request.body.hasGarden,
            proximityToFacilities: ctx.request.body.proximityToFacilities,
            proximityToMainRoads: ctx.request.body.proximityToMainRoads,
            propertyTaxRecords: ctx.request.body.propertyValue * 0.07,
            saleOrRent: ctx.request.body.saleOrRent,
            locationImg: ctx.request.body.locationImg
        },
    };
    const updateOne = await db_connect.collection("properties").updateOne(myquery, newvalues);
    console.log("1 document updated");
    ctx.body = updateOne;
});

// Deletes a property by its ID
router.delete('/property/:id', async (ctx: any, next: any) => {
    const db_connect = dbo.getDb();
    const myquery = { _id: new ObjectId(ctx.params.id) };
    const deleteOne = await db_connect.collection("properties").deleteOne(myquery);
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
