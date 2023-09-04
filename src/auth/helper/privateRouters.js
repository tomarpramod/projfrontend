import { Route,  Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from './index';



// const PrivateRouters = ({component: Component, ...rest }) => {
//     return (
//         <Route
//           {...rest}
//           render={(props) =>
//             isAuthenticated()
//              ? (
//               <Component {...props} />
//             ) : (
//               <Navigate
//                 to={{
//                   pathname: "/signin",
//                   state: { from: props.location }
//                 }}
//               />
//             )
//           }
//         />
//       );
// }


// export default PrivateRouters;


const PrivateRouters = () => {
  const auth=null;
  return auth ? <Outlet /> : <Navigate to="/signin" />;
}


export default PrivateRouters;




