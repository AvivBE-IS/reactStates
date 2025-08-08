function Company(props) {
  return (
    <div className="company">
      <h2>{props.name}</h2>
      <p>Revenue: ${props.revenue}B</p>
    </div>
  );
}

export default Company;
