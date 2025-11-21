import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react'





const ContactItemData = [
    {
        title: 'Visit Our Store',
        subtitle: 'salem AK mangoes, Airport Road, Kamalapuram, Salem - 636309',
        subtitle2: 'Tamilnadu, India',
        icon: (
            <MapPin className="h-6 w-6 text-white group-hover:text-primary transition-colors"/>
        )
    },
    
    {
        title: 'Call us',
        subtitle: '+91 63856 72895',
        icon: (
            <Phone className="h-6 w-6 text-white group-hover:text-primary transition-colors"/>
        )
    },
  
    {
        title: 'Email us',
        subtitle: 'salem.ak.mango@gmail.com',
        icon: (
            <Mail className="h-6 w-6 text-white group-hover:text-primary transition-colors"/>
        )
    },
];
const FooterTop = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 bg-[#5A3E1B]">
      {ContactItemData.map((item) => (
        <div key={item.title} className='flex items-center-safe justify-center gap-3 group p-4 transition-colors'>
            {item.icon}
            <div>
                <h3 className='font-semibold text-[#ffcc33] group-hover:text-[#99cc33]'>
                    {item.title}
                </h3>
            <p className='text-[#99cc33] text-sm mt-1 group-hover:text-[#ffcc33]'>
                {item.subtitle}
               
            </p>
             <p className='text-[#99cc33] text-sm mt-1 group-hover:text-[#ffcc33]'>
               
                {item.subtitle2}
            </p>
            </div>
        </div>
      ))}
    </div>
  );
};

export default FooterTop
