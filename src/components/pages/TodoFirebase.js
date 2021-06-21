import React, { useEffect, useState } from 'react';
import { dbService, storageService } from '../../firebase';

function TodoFirebase() {
  const [daily, setDaily] = useState();
  useEffect(() => {
    dbService.collection('month').onSnapshot((snapshot) => {
      const dailyArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDaily(dailyArray);
    });
  }, []);
  console.log(daily);

  return <div></div>;
}

export default TodoFirebase;
