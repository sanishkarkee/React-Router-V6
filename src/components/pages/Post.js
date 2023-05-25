import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

//NOTE: query parameter : url ma ? mark pachi right side ko user le input gareko part ,example "http://localhost:3000/post/mobile/8888?price=1000 ".. yo case ma price=1000

const Post = () => {
  let { category, id } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  // "http://localhost:3000/post/mobile/8888?price=1000" use this for checking
  console.log(searchParams);

  // single query parameter get garna lai
  console.log(searchParams.get('price'));

  // multiple parameter seperated by '&' get garna lai..for this use link "http://localhost:3000/post/mobile/8888?price=1000&sort=ascending"
  console.log(searchParams.get('sort'));

  return (
    <>
      <h1>Post Page - {category}</h1>
      <h1>Post with ID- {id}</h1>
    </>
  );
};

export default Post;
