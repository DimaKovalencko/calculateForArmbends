import React, {useEffect, useState} from 'react';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import Text from "../components/Text";
import LayoutSelect from "../components/Layouts/LayoutSelect";
import LayoutCheckbox from "../components/Layouts/LayoutCheckbox";
import DisplayResult from "../components/DisplayResult";
import { addition } from "../constants/constants";
import { getPricePlayer } from "../functions/getPricePlayer";

import './App.css';

function App() {
  const [countPlayer, setCountPlayer] = useState<number>(0);
  const [isTheyCreate, setIsTheyCreate] = useState<boolean>(false)
  const [isStartGear, setIsStartGear] = useState<boolean>(false);
  const [isScript, setIsScript] = useState<boolean>(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalAmountOne, setTotalAmountOne] = useState(0);
  const pricePlayer = getPricePlayer(countPlayer, isTheyCreate);

  // const calculate = () => {
  //
  // }

  useEffect(() => {
    const resultGear = isStartGear ? countPlayer * addition : 0
    const resultScript = isScript ? countPlayer * addition : 0
    const sum = resultGear + resultScript
    setTotalAmount( countPlayer * pricePlayer + resultGear + resultScript)
    setTotalAmountOne(sum / countPlayer + pricePlayer)
  })

  return (
      <div className="wrapper">
        <Paper elevation={3} >
          <div className="content">
            <LayoutSelect
                header={"Количество игроков"}
                name={"Кол-во"}
                setCountPlayer={setCountPlayer}
                pricePlayer={pricePlayer}
                countPlayer={countPlayer}
            />
            <LayoutCheckbox
                header={"Сделаете текстуру повязки сами"}
                checked={isTheyCreate}
                setChecked={setIsTheyCreate}
            />
            <Text text={"дополнения:"} />
            <LayoutCheckbox
                header={"Стартовая одежда"}
                title={
                    "НЕЛЬЗЯ выбрать: курточку больше чем на 30 слотов, " +
                    "штаны больше чем на 20 слотов, перчатки, кобуру и военную одежду." +
                    "Можно выбрать любые ботинки, любой головной убор."
                }
                checked={isStartGear}
                setChecked={setIsStartGear}
            />
            <LayoutCheckbox
                header={"Только для ваших людей"}
                title={
                    "Повязку смогут надеть только ваши друзья (те кто оплатил), " +
                    "если повязку попытается надеть незнакомый человек то она станет обычной."
                }
                checked={isScript}
                setChecked={setIsScript}
            />
            <div className="calculate">
              <Text text={"*цены указаны за одного человека"} uppercase={false} />
            </div>
          </div>
        </Paper>
        <div className="display_wrapper">
          { totalAmount ?
              <DisplayResult header={"Общая сумма:"} result={totalAmount} /> : ""}
          { totalAmountOne ?
              <DisplayResult header={"Cумма за одного:"} result={totalAmountOne} /> : ""}
        </div>
      </div>
  );
}

export default App;
