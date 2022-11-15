import { useDispatch, useSelector } from "react-redux";
import { addCustomersAction, removeCustomersAction } from "./store/customersReducer";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  console.log(cash);

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash});
  }

  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash});
  }

  const addCustomers = (name) => {
    const customer = {
      name,
      id: Date.now()
    }

    dispatch(addCustomersAction(customer))
  }

  const removeCustomer = (id) => {
    dispatch(removeCustomersAction(id));
  }

  return (
    <div className="App">
      <div style={{ fontSize: 28 }}>{cash}</div>
      <div style={{display: 'flex'}}>
        <button onClick={() => addCash(+prompt())}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        <button onClick={() => addCustomers(prompt())}>Добавить пользователя</button>
      </div>
      {customers.length > 0 ?
        <div>
          {customers.map((customer, i) => 
              <div key={i.toString()} onClick={() => removeCustomer(customer.id)}>
                {customer.name}
              </div>
            )}
        </div>:
        <div>
          Пользователи отсутвуют!
        </div>
    }
    </div>
  );
}

export default App;
