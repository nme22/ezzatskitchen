import Image from 'next/image';

export default function Item({ name, picture, description, price }) {
   return (
      <div className="items">
         <h2>{name}</h2>
         <Image className="iranImage" src={picture} width={150} height={150} />
         <br />
         <div className="price-tag">{price}</div>
         <p>{description}</p>

         <button className="button">Add to cart</button>
      </div>
   );
}
