import Navbar from "@/components/modules/navbar/Navbar";
import Banner from "@/components/templates/index/banner/Banner";
import Latest from "@/components/templates/index/latest/Latest";
import Promote from "@/components/templates/index/promote/Promote";
import Articles from "@/components/templates/index/articles/Articles";
import Footer from "@/components/modules/footer/Footer";
import Register from "@/components/templates/login-register/Register";
import Login from "@/components/templates/login-register/Login";
import Sms from "@/components/templates/login-register/Sms";
export default function Home() {
  return (
   <>
   <Navbar />
   <Banner />
   <Latest />
   <Promote />
   <Articles />
   <Footer />
   <Register />
   <Login />
   <Sms />
   </>
  )
}
