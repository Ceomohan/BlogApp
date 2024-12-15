import React from 'react'
import Banner from './Banner'
import PostCards from '../blogs/PostCards'
import Categeroy from './Categeroy'

const Home = () => {
  return (
    <div>
      <main className="mt-10">
      {/* banner */}
      <Banner />

      <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
        {/* post cards */}
        <PostCards />

        {/* right sidebar */}
         <Categeroy />

      </div>
    </main>
    </div>
  )
}

export default Home