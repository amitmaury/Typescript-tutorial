
interface UserProfile  {
  id: number,
  email: string,
  name: string,
  address: string,
}
//using omit to just make sure that, it will skip the id from UserPRofile interface.
type PrintProfile = Omit<UserProfile, "id">;

// When omit being called in the memory omit behaves as omitting the id and rest of the keys will be being printed. like below
// interface printProfile{
//   email: string,
//   name: string,
//   address: string,
// }

function showProfilel(userProfile: PrintProfile)
{
  return userProfile;
}

const profileTwo: PrintProfile = {
  email:"example@test.com",
  name: "akash",
  address: "koti street",
}

const profileTwoSummary = showProfilel(profileTwo);
console.log(profileTwoSummary);

