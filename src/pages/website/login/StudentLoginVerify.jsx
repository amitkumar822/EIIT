import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Lock, Mail, Eye, EyeOff, School } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// export function StudentLoginVerify() {

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (formData) => {
//     console.log("FormData: ", formData);
//   };

//   return (
//     <div className="h-[87.9vh] flex items-center justify-center bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 p-6">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.98 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6 }}
//         className="w-full max-w-md flex justify-center items-center z-10"
//       >
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Tabs defaultValue="account" className="w-[400px]">
//             <TabsList className="grid w-full grid-cols-2">
//               <TabsTrigger value="account">Account</TabsTrigger>
//               <TabsTrigger value="password">Password</TabsTrigger>
//             </TabsList>
//             <TabsContent value="account">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Account</CardTitle>
//                   <CardDescription>
//                     Make changes to your account here. Click save when you're
//                     done.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-2">
//                   <div className="space-y-1">
//                     <Label htmlFor="name">Name</Label>
//                     <Input id="name" defaultValue="Pedro Duarte" />
//                   </div>
//                   <div className="space-y-1">
//                     <Label htmlFor="username">Username</Label>
//                     <Input id="username" defaultValue="@peduarte" />
//                   </div>
//                 </CardContent>
//                 <CardFooter>
//                   <Button>Save changes</Button>
//                 </CardFooter>
//               </Card>
//             </TabsContent>
//             <TabsContent value="password">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Password</CardTitle>
//                   <CardDescription>
//                     Change your password here. After saving, you'll be logged
//                     out.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-2">
//                   <div className="space-y-1">
//                     <Label htmlFor="current">Current password</Label>
//                     <Input id="current" type="password" />
//                   </div>
//                   <div className="space-y-1">
//                     <Label htmlFor="new">New password</Label>
//                     <Input id="new" type="password" />
//                   </div>
//                 </CardContent>
//                 <CardFooter>
//                   <Button>Save password</Button>
//                 </CardFooter>
//               </Card>
//             </TabsContent>
//           </Tabs>
//         </form>
//       </motion.div>

//       {/* Animation pattern. */}
//       <Animation />
//     </div>
//   );
// }

export function StudentLoginVerify() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    console.log("FormData: ", formData);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md flex justify-center items-center z-10"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Tabs defaultValue="studentLogin" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2 bg-gradient-to-l from-rose-100 to-teal-100">
              <TabsTrigger value="studentLogin" className="cursor-pointer">
                Student Login
              </TabsTrigger>
              <TabsTrigger value="certificateVerify" className="cursor-pointer">
                Certificate Verify
              </TabsTrigger>
            </TabsList>

            {/* Student Login Tab */}
            <TabsContent value="studentLogin">
              <Card className={"bg-gradient-to-r from-rose-100 via-purple-100 to-teal-100"}>
                <CardHeader>
                  <CardTitle>Student Login</CardTitle>
                  <CardDescription>
                    Login using your registered credentials.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="studentId">Student ID</Label>
                    <Input
                      id="studentId"
                      {...register("studentId", {
                        required: "Student ID is required",
                      })}
                      placeholder="Enter your Student ID"
                      className="border-black/10 border-2"
                    />
                    {errors.studentId && (
                      <p className="text-sm text-red-500">
                        {errors.studentId.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                      placeholder="Enter your Password"
                      className="border-black/10 border-2"
                    />
                    {errors.password && (
                      <p className="text-sm text-red-500">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </CardContent>
                <CardFooter className={"flex justify-center"}>
                  <Button type="submit" className={"cursor-pointer"}>Login</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Certificate Verify Tab */}
            <TabsContent value="certificateVerify">
              <Card className={"bg-gradient-to-r from-rose-100 via-purple-100 to-teal-100"}>
                <CardHeader>
                  <CardTitle>Certificate Verification</CardTitle>
                  <CardDescription>
                    Enter certificate number to verify authenticity.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="certificateNo">Certificate Number</Label>
                    <Input
                      id="certificateNo"
                      {...register("certificateNo", {
                        required: "Certificate Number is required",
                      })}
                      placeholder="Enter Certificate Number"
                      className="border-black/10 border-2"
                    />
                    {errors.certificateNo && (
                      <p className="text-sm text-red-500">
                        {errors.certificateNo.message}
                      </p>
                    )}
                  </div>
                </CardContent>
                <CardFooter className={"flex justify-center"}>
                  <Button type="submit" className={"cursor-pointer"}>Verify</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </form>
      </motion.div>

      {/* Animation pattern */}
      <Animation />
    </div>
  );
}

const Animation = () => {
  return (
    <>
      <div className="circles">
        <div className="circle text-white text-center" />
        <div className="circle text-white text-center" />
        <div className="circle text-white text-center" />
        <div className="circle text-white text-center" />
        <div className="circle text-white text-center" />
        <div className="circle text-white text-center" />
        <div className="circle text-white text-center" />
        <div className="circle text-white text-center" />
        <div className="circle text-white text-center" />
        <div className="circle text-white text-center" />
      </div>
    </>
  );
};
