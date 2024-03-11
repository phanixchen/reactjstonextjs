// Contact1.js
import React, { useState, useEffect } from 'react';

function Contact1() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);
  
  const fetchItems = async () => {
    try {
      // Fetching data from a mock API
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <div>This is the Contact page</div>
      <ul>
        {items.map(item => (
          <li key={item["id"]}>{item["title"]}</li>
        ))}
      </ul>
    </div>
  );
}

export default Contact1;
