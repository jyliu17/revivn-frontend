import React, {useEffect, useState} from 'react'


const Tickets = () => {


  const [tickets, setTickets] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/tickets`)
      .then((r) => r.json())
      .then((obj) => {
        setTickets(obj)
      }
      );
  }, []);
  const Tix = tickets.map(ticket =>{
    return <div><span> 
      Ticket Number: {ticket.id} <br></br>Date: {ticket.date} <br></br>
                      Location:{ticket.location} <br></br>Status: {ticket.status} </span> </div>
  })
  return (
    <div>
      <h3>
        "My Tickets"
        {Tix}
      </h3>
    </div>
  )
}

export default Tickets

