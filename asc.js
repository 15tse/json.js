function sum(a,b,callback) {
    if(isNaN(a) || isNaN(b) )
        {
            console.log("not a number");
            return;
        }
    res=a+b;
    callback(res);
}
function call(res) {
    console.log("result of the sum is",res);
}
sum('abebe','berhe',callback)
sum(2,3,call)

function validateEmail(email, callback) {
    if (email.length==0) {
        return "Please enter a valid email";
    
}
    const isvalid = email.includes("@") && email.includes(".");
    callback(isvalid)
    }
    function callback(isvalid) {
        console.log("is it valied email",isvalid);
    }
    validateEmail("abebe.",callback);
    validateEmail("abele7@gmail.com",callback);