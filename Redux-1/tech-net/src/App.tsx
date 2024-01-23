
import { increment,decrement,incrementByAmount } from './redux/features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from './redux/hooks';

function App() {
  const {count} = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()
  return (
   <div>
      <h1>The Tech Net</h1>
      <div className="flex gap-6">
        <button onClick={()=>dispatch(increment())} className="border-2 border-red-500 rounded-md px-2 py-2">Increment</button>
        <div>{count}</div>
        <button onClick={()=>dispatch(decrement())}  className="border-2 border-red-500 rounded-md px-2 py-2">
        Decrement
      </button>
      <button onClick={()=>dispatch(incrementByAmount(5))}  className="border-2 border-red-500       rounded-md px-2 py-2">
        Increment By Amount
      </button>
      
      </div>
      
   </div>
  )
}

export default App
