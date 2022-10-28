import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Main from './components/Main';
import TransectionMore from './components/TransactionMore';
import Trasactions from './components/Transactions';
import { T } from "./components/Transactions/types";

type TArr = Array<T>;

function App() {
  const [balance, setBalance] = useState<number>(0);
  const [transactions, setTransaction] = useState<TArr>([]);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main balance={balance} />} />
        <Route path='transactions' element={
          <Trasactions
            data={transactions}
            setTransaction={setTransaction}
          />
        } />
        <Route path='/transaction/:id' element={
          <TransectionMore
            data={transactions}
            setTransaction={setTransaction}
          />} />
      </Routes>
    </div>
  );
}

export default App;
