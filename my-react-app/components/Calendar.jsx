function Calendar({ reservations }) {
  return (
    <div id="calendar">
      <h4>Calendar</h4>
      {reservations.map((r) => (
        <div key={r.name}>
          {r.name} has a reservation on {r.day} @ {r.time}
        </div>
      ))}
    </div>
  );
}

export default Calendar;
