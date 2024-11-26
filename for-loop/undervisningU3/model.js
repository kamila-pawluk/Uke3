const app = document.getElementById('app');

const model = {
    app: {
        loggedInUser: null,
        darkMode: true,
    },
    input: {
        logginView: {
            username: "",
            password: "",
        },
        signupView:{
            username: "",
            password: "",
            rptPassword: "",
            email: "",
        },
    },
    data: {
       users: [
        {
            id: 0,
            username: "user",
            password: "1234",
            email: "userEmail",  
        },
        {
            id: 1,
            username: "user1",
            password: "1234",
            email: "userEmail1",  
        },
       ],
    }
}