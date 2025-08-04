import {CDN_URL} from '../config/image';

const Cards = (props) =>{
  const {resList} = props;
  const{name, cloudinaryImageId, avgRating, sla, cuisines} = resList?.info || {};
  const deliveryTime = sla?.deliveryTime;
  return(
      <div className='w-70 h-75'>
          <img className='w-75 h-45 object-cover rounded-2xl' src = {CDN_URL + cloudinaryImageId}></img>
            <div className='p-3 flex flex-col justify-center'>
              <h1 className='font-bold text-xl'>{name}</h1>
              <h2 className='text-lg font-medium flex gap-2 items-center'>Ratings: {avgRating} 
                <img className='h-2 w-2'src="https://img.icons8.com/ios-glyphs/10/full-stop--v1.png" alt="full-stop--v1"/> {deliveryTime} mins</h2>
              <h3 className='font-light'>{cuisines?.join(', ')}</h3>
            </div>
        </div>
  )
}

export default Cards;