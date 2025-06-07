import Dinesh from './dinesh.js';

function Vishnu(monesh) {
    const name = monesh.name || 'Guest';
  return (
    <div className="Vishnu">
    Vishnu's React App
    <p>Welcome to {name}.</p>
    <p>Age: {monesh.age}</p>
    <Dinesh authValue={monesh.authValue} />
    </div>
  );
}

export default Vishnu;
