import React from 'react';

const Modal = ({ isOpen, onClose, values }) => {
  if (!isOpen) return null;

  const getLabel = (key) => {
    const labels = {
      section1Input1: "Ko’rsatuv nomi",
      section1Select1: "Telekanal",
      section1Select2: "Bo’lim",
      section1Select3: "Bob",
      section2Select1: "Turkumi",
      section2Select2: "Turi",
      section2Select3: "Tasvirga olish kuni",
      section3Select: "Tasvirga olish vaqti",
      section4Comment: "Ko’zlangan maqsad",
      section5Comment: "Mahsulotning mazmuni",
      section6Comment: "Mahsulotning maqsadi",
      section7Comment: "Tasvirga olinadigan obyektlar va hamkorlar",
      section9Select1: "Bosh muxarrir",
      section9Select2: "Ko’rsatuv muallifi",
      section9Select3: "Ko’rsatuv rejissyori",
      endTime: "Tugash vaqti"
    };
    return labels[key];
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Hujjat ma’lumotlari</h2>
        <button onClick={onClose}>X</button>
        <div className="modal-body">
          {Object.keys(values).map((key) => (
            <div key={key} className="modal-item">
              <strong>{getLabel(key)}:</strong> {values[key]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
