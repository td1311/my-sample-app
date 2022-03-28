import React from 'react';
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../redux/hook';
import { increment, decrement } from '../../services/counter/counterSlice';

export function Home() {  

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => {}}
        >
          Increment
        </button>
        
        <button
          aria-label="Decrement value"
          onClick={() => {}}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}