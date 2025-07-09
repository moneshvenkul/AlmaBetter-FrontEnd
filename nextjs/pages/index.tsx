// pages/index.js

import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>This is the homepage content.</p>

      <Image src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg" alt='Boy' width={600} height={600} />

      {/* Link to the About page */}
      <Link href="/monesh" passHref={true} legacyBehavior>
        <a>Monesh</a>
      </Link>
      
      {/* Link to the Contact page */}
      <Link href="/contact" passHref={true} legacyBehavior>
        <a>Contact Us</a>
      </Link>
    </div>
  );
};

export default HomePage;