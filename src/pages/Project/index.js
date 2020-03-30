import React from 'react';
import { useParams } from "react-router-dom";

// import { Container } from './styles';

export default function Project() {
  let { id } = useParams();
  return (
    <div>
      <h1>
        {id}
      </h1>
    </div>
  );
}
