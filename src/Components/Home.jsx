import image from '../download.jpg'
const Home = () => {
    return ( 
        <main>
            <img src={image} alt="image" className='absolute object-cover w-full h-full'/>
            <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'><h1 className='text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name'>aloha, i'm kapehe</h1></section>
        </main>
    );
}
 
export default Home;