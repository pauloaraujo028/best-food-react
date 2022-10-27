import React, { useState } from 'react'

import { data } from '../data/data'
import { categories } from '../data/data'

const Home = () => {
  const [foods, setFoods] = useState(data);

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div>
      <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center rounded-xl'>
            <h1 className='px-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>A <span className='text-orange-500'>Melhor</span></h1>
            <h1 className='px-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500'>Comida</span> Entregue</h1>
          </div>
          <img className='w-full max-h-[500px] object-cover rounded-xl' src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
        </div>
      </div>

      <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Doces Variados</p>
            <p className='px-2'>Feito para você</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Peça Agora</button>
          </div>
          <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ0fHxmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
        </div>
        {/* Card */}
        <div className='rounded-xl relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Novos Produtos</p>
            <p className='px-2'>Adicionado diariamente</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Peça Agora</button>
          </div>
          <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.unsplash.com/photo-1563778084459-859099e48677?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjcyfHxmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
        </div>
        {/* Card */}
        <div className='rounded-xl relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Variedade em Bolos</p>
            <p className='px-2'>Sabores Diversos</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Peça Agora</button>
          </div>
          <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.unsplash.com/photo-1506459225024-1428097a7e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc0fHxmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
        </div>
      </div>

      <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Produtos mais Vendidos</h1>

        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>
          {/* Filter Type */}
          <div>
            <p className='font-bold text-gray-700'>Filtrar por Tipo:</p>
            <div className='flex justify-between flex-wrap'>
              <button onClick={() => setFoods(data)}
                className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Todos</button>
              <button onClick={() => filterType('burger')}
                className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Hambúrgueres</button>
              <button onClick={() => filterType('pizza')}
                className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Pizza</button>
              <button onClick={() => filterType('salad')}
                className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Saladas</button>
              <button onClick={() => filterType('chicken')}
                className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Frango</button>
            </div>
          </div>

          {/* Filter Price */}
          <div>
            <p className='font-bold text-gray-700'>Filtrar por Preço:</p>
            <div className='flex justify-between max-w-[390px] w-full'>
              <button onClick={() => filterPrice('$')}
                className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>R$</button>
              <button onClick={() => filterPrice('$$')}
                className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>R$$</button>
              <button onClick={() => filterPrice('$$$')}
                className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>R$$$</button>
              <button onClick={() => filterPrice('$$$$')}
                className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>R$$$$</button>
            </div>
          </div>
        </div>

        {/* Display Foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
          {foods.map((item, index) => (
            <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
              <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
              <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{item.name}</p>
                <p>
                  <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Itens do menu mais bem Avaliados</h1>
        {/* Categories */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
          {categories.map((item, index) => (
            <div key={index} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center'>
              <h2 className='font-bold sm:text-xl'>{item.name}</h2>
              <img src={item.image} alt={item.name} className='w-20' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home