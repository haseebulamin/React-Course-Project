import React,{forwardRef} from 'react'

function ForwordRef(props,ref) {
  return (
    <div>
        <h1>Hello from forwardRef</h1>
      <input type="text" ref={ref} />
    </div>
  )
}
export default forwardRef(ForwordRef);
