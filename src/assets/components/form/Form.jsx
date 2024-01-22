import { useState } from "react";

const Form = () => {
  const [kontostand, setKontostand] = useState(0);
  const [eingabeBetrag, setEingabeBetrag] = useState('');

  const handleEinzahlen = () => {
    if (eingabeBetrag) {
      const betrag = parseFloat(eingabeBetrag);
      setKontostand(Kontostand => Kontostand + betrag);
      setEingabeBetrag('');
    }
  };

  const handleAuszahlen = () => {
    if (eingabeBetrag) {
      const betrag = parseFloat(eingabeBetrag);
      setKontostand(Kontostand => Kontostand - betrag);
      setEingabeBetrag('');
    }
  };

  return (
    <div>
      <h1>Kontostand: {kontostand} €</h1>
      <input
        type="number"
        value={eingabeBetrag}
        onChange={(e) => setEingabeBetrag(e.target.value)}
      />
      <button onClick={handleEinzahlen}>Einzahlen</button>
      <button onClick={handleAuszahlen}>Auszahlen</button>
    </div>
  );
};

export default Form;



