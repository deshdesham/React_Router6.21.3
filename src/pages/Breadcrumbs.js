import React from 'react'
import {useMatches} from 'react-router-dom';

const Breadcrumbs = () => {
    let matches = useMatches();
    // console.log('match',matches);
    let crumbs = matches.filter((match) => Boolean(match.handle?.crumb)).map((match) => match.handle.crumb(match.data));
    // console.log("crumb",crumbs);
  return (
    <ol>
        {
            crumbs.map((item,key)=>(
                <li key={key}>{item}</li>
            ))
        }
    </ol>
  )
}

export default Breadcrumbs;



// [**********************************************]

// you can also do this using useLocation

// import React from 'react'
// import { Link, useLocation } from 'react-router-dom';

// const Breadcrumbs = () => {
//     const location=useLocation();
//     // --/help/contact ----->help | contact
//     let currentLink="";
//     const crumbs=location.pathname.split("/")
//     const path=crumbs.filter(crumb=>crumb!=="")
//     const pathnames=path.map((crumb)=>{
//         currentLink=+`/${crumb}`
//         return(
//             <div key={crumb}>
//                 <Link to={currentLink}>{crumb}/</Link>
//             </div>
//         )
//     })
//   return (
//     <div>{pathnames}</div>
//   )
// }

// export default Breadcrumbs;
