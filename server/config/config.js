//entorno:

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//VENCIMIENTO
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//SEED
process.env.SEED = process.env.SEED || 'Este-es-el-seed-de-desarrollo';



process.env.PORT = process.env.PORT || 3000;


//Omongodb+srv://strider1:<password>@cluster0-lvnch.mongodb.net/test


///clien id

process.env.CLIENT_ID = process.env.CLIENT_ID || '204169775080-prrbludmjs8eels3ulgdvf7gok9usq24.apps.googleusercontent.com';