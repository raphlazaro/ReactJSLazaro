import React from 'react';
import Layout from '../components/Layout';
import HobbiesCarousel from '../components/CarouselHobbies';
import CardHobbies from '../components/CardHobbies';
import '../styles/Hobbies.css';

export default function Hobbies() {
  const carouselImages = [
    "../images/museums.png",
    "../images/digital.png",
    "../images/games.png",
  ];

  return (
    <Layout>
      <div className="hobbies-container">
        <HobbiesCarousel images={carouselImages} />

        <h2 className="hobbies-txt">HOBBIES</h2>
        <p className="hobbies-paragraph">The following information that you will see in this page are my hobbies, which consists of online games, digital editing, rig building and going out with friends.</p>
        <div className="hobbies-card-container">
          <CardHobbies title="ONLINE GAMES" content="I play online games such as Dota 2, Honkai Star Rail, and Tekken 8" />
          <CardHobbies title="DIGITAL EDITING" content="I use Adobe Photoshop and Illustrator for editing." />
          <CardHobbies title="RIG BUILDING" content="I create custom builds and laptop adjustments." />
          <CardHobbies title="GOING OUT WITH FRIENDS" content="I like going to different coffee shops, finding new places to chill out, and visit museums that are far from the metro." />
        </div>
      </div>
    </Layout>
  );
}
