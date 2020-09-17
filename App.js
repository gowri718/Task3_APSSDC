import React from 'react';
import logo from './logo.svg';
import './App.css';
import gauri from './gauri.jpg';


import { CardView } from 'react-card-with-image';
import 'react-card-with-image/dist/index.css';


const App = () => {
  const items = [
    {
      id: 1,
      header: 'Mahir Sehagel',
      description:
   			'MailId: mahir416@gmail.com; Contact:7852963633', 
      image: 'image-src'
    },
    {
      id: 2,
      header: 'Technical Knowledge',
      description: 'Languages: C, C++, JAVA, Python; Web: HTML, CSS, JS, REACTJS' ,
      image: 'image-src'
    },
    {
      id: 3,
      header: 'Workshops that I have participated',
      description:
        'UI/UX, Web-development, HTML5 & CSS3 with reactjs, Android, Ethical Hacking',
      image: 'image-src'
    },
    {
      id: 4,
      header: 'Hobbies',
      description:
        'Singing, Painting',
      image: 'image-src'
    },
    {
      id: 5,
      header: 'Objective',
      description:
        'Looking for an internship program in a company where I could learn under working professional to gain knowledge and to improve my skills.',
      image: 'image-src'
    }
  ]

  

  return (
    <CardView
      items={items}
      activeColor='#000'
      imageHeight='650px'
      imageWidth='800px'
    />
  )

}
export default App;


