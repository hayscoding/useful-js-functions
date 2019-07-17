const data = [{
        "id": "23458afa-5eee-4556-aeee-72be10e6d86e",
        "aud": "",
        "role": "",
        "email": "haysiszues@gmail.com",
        "confirmed_at": "2018-11-12T04:17:39Z",
        "app_metadata": {
            "provider": "email",
            "roles": [
                "paid_uber_clone"
            ]
        },
        "user_metadata": {
            "full_name": "Hays Stanford"
        },
        "created_at": "2018-11-12T04:17:39Z",
        "updated_at": "2018-11-12T04:17:39Z"
    }
]

var users = data.map((user) => {
	return user.email+','+user.user_metadata.full_name+','+user.created_at
})

console.log('users: \n', users.join('\n'))