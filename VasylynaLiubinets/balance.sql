db.users.updateMany({
   blocket: false,
   country: { $nin: ["France", "Germany"] }},
   {$inc: { balance: 100}}
)