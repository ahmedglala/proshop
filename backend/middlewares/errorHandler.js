exports.errorHandler=(err,req,res,next)=>
{
  const statuscode=err.statuscode||500;
  const message=err.message||'Internal server error';
  res.status(statuscode).json({
    statuscode,
    message,
    stack: err.stack
})
}