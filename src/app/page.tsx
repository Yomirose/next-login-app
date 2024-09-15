import { redirect } from 'next/navigation';
// import { useState, useEffect } from 'react';

export default function Home() {
    // const [userData, setUserData] = useState(null);

  redirect('/login'); // Automatically redirect to the login page
  // return null;
}

