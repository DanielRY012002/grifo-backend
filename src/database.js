import { Pool } from 'pg';
/*
export const pool = new Pool({
    host:'bdventas.cpmnvlkneh1k.us-east-2.rds.amazonaws.com',
    user:'postgres',
    password:'postgres2021',
    database:'postgres',
    port:5432
});
*/
export const pool = new Pool({
    host:'ec2-54-164-238-108.compute-1.amazonaws.com',
    user:'gzieezdnwwjwsm',
    password:'528be9b33e71867dda7c8a52ccd6c9d612ab0f9ea0a5eb3192687d6fe23095e0',
    database:'d161eeji6k8rg2',
    port:5432,
    ssl: { rejectUnauthorized: false }
});
