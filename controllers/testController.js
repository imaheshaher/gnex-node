const userModel = require("../models/user-model")
const Group = require("../models/group-model")
module.exports.user = async(req,res) =>{
    udata = await userModel.find()
    return res.json(udata)
}

module.exports.getBlock = async(req,res)=>{
    var waitforloop = new Promise(async(resolve, reject) => {
        receiverGroup.forEach(async (groupId,index) => {
         
        let result = await Group.aggregate([{
           $lookup:
           {
             from: 'contacts',
             localField: 'groupMembers.contactId',
             foreignField: '_id',
             as: 'contact_details'
           }
         },
         {
           $match: {
             _id: ObjectId(groupId)
           }
         }])
          let userarray = result[0]['contact_details']
       //   let rawreceiver=new Array();
       //   let finalResult = userarray.filter((arr) => arr.isBlocked == false)
       //   rawreceiver=finalResult;
         
       // }) 
       
          var waitinnerloop=new Promise(async(resolve2,reject2)=>{
                userarray.forEach(async (recver,index2)=>{
                 
                     console.log(recver.contactUserId)
                                  let receiverDetails = await User.findOne({ _id: recver.contactUserId })
                                   let recarray = receiverDetails.swapRequestBlockList
                                      if(recarray.length==0)
                                      {
                                                  if(receiver.indexOf(recver.contactUserId) == -1)
                                                 { receiver.push(recver.contactUserId); console.log('pushed'+recver.contactUserId)}
                                      }
                                   var waitinnerloop3=new Promise(async(resolve3,reject3)=>{
                                    recarray.forEach(async (reciver,index3) => {    
                                               if ((reciver.userId) == req.user.id) {
                                                  console.log('bloked'+reciver.userId)
                                                  flag=false;
                                               }
                                              else
                                              {
                                                  
                                                 if(receiver.indexOf(recver.contactUserId) == -1)
                                                 { receiver.push(recver.contactUserId); console.log('pushed'+recver.contactUserId)}
                                              }
                                           if (index3 === recarray.length -1) resolve3();     
                                       })
                                })//loop3 wait
                                waitinnerloop3.then(async() => {
                                    if (index2 === userarray.length -1) resolve2();  
                                })
               })
                
           })
           waitinnerloop.then(async() => {
           if (index === receiverGroup.length -1) resolve();
           })
        });//for each groupid
       
       });
       
       
       
}



module.exports.unBlockUser = async (req,res)=>{
    let d = await Group.aggregate([
        {
         "$lookup":{
             "from":"contacts",
             "localField":"groupMembers.contactId",
             "foreignField":"_id",
             "as":"contact_detail"
             }   
         },
         
        ]).exec()
    let userId=[]
    let contactList=[]
    d.forEach((e) => {
        // console.log(e.contact_detail)
        contactList.push(e.contact_detail)
    })
    
    contactList.forEach((e)=>{
        e.forEach((i) =>{
            userId.push(i.contactUserId)
        })
    })
    let k=[]
    let m=[]
    userId.forEach((e) =>{
        var id = JSON.stringify(e)
        if(k.indexOf(id)==-1){
            k.push(id)
            m.push(e)
        }
    })
    console.log(m)
    // let block = await userModel.find({"swapRequestBlockList.userId":{$not:{$in:m}}})
    let unblock = await userModel.find({_id:{$in:m},"swapRequestBlockList.userId":{$not:{$in:["607ea193f1e10e7ef1b59fb3"]}}})
    return res.json(unblock)
}