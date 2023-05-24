import React, { useEffect, useRef, useState } from "react";

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickScreen = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickScreen);

    return () => {
      document.removeEventListener("mousedown", handleClickScreen);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <form>
        <input placeholder="Name" type="text" />
        <input placeholder="Country" type="text" />
      </form>
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          District
        </button>
      {isOpen && (
        <div className="dropdown-menu">
          <Dropdown text="Chennai">
            <SubDropdown text="Alandur" />
            <SubDropdown text="Ambattur" />
            <SubDropdown text="Aminjikarai" />
            <SubDropdown text="Egmore" />
          </Dropdown>
          <Dropdown text="	Chengalpattu">
            <SubDropdown text="Vandalur" />
            <SubDropdown text="Pallavaram" />
            <SubDropdown text="Cheyyur" />
            <SubDropdown text="Thiruporur" />
          </Dropdown>

          <Dropdown text="Coimbatore" />
          <Dropdown text="Cuddalore" />
        </div>
      )}
    </div>
  );
};

const Dropdown = ({ text, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-item">
      <button className="dropdown-item-toggle" onClick={toggleSubDropdown}>
        {text}
      </button>
      {isOpen && <div className="sub-dropdown-menu">{children}</div>}
    </div>
  );
};

const SubDropdown = ({ text }) => {
  return (
    <div className="sub-dropdown-item " >
      {text}
    </div>
  );
};

export default Form;
