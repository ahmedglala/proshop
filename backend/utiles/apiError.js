
//made error function لما اعوز احدف ايرور بستعملها 
exports. apiError=(statusCode,message)=>{
  const error=new Error();
  error.statusCode=statusCode;
  error.message=message;
  return error;
}