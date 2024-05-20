import React, { useState, useEffect } from "react";

const AddDocument = () => {
  const [values, setValues] = useState({
    section1Input1: "",
    section1Input2: "",
    section1Select1: "",
    section1Select2: "",
    section1Select3: "",
    section1Select4: "",
    section1Select5: "",
    section2Input1: "",
    section2Input2: "",
    section2Select1: "",
    section2Select2: "",
    section2Select3: "",
    section3Comment: "",
    section3Select: "",
    section4Comment: "",
    section4Select: "",
    section5Select1: "",
    section5Select2: "",
    section5Select3: "",
  });

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
    return (filledSections / 18) * 100; // 18 bo'lim mavjud
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--progress",
      `${calculateRangeValue()}%`
    );
  }, [calculateRangeValue, values]);

  const handleSubmit = () => {
    console.log("Submitted values:", values);
  };

  const handleEdit = () => {
    console.log("Editing document");
  };

  const handleSave = () => {
    console.log("Saving document");
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
        <div className="form-group form-group-whan section">
          <h3 htmlFor="section1">Tasvirga olish rejasi</h3>
          <label htmlFor="section1">
            Ko’rsatuv namoyish etiladigan telekanalni tanlang
          </label>
          <div className="section-row">
            <select name="section1Select3" onChange={handleChange}>
              <option value="">Select 3</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
            <div>
              <label>Ko’rsatuv nomini kiriting</label>
              <input
                type="text"
                id="section1Input2"
                name="section1Input2"
                placeholder="Input 2"
                value={values.section1Input2}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="section-row">
            <select name="section1Select1" onChange={handleChange}>
              <option value="">Select 1</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
            <select name="section1Select2" onChange={handleChange}>
              <option value="">Select 2</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
            <select name="section1Select4" onChange={handleChange}>
              <option value="">Select 4</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
            <select name="section1Select5" onChange={handleChange}>
              <option value="">Select 5</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
        </div>

        <div className="form-group section">
          <label htmlFor="section2">Bo'lim 2:</label>
          <div className="section-row">
            <input
              type="text"
              id="section2Input1"
              name="section2Input1"
              placeholder="Input 1"
              value={values.section2Input1}
              onChange={handleChange}
            />
            <input
              type="text"
              id="section2Input2"
              name="section2Input2"
              placeholder="Input 2"
              value={values.section2Input2}
              onChange={handleChange}
            />
          </div>
          <div className="section-row">
            <select name="section2Select1" onChange={handleChange}>
              <option value="">Select 1</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
            <select name="section2Select2" onChange={handleChange}>
              <option value="">Select 2</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
            <select name="section2Select3" onChange={handleChange}>
              <option value="">Select 3</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
        </div>
        <div className="form-group section">
          <label htmlFor="section3">Bo'lim 3:</label>
          <div className="section-row">
            <textarea
              id="section3Comment"
              name="section3Comment"
              placeholder="Comment"
              value={values.section3Comment}
              onChange={handleChange}
            />
            <select name="section3Select" onChange={handleChange}>
              <option value="">Select</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
        </div>
        <div className="form-group section">
          <label htmlFor="section4">Bo'lim 4:</label>
          <div className="section-row">
            <textarea
              id="section4Comment"
              name="section4Comment"
              placeholder="Comment"
              value={values.section4Comment}
              onChange={handleChange}
            />
            <select name="section4Select" onChange={handleChange}>
              <option value="">Select</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
        </div>
        <div className="form-group section">
          <label htmlFor="section5">Bo'lim 5:</label>
          <div className="section-row">
            <select name="section5Select1" onChange={handleChange}>
              <option value="">Select 1</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
            <select name="section5Select2" onChange={handleChange}>
              <option value="">Select 2</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
            <select name="section5Select3" onChange={handleChange}>
              <option value="">Select 3</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default AddDocument;
