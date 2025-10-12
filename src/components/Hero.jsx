

function Hero() {
  return (
        <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16 px-4 flex flex-col items-center justify-center">
        
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-secondary-500 text-center">Welcome to Gur Academy</h1>
            
            <p className="text-lg md:text-2xl mb-8 text-center max-w-2xl">A blog website dedicated to teaching history for students and aspirants of all levels.</p>
            
            <div className="flex gap-4 flex-wrap justify-center">
                <a href="/classes/6-12" className="px-6 py-2 rounded-md bg-secondary-500 text-primary-900 font-semibold hover:bg-secondary-300 transition-colors duration-200">Explore Classes</a>
                <a href="/blogs" className="px-6 py-2 rounded-md bg-neutral-100 text-primary-700 font-semibold hover:bg-secondary-500 hover:text-primary-900 transition-colors duration-200">Read Blogs</a>
                <a href="/notes" className="px-6 py-2 rounded-md bg-primary-700 text-white font-semibold hover:bg-secondary-500 hover:text-primary-900 transition-colors duration-200">Get Notes</a>
            </div>
        </section>
  );
}
export default Hero;