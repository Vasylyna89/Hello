db.users.aggregate([
    {  $match: {
       country: { $in: ['China','USA','France'] }
     }},
     
      {
           $sort: { balance: -1 }
       },
       {
           $project:{
               _id:0,
               fullname: 1,
               balance: 1
           }
           
       }
        
   ])