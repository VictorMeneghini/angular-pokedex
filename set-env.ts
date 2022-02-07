import { writeFile } from 'fs';
import * as dotenv from 'dotenv';

dotenv.config();

const isProduction = process.env['ENVIRONMENT'] == "production" ? true : false;

const targetPath = `./src/environments/environment.${isProduction ? 'prod' : 'local'}.ts`;

const envConfigFile = `export const environment = {
  production: ${isProduction},
  firebaseConfig: {
    apiKey: '${process.env['API_KEY'] || ""}',
    authDomain: '${process.env['AUTH_DOMAIN'] || ""}',
    projectId: '${process.env['PROJECT_ID'] || ""}',
    storageBucket: '${process.env['STORAGE_BUCKET'] || ""}',
    messagingSenderId: '${process.env['MESSAGE_IN_SENDER_ID'] || ""}',
    appId: '${process.env['APP_ID'] || ""}',
    measurementId: '${process.env['APIMEASUREMENT_ID_KEY'] || ""}'
  }
};
`;

console.log('The file `environment.ts` will be written with the following content');
writeFile(targetPath, envConfigFile, function (err) {
   if (err) {
       throw console.error(err);
   } else {
       console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`);
   }
});