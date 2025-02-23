import Footer from "@/app/components/Footer";
import prisma from "@/utils/db";
import { getSession } from "@/utils/getSession";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import React from "react";

const ManageUsers = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/login");
  }

  if (user?.role === "USER") {
    redirect("/dashboard");
  }

  const allUsers = await prisma.user.findMany({
    where: { role: "USER" },
  });

  return (
    <>
      <div className="min-h-screen flex flex-col mx-4 md:mx-12">
        <h1 className="text-center text-2xl my-4">Manage Users</h1>
        <div className="w-full overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>User Name</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>State</th>
                <th>Joined At</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.userName}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.state}</td>
                    <td>
                      {user.createdAt.getFullYear()}-
                      {user.createdAt.getMonth() + 1}-{user.createdAt.getDate()}
                    </td>
                    <td>
                      <form
                        action={async () => {
                          "use server";
                          await prisma.user.delete({
                            where: { email: user.email },
                          });
                          revalidatePath("/");
                        }}
                      >
                        <button className="bg-red-500 rounded-xl text-white px-4 py-1">
                          Delete User
                        </button>
                      </form>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
