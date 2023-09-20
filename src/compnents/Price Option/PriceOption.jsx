import PropTypes from 'prop-types';

export default function PriceOption({option}) {
    const{name, price, features} = option
  return (
    <div className='bg-green-300 py-9 px-6 text-center gap-12 space-y-5 rounded-lg'>
        <h2 className='text-3xl font-bold'>{name}</h2>
        <h2>{features}</h2>
        <h2 className='my-4 text-3xl font-extrabold'>${price}</h2>
        <button className=' bg-green-700 px-7 py-2 w-full rounded-lg text-white text-xl font-semibold'>Explore More</button>
    </div>
  )
}
PriceOption.propTypes ={
    option:PropTypes.object
}