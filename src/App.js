import React, { useState } from "react";
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Nav from "./components/nav";
import Home from "./pages/home";
import TemporaryDrawer from "./components/drawer";
import Footer from "./components/footer";
import PizzaPage from "./pages/pizza-page";
import SandwichPage from "./pages/sandwiches-page";
import PastaPage from "./pages/pasta-page";
import DesertPage from "./pages/desert-page";
import ONama from "./pages/o-nama";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const [orderTotal, setOrderTotal] = useState(0);
  const [orderAmount, setOrderAmount] = useState(0);
  const [orderSize, setOrderSize] = useState(0);
  const [orderList, setOrderList] = useState([]);

  const addOrder = (ord, amount, size) => {
    const parsed = parseInt(ord.cena * amount || ord.cena);
    let order = {
      naziv: ord.naziv,
      cena: parsed,
      velicina: !size ? "manja" : size,
      kolicina: !amount ? "1" : amount,
    };

    setOrderList(orderList.concat(order));
    setOrderTotal(orderTotal + parsed);
  };

  const selectSize = (size) => {
    setOrderSize(size);
  };

  const selectAmount = (amount) => {
    setOrderAmount(amount);
  };

  console.log(orderList);
  console.log(orderSize);

  return (
    <div>
      <HashRouter>
        <Nav
          orderTotal={orderTotal}
          orderList={orderList}
          setOpenDrawer={setOpenDrawer}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                selectSize={selectSize}
                selectAmount={selectAmount}
                addOrder={addOrder}
              />
            )}
          />

          <Route
            exact
            path="/pizza"
            render={() => (
              <PizzaPage
                selectSize={selectSize}
                selectAmount={selectAmount}
                addOrder={addOrder}
              />
            )}
          />
          <Route
            exact
            path="/paste"
            render={() => (
              <PastaPage
                selectSize={selectSize}
                selectAmount={selectAmount}
                addOrder={addOrder}
              />
            )}
          />
          <Route
            exact
            path="/sendvici"
            render={() => (
              <SandwichPage
                selectSize={selectSize}
                selectAmount={selectAmount}
                addOrder={addOrder}
              />
            )}
          />
          <Route
            exact
            path="/deserti"
            render={() => (
              <DesertPage
                selectSize={selectSize}
                selectAmount={selectAmount}
                addOrder={addOrder}
              />
            )}
          />
          <Route exact path="/o-nama" render={() => <ONama />} />
        </Switch>
      </HashRouter>

      <TemporaryDrawer
        orderList={orderList}
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        orderTotal={orderTotal}
        setOrderTotal={setOrderTotal}
      />

      <Footer />
    </div>
  );
}

export default App;
