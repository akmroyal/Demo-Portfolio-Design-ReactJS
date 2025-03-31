import React, { useState } from 'react'
import email from '../assets/image/EmailQR.png'
import linkedIn from '../assets/image/LinkedInQR.png'
import github from '../assets/image/GithubQR.png'
import CopyDialog from './CopyDialog'
import { TfiEmail } from 'react-icons/tfi'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'


const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLink, setSelectedLink] = useState("");
    const [selectedIcon, setSelectedIcon] = useState(null);

    const qrCodes = [
        { title: "Email", qrImg: email, link: "ashutosh.maurya2285@gmail.com", icon: <TfiEmail /> },
        { title: "LinkedIn", qrImg: linkedIn, link: "https://www.linkedin.com/in/ashu-maurya-9026xxxx/", icon: <BsLinkedin /> },
        { title: "GitHub", qrImg: github, link: "https://github.com/akmroyal", icon: <FaGithub /> },
    ];

    const handleOpenDialog = (link, icon) => {
        setSelectedLink(link);
        setSelectedIcon(icon);
        setIsOpen(true);
    };
    return (
        <div className='mt-8 text-gray-700 px-32'>
            <div className="flex justify-around">
                {qrCodes.map((qr, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center cursor-pointer"
                        onClick={() => handleOpenDialog(qr.link, qr.icon)}
                    >
                        <img src={qr.qrImg} className="w-[6vw]" alt={qr.title} />
                        <h1 className="font-base subHeading-font">{qr.title} :</h1>
                    </div>
                ))}
            </div>

            {/* Copy Dialog Component */}
            <CopyDialog isOpen={isOpen} setIsOpen={setIsOpen} link={selectedLink} icon={selectedIcon} />
            <div className='border-b-3 border-[#222222] my-8 py-1 flex justify-between items-center'>
                <div className='flex gap-8 text-xl heading-font footer-nav'>
                    <a href='#'>Home</a>
                    <a href='#'>Projects</a>
                    <a href='#'>Snapshots</a>
                    <a href='#'>Contact</a>
                </div>
                <p className='flex subHeading-font tracking-tighter font-semibold text-sm gap-1.5'>&copy; 2025 : Framed by <span className='text-[#509afb] underline hover:text-gray-700 cursor-pointer'>Akm Royal</span> & inspired by<a href="https://www.jiejoe.com/" className='text-[#509afb] underline hover:text-gray-700 cursor-pointer' target='_blank'>JieJoe</a> </p>
            </div>
        </div>
    )
}

export default Footer
