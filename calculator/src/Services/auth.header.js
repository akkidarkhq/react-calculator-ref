export default function authHeader(){
    let jwtString = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJydXRpayIsImlhdCI6MTY5MTU2OTAxNiwiZXhwIjoxNjkxNjU1NDE2fQ.G4eIZWnrLAW2lbGR9cRX-OuxbwrJrcfqHC-ukR13fM8"

    const user = JSON.parse(localStorage.getItem("user"));
    if(user && user.accessToken){
        console.log("Authorization : +Bearer >>>"+user.accessToken)
        return {Authorization : 'Bearer '+user.accessToken };
    }else return {}
}
