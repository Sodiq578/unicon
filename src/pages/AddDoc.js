import React, { useState } from 'react';
import jsPDF from 'jspdf';
import Modal from './Modal';

const AddDocument = () => {
  const [values, setValues] = useState({
    section1Input1: "",
    section1Select1: "",
    section1Select2: "",
    section1Select3: "",
    section2Select1: "",
    section2Select2: "",
    section2Select3: "",
    section3Select: "",
    section4Comment: "",
    section5Comment: "",
    section6Comment: "",
    section7Comment: "",
    section9Select1: "",
    section9Select2: "",
    section9Select3: "",
    endTime: ""
  });


  
  const handleSelect = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleRemoveSelect = (name) => {
    setValues({
      ...values,
      [name]: "",
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const calculateRangeValue = () => {
    const filledSections = Object.values(values).filter(
      (value) => value !== ""
    ).length;
    return (filledSections / 16) * 100; // 16 sections available
  };

  const handleSubmit = () => {
    console.log("Submitted values:", values);
  };

  const handleSaveAsPDF = () => {
    const doc = new jsPDF();
    console.log(doc)
    let y = 20;
    doc.setFont('Arial', 'normal');
    doc.setFontSize(14);
    doc.text("Ўзбекистон миллий телерадиокомпаниясининг", 105, y, { align: 'center' });
    y += 10;
    doc.text("2015 йил " + values.section3Select + ", " + values.section2Select3 + "даги, " + values.section1Select2 + " -сон буйруғига", 105, y, { align: 'center' });
    y += 10;
    doc.text("1-ИЛОВА", 105, y, { align: 'center' });
    y += 20;
    doc.text("«ТАСДИҚЛАЙМАН» " + values.section1Select1, 10, y);
    y += 10;
    doc.text("» телерадиоканали", 10, y);
    y += 10;
    doc.text("Бош муҳаррири " + values.section9Select1, 10, y);
    y += 10;
    doc.text("..................", 10, y);
    y += 10;
    doc.text("«" + values.section9Select2 + "» кўрсатуви (эшиттириши)ни  тасвирга (овоз ёзиб) олиш", 10, y);
    y += 10;
    doc.text("РЕЖАСИ", 10, y);
    y += 10;
    doc.line(10, y, 200, y);
    y += 10;
    doc.text("1. «" + values.section5Comment + "» кўрсатуви (эшиттириши)да", 10, y);
    y += 10;
    doc.text("ахамияти еритилади.", 10, y);
    y += 10;
    doc.text("2. Кўзланган максад " + values.section4Comment + " таргиб килиш", 10, y);
    y += 10;
    doc.text("3. Тасвирга овоз ёзиб) олиш ишлари " + values.section7Comment + " билан ҳамкорликда амалга оширилади.", 10, y);
    y += 10;
    doc.text("Тасвирга (овозни ёзиб) олиш куни 2024 йил " + values.section2Select3 + " соат " + values.section3Select + " дан " + values.endTime + " га қадар.", 10, y);
    y += 10;
    doc.line(10, y, 200, y);
    y += 10;
    doc.text("1. Теле-, радио махсулотнинг мазмуни", 10, y);
    y += 10;
    doc.text("2. Теле-, радио махсулотнинг мақсади.", 10, y);
    y += 10;
    doc.text("3. Теле-, радио махсулот кайси объектларда тасвирга (овоз ёзиб олиниши ва хамкор ташкилотлар ҳақида кискача маълумот", 10, y);
    y += 10;
    doc.line(10, y, 200, y);
    y += 10;
    doc.text("Кўрсатув муаллифи: " + values.section9Select2 + " (имзо, Ф.И.О.)", 10, y);
    y += 10;
    doc.text("Кўрсатув режиссёри: " + values.section9Select3 + " (имзо, Ф.И.О.)", 10, y);

    doc.save('dalolatnoma.pdf');
};



  const handleView = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  

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
    <div className="add-document">
      <h2>Gonorar Hujjat Yaratish</h2>
      <div className="form-group">
        <label htmlFor="progress">To'ldirish darajasi:</label>
        <input
          type="range"
          id="progress"
          value={calculateRangeValue()}
          readOnly
          min="0"
          max="100"
          className="animated-range"
        />
      </div>
      <div className="sections">
        {/* Bo'lim 1 */}
        <div className="form-group section">
          <h3>Tasvirga olish rejasi</h3>
          <div className="section-row">
            <div className="label-input-group">
              <label htmlFor="section1Input1">Ko’rsatuv nomini kiriting</label>
              <input
                type="text"
                name="section1Input1"
                placeholder="Input 1"
                value={values.section1Input1}
                onChange={handleChange}
                
              />
            </div>
            <div className="label-input-group">
              <label htmlFor="section1Select1">Telekanalni tanlang</label>
              <select name="section1Select1" onChange={handleChange}>
                <option value="">Yoshlar</option>
                <option value="option1">O'zbekiston</option>
                <option value="option2">Sport</option>
              </select>
            </div>
          </div>
          <h3>Mualliflik haqi koefitsenti</h3>
          <div className="section-row section-muallif">
            <div className="label-input-group">
              <label htmlFor="section1Select2">Bo’lim</label>
              <select name="section1Select2" onChange={handleChange}>
                <option value="">I bo’lim</option>
                <option value="option1">II bo’lim</option>
                <option value="option2">III bo’lim</option>
              </select>
            </div>
            <div className="label-input-group">
              <label htmlFor="section1Select3">Bob</label>
              <select name="section1Select3" onChange={handleChange}>
                <option value="">II bob</option>
                <option value="option1">III bob</option>
                <option value="option2">IV bob</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bo'lim 2 */}
        <div className="form-group section">
          <h3>Tasvirga olish vaqti</h3>
          <div className="section-row">
            <div className="label-input-group">
              <label htmlFor="section2Select1">Turkumi</label>
              <select name="section2Select1" onChange={handleChange}>
                <option value="">Badiiy</option>
                <option value="option1">Hujjatli</option>
                <option value="option2">Ilmiy-ommabop</option>
              </select>
            </div>
            <div className="label-input-group">
              <label htmlFor="section2Select2">Turi</label>
              <select name="section2Select2" onChange={handleChange}>
                <option value="">Serial</option>
                <option value="option1">Film</option>
                <option value="option2">Ko'rsatuv</option>
              </select>
            </div>
          </div>
          <div className="section-row">
            <div className="label-input-group">
              <label htmlFor="section2Select3">Tasvirga olish kuni</label>
              <select name="section2Select3" onChange={handleChange}>
                <option value="">2024-01-01</option>
                <option value="option1">2024-02-01</option>
                <option value="option2">2024-03-01</option>
              </select>
            </div>
            <div className="label-input-group">
              <label htmlFor="section3Select">Tasvirga olish vaqti</label>
              <select name="section3Select" onChange={handleChange}>
                <option value="">08:00</option>
                <option value="option1">10:00</option>
                <option value="option2">12:00</option>
              </select>
            </div>
          </div>
          <div className="section-row">
            <div className="label-input-group">
              <label htmlFor="endTime">Tugash vaqti</label>
              <select name="endTime" onChange={handleChange}>
                <option value="">18:00</option>
                <option value="option1">20:00</option>
                <option value="option2">22:00</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bo'lim 3 */}
        <div className="form-group section">
          <h3>Ko’zlangan maqsad</h3>
          <textarea
            name="section4Comment"
            placeholder="Ko’zlangan maqsad haqida qisqacha yozing"
            value={values.section4Comment}
            onChange={handleChange}
          />
        </div>

        {/* Bo'lim 4 */}
        <div className="form-group section">
          <h3>Mahsulotning mazmuni</h3>
          <textarea
            name="section5Comment"
            placeholder="Mahsulotning mazmuni haqida qisqacha yozing"
            value={values.section5Comment}
            onChange={handleChange}
          />
        </div>

        {/* Bo'lim 5 */}
        <div className="form-group section">
          <h3>Mahsulotning maqsadi</h3>
          <textarea
            name="section6Comment"
            placeholder="Mahsulotning maqsadi haqida qisqacha yozing"
            value={values.section6Comment}
            onChange={handleChange}
          />
        </div>

        {/* Bo'lim 6 */}
        <div className="form-group section">
          <h3>Tasvirga olinadigan obyektlar va hamkorlar</h3>
          <textarea
            name="section7Comment"
            placeholder="Tasvirga olinadigan obyektlar va hamkorlar haqida qisqacha yozing"
            value={values.section7Comment}
            onChange={handleChange}
          />
        </div>

        {/* Bo'lim 7 */}
        <div className="form-group section">
          <h3>Mas’ul shaxslar</h3>
          <div className="section-row">
            <div className="label-input-group">
              <label htmlFor="section9Select1">Bosh muxarrir</label>
              <select name="section9Select1" onChange={handleChange}>
                <option value="">Maqsudov Q.</option>
                <option value="option1">Otabekov T.</option>
                <option value="option2">Rahimov A.</option>
              </select>
            </div>
            <div className="label-input-group">
              <label htmlFor="section9Select2">Ko’rsatuv muallifi</label>
              <select name="section9Select2" onChange={handleChange}>
                <option value="">Maqsudov Q.</option>
                <option value="option1">Otabekov T.</option>
                <option value="option2">Rahimov A.</option>
              </select>
            </div>
            <div className="label-input-group">
              <label htmlFor="section9Select3">Ko’rsatuv rejissyori</label>
              <select name="section9Select3" onChange={handleChange}>
                <option value="">Maqsudov Q.</option>
                <option value="option1">Otabekov T.</option>
                <option value="option2">Rahimov A.</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="form-group">
        <button onClick={handleSubmit}>Yaratish</button>
        <button onClick={handleView}>Ko’rish</button>
        <button onClick={handleSaveAsPDF}>PDF yuklash</button>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} values={values} />
    </div>
  );
};

export default AddDocument;
