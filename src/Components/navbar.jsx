import React from 'react';

function Navbar() {
  return (
    <nav style={{ backgroundColor: "white", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem" }}>
      <div style={{ fontWeight: "bold" , paddingLeft:"40px"}}><span className='gradient'>EDYODA</span></div>
      <div>Hi test learners</div>
    </nav>
  );
}

export default Navbar;
