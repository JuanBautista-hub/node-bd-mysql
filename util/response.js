exports.success=(_req,res,message,status,)=>res.status(status || 200).send({error:"",body:message});

exports.error=(_req,res,message,status,)=>res.status(status || 500).send({error:message,body:''});