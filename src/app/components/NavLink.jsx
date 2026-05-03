import Link from "next/link"

const NavLink = ({href, title}) => {
    return (
        <Link
        href={href}
        className="block rounded py-2 pl-3 pr-4 text-[#ADB7BE] drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] sm:text-xl md:p-0 hover:text-white"
        >
        {title}
        </Link>
    )
}

export default NavLink