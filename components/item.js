import Image from 'next/image';

export default function Item({ name, picture, description, price }) {
   return (
      <div className="items">
         <h2>{name}</h2>
         <Image className="iranImage" src={picture} width={150} height={150} />
         <br />
         <p>{description}</p>
         <h2>{price}</h2>
         <button className="button">Add to cart</button>
      </div>
   );
}
