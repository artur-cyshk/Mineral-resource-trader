module.exports = {
    database: {
        dbname: "online_market",
        username: "root",
        password: "99996578",
        host: "localhost"
    },
    cors: {
    	host: '*',
    	methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    	headers: 'X-Requested-With,content-type, Authorization'
    },
    emailTransporter: {
        from: 'school26iko@gmail.com',
        subject: 'Activate your email, please'
    },
    port: 3001
};
