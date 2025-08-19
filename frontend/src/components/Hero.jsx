

function Hero() {
  return (
        <section className="bg-gradient-to-r from-[#0a2342] to-[#19376d] text-white py-16 px-4 flex flex-col items-center justify-center">
        
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#f7c873] text-center">Welcome to Gur Academy</h1>
            
            <p className="text-lg md:text-2xl mb-8 text-center max-w-2xl">A blog website dedicated to teaching history for students and aspirants of all levels.</p>
            
            <div className="flex gap-4 flex-wrap justify-center">
                <a href="/classes/6-12" className="px-6 py-2 rounded-md bg-[#f7c873] text-[#0a2342] font-semibold hover:bg-[#ffe4b5] transition-colors duration-200">Explore Classes</a>
                <a href="/blogs" className="px-6 py-2 rounded-md bg-white text-[#19376d] font-semibold hover:bg-[#f7c873] hover:text-[#0a2342] transition-colors duration-200">Read Blogs</a>
                <a href="/notes" className="px-6 py-2 rounded-md bg-[#19376d] text-white font-semibold hover:bg-[#f7c873] hover:text-[#0a2342] transition-colors duration-200">Get Notes</a>
            </div>
        </section>
  );
}
export default Hero;