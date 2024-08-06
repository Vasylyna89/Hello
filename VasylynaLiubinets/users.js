
db.users.countDocuments(
    {  is_blocked: { $ne: true },
        country: { $ne: 'China'},
       
    })