// import React, {Component} from 'react';
// import moment from "moment";
// import './calendar.css'

// class calendar extends Component{
//     constructor(){
//         super();
//         this.state = {

//         }
//     }

  

//     weekdayshort = moment.weekdaysShort(); //Calendar Data Fetch


//     firstDayOfMonth = ()=>{
//         let date = this.state.date;
//         let firstDay = moment(date).startOf("month").format("d");
//        console.log("firstday", firstDay);
//     }

//     componentDidMount(){
//         this.firstDayOfMonth();
//     }
//     render(){
//         console.log(moment())
//         console.log("Weekdays", this.weekdayshort);
//         let weekdayAbbreviated = this.weekdayshort.map(day=>{
//             return(
//                 <th key={day} className="week-day" >
//                     {day}
//                 </th>)
//         })

//         return(
//         <div className="calendar-date">
//             <h1>Calendar</h1>
//         <table className="calendar-day">
//           <thead>
//             <tr>{weekdayAbbreviated}</tr>
//           </thead>
//         </table>
//       </div>
//         )
       
//     }
// }

// export default calendar