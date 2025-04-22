import { fetchUsersActions } from "@/actions";
import AddNewUser from "@/components/add-new-user";
import { SingleUserCard } from "@/components/single-user-card";

async function userManagement(){
  const getUsersList = await fetchUsersActions()
  console.log(getUsersList);
  
  return (
    <div className="p-20 max-w-6xl">
      <div className="flex justify-between">
        <h1>User Management page</h1>
        <AddNewUser />
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {getUsersList && getUsersList.data && getUsersList.data.length > 0 ? (
          getUsersList.data.map((item) => <SingleUserCard user={item} />)
        ) : (
          <h3>No User Found Here</h3>
        )}
      </div>
    </div>
  );
}
export default userManagement;