const Navbar = ()=>{
    return(
        <nav id="nav"className="flex justify-between items-center pt-5 bg-white ">
            <div className="flex justify-between">
        <div className="italic text-3xl font-bold mx-20">briefly.</div>
        <div className="flex space-x-6 pl-10">
          <a href="#why-briefly" className="text-gray-700 mt-1  hover:text-purple-800 hover:text-xl">Why briefly?</a>
          <a href="#features" className="text-gray-700 mt-1 hover:text-purple-800 hover:text-xl">Features</a>
          <a href="#contact-us" className="text-gray-700 mt-1 hover:text-purple-800 hover:text-xl">Contact Us</a>
        </div>
        </div>
        <div className="flex space-x-4 mx-20">
          <button href="#pricingplans" className=" border border-black	px-14 py-2 rounded-3xl mx-5 hover:bg-purple-600 hover:scale-110 ">Pricing</button>
          <button className="border border-black px-4 py-2 rounded-3xl bg-purple-500  hover:bg-purple-600 hover:scale-110">Login</button>
          <button className="border border-black px-4 py-2 rounded-3xl bg-purple-500  hover:bg-purple-600 hover:scale-110">Sign Up</button>
        </div>
      </nav>

    )
}
export default Navbar;