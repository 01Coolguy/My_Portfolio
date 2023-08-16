import React from 'react';
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image 
        src="/My_project.png"
        width={737} 
        height={678}
        alt="Your Alt Text Here"
        className="translate-z-0 w-full h-full"
        loading="lazy" // Added lazy loading
      />
    </div>
  );
};

export default Avatar;
