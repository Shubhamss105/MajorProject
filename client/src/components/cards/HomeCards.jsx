import React from 'react'
import { useSelector } from 'react-redux';

const HomeCards = () => {

  const { information } = useSelector((state) => state.getDetails);

  return (
    <>
    <div className='flex flex-col'>
    <div className='grid grid-cols-4 gap-4'>
        <div className=' outline outline-offset-2 outline-1 rounded'>
            <img className='p-3' src="https://icons8.com/icon/17949/google" alt="" />
        </div>
        <div className=' outline outline-offset-2 outline-1 rounded'>
            <img className='p-3 ' src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" />
        </div>
        <div className=' outline outline-offset-2 outline-1 rounded'>
            <img className='p-3' src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" />
        </div>
        <div className=' outline outline-offset-2 outline-1 rounded'>
            <img className='p-3' src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" />
        </div>
    </div>
     <div className='flex justify-content-center align-items-center mt-5 p-5'>
        <h1 className='text-3xl font-semibold'>Find Comapnies That deserve you!</h1>
     </div>

    <div className="container my-8 mx-auto px-4 md:px-12">
    <div className="flex flex-wrap -mx-1 px-10 lg:-mx-4">
       


        {
          information.map(data=>(
            <>
            <div className="my-1 px-4 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 hover:scale-110 delay-100 md:p-3 sm:p-5">

<article className="overflow-hidden rounded-lg shadow-lg">

    <a href="/">
        <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?Google"/>
    </a>

    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="/">
                {data.company}
            </a>
        </h1>
        <p className="text-grey-darker text-sm">
            11/1/19
        </p>
    </header>

    <footer className="flex items-center justify-between leading-none p-2 md:p-4 sm:p-5">
        <a className="flex items-center no-underline hover:underline text-black" href="/">
            <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?Google"/>
            <p className="ml-2 text-sm">
                Read More
            </p>
        </a>
        <a className="no-underline text-grey-darker hover:text-red-dark" href="/">
            <span className="hidden">Like</span>
            <i className="fa fa-heart"></i>
        </a>
    </footer>

</article>


</div>
            </>
          ))
        }

     </div>
</div>

</div> 
</>
  )
}

export default HomeCards