import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa";


function Footer(){

return (

<footer className="bg-black py-16 text-gray-400">


<div className="max-w-7xl mx-auto px-6">


<div className="grid md:grid-cols-4 gap-10">


<div>

<h2 className="text-white text-3xl font-bold">

PenCraft Bank

</h2>


<p className="mt-5 leading-7">

Modern digital banking solutions
built for a global financial future.

</p>

</div>




<div>

<h3 className="text-white font-semibold mb-5">

Banking

</h3>

<p>Accounts</p>
<p>Cards</p>
<p>Transfers</p>
<p>Security</p>

</div>





<div>

<h3 className="text-white font-semibold mb-5">

Company

</h3>

<p>About Us</p>
<p>Careers</p>
<p>Contact</p>
<p>Support</p>

</div>





<div>

<h3 className="text-white font-semibold mb-5">

Language

</h3>


<div className="flex items-center gap-2">

<FaGlobe/>

English / Español

</div>


<div className="flex gap-4 mt-6 text-xl">


<FaFacebook/>

<FaTwitter/>

<FaLinkedin/>

<FaInstagram/>


</div>


</div>


</div>




<div className="
border-t
border-slate-800
mt-12
pt-8
text-center
">


© {new Date().getFullYear()} JP Morgan Chase.
All Rights Reserved.


</div>


</div>


</footer>


);

}


export default Footer;