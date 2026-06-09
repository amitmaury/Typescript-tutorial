
interface UserProfile  {
  id: number,
  email: string,
  name: string,
  address: string,
}

 interface UpdateUser {
   email: string,
 }

//created and function and passsed the email as new interface
function addUserProfile(userProfile: UserProfile, updateUser: UpdateUser){
  return {...userProfile, ...updateUser};
}

const profileOne: UserProfile = {
  id: 123,
  email: "test@test.com",
  name: "ajay",
  address: "345 street",
}

// passing the params which is require here
const profileSummary = addUserProfile(profileOne, {email: "newtestOne@test.com"});
console.log(profileSummary);

