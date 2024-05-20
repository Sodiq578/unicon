// Documents.js
import React from 'react';
import './all.css';

const Documents = () => {
  return (
    <div className="container">
      <h2>Gonorar Hujjatlar</h2>
      <section>
        <h3>Hujjat ma'lumotlari</h3>
        <div className="label-input-group">
          <label htmlFor="documentNumber">Hujjat raqami:</label>
          <input type="text" id="documentNumber" placeholder="PPP4867737024" />
        </div>
        <div className="label-input-group">
          <label htmlFor="teleRadioChannel">Teleradio kanal:</label>
          <select id="teleRadioChannel">
            <option value="TRT">zo'r tv</option>
            <option value="BBC">my5</option>
            <option value="CNN">yoshlar</option>
            <option value="NBC">navo</option>
          </select>
        </div>
        <div className="label-input-group">
          <label htmlFor="broadcastName">Ko’rsatuv nomi:</label>
          <input type="text" id="broadcastName" placeholder="Trik afsonalar bilan suhbat" />
        </div>
        <div className="label-input-group">
          <label htmlFor="creationDate">Hujjat yaratilgan sana:</label>
          <input type="text" id="creationDate" value="26.01.2024" readOnly className="read-only-input" />
        </div>
      </section>
    </div>
  );
};

export default Documents;
