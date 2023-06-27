import React, { useState } from "react";

const NavBar = ({ onPrecedent, onSuivant }) => {
  return (
    <div>
      <button onClick={onPrecedent}>Précédent</button>
      <button onClick={onSuivant}>Suivant</button>
    </div>
  );
};

export default NavBar;