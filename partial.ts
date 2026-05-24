
interface UserProfile  {
  id: number,
  email: string,
  name: string,
  address: string,
}

 interface UpdateUser {
   email: string,
 }

function addUserProfile(userProfile: UserProfile, updateUser: UpdateUser){
  return {...userProfile, ...updateUser};
}

const profileOne: UserProfile = {
  id: 123,
  email: "test@test.com",
  name: "ajay",
  address: "345 street",
}

const profileSummary = addUserProfile(profileOne, {email: "newtestOne@test.com"});
console.log(profileSummary);

