import { social_links } from '@/lib/data'
import Image from 'next/image'


export default function Navbar() {
    return (
        <>
            <nav className='min-w-full fixed backdrop-blur-3xl dark:backdrop-blur-3xl backdrop-filter dark:backdrop-filter bg-opacity-5 dark:bg-opacity-30 bg-green-500  dark:bg-dark-light z-50 shadow'>
                <div className='lg:max-w-6xl lg:mx-auto lg:px-12 relative'>
                    {/* desktop menu */}
                    <div className="menu-large hidden sm:flex flex-row justify-between items-center px-8 py-4">
                        <Image
                            src="/logo.svg"
                            alt="Gerald Muvengei"
                            // className="dark:invert"
                            width={252}
                            height={56}
                            priority
                        />
                        <a href="#contact" className="contact-item border-b-2 border-b-transparent hover:text-primary hover:border-b-2 hover:border-b-primary">Contact Me_</a>
                    </div>
                    {/* mobile menu */}
                    <div className="sm:hidden flex flex-row justify-between items-center px-4 py-4">
                        <Image
                            src="/logo.svg"
                            alt="Gerald Muvengei"
                            // className="dark:invert"
                            width={216}
                            height={48}
                            priority
                        />
                        <a href="#contact" className="contact-item">
                            <Image
                                src="/menu.svg"
                                alt="Menu"
                                // className="dark:invert"
                                width={56}
                                height={56}
                                priority
                            />
                        </a>
                    </div>

                </div>
            </nav>

            <div className="socials fixed bottom-0 sm:left-2 align-middle z-10">
                <div className="icons ">
                    {
                        social_links.map((link, index) => {
                            return <a key={index} href={link.link} target='blank'><Image
                                src={link.iconPath}
                                alt={link.title}
                                className="py-4 fill-primary dark:fill-dark-light"
                                width={38}
                                height={38}
                                priority
                            /></a>
                        })
                    }
                </div>
                <div className="vertical-line mb-0 w-1 rounded-lg h-[218px] mx-auto bg-primary"></div>
            </div>
        </>
    )
}