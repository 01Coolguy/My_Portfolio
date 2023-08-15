import Link from "next/link"
import {RiInstagramLine,RiFacebookLine,RiLinkedinLine,RiTwitterLine,RiGithubLine} from 'react-icons/ri'

const Socials = () => {
  return( <div className="flex items-center gap-x-5 text-lg">

    <Link href={"https://twitter.com/GujjarPrasoon"} className="hover:text-accent transition-all duration-300 ">
      <RiTwitterLine/>
      </Link>
    <Link href={"https://instagram.com/prasoonsingh.__?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"} className="hover:text-accent transition-all duration-300 ">
      <RiInstagramLine/>
      </Link>

    <Link href={"https://www.facebook.com/kumarprasoon.gujjar"} className="hover:text-accent transition-all duration-300 ">
      <RiFacebookLine/></Link>
    <Link href={"https://www.linkedin.com/in/prasoon-kumar-343946248/"} className="hover:text-accent transition-all duration-300 ">
      <RiLinkedinLine/></Link>
      <Link href={"https://github.com/01Coolguy"} className="hover:text-accent transition-all duration-300 ">
      <RiGithubLine/></Link>

  </div>
  
  );
};

export default Socials;
