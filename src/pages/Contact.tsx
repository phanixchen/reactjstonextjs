import React from 'react';

function Contact({ data }: { data: DataItem[] }) {
  return (
    <div>
      <div>This is the Contact pageXXX</div>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.id}. {item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    // 從外部 API 取得資料
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('取得資料時發生錯誤:', error);
    return {
      props: {
        data: [],
      },
    };
  }
}

interface DataItem {
  id: number;
  title: string;
 }

export default Contact;
