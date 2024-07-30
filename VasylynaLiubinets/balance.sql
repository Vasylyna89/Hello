db.users.updateMany({
    is_blocket: {$ne: true},
   country: { $nin: ["France", "Germany"] }},
   {$inc: { balance: 100}}
)