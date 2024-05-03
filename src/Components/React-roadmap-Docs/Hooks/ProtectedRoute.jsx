import React from 'react'

const ProtectedRoute = (props)=> {

    const {Compo} = props;
    console.log(Compo);
  return (
    <div>
        <h1>ProtectedRoute</h1>
        <Compo/>
    </div>
  )
}
export default ProtectedRoute;

{/* <Route path='/' element={<ProtectedRoute Compo={Home} />}></Route> */}

