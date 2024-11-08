import { useState } from "react";
import { CopyBlock, solarizedDark } from "react-code-blocks";
import { Button } from "@/components/ui/button";

function App() {
  // Make count able to be changed from the UI
  const [count, setCount] = useState(0);
  const [code3show, setcode3show] = useState(false);

  const code3 = `<div class='grid grid-cols-5 sm:grid-cols-10 gap-3'>
  ...
</div>`;

  return (
    <div className='min-h-screen bg-gray-700 text-gray-300 p-5'>
      <div className='flex justify-center gap-3 flex-col items-center'>
        <h1 className='text-5xl'>Add item</h1>
        <div className='flex gap-3'>
          <button
            onClick={() => setCount(count + 1)}
            className='bg-green-500 rounded-lg p-2 text-white'
          >
            Add
          </button>
          <button
            onClick={() => setCount(count + 10)}
            className='bg-green-500 rounded-lg p-2 text-white'
          >
            Add 10
          </button>
          <button
            onClick={() => setCount(count + 100)}
            className='bg-green-500 rounded-lg p-2 text-white'
          >
            Add 100
          </button>
          {count <= 0 ? (
            ""
          ) : (
            <button
              onClick={() => setCount(count - 1)}
              className='bg-red-500 rounded-lg p-2 text-white'
            >
              Remove
            </button>
          )}
          {count <= 9 ? (
            ""
          ) : (
            <button
              onClick={() => setCount(count - 10)}
              className='bg-red-500 rounded-lg p-2 text-white'
            >
              Remove 10
            </button>
          )}
          {count <= 99 ? (
            ""
          ) : (
            <button
              onClick={() => setCount(count - 100)}
              className='bg-red-500 rounded-lg p-2 text-white'
            >
              Remove 100
            </button>
          )}
          {count <= 999 ? (
            ""
          ) : (
            <button
              onClick={() => setCount(count - 1000)}
              className='bg-red-500 rounded-lg p-2 text-white'
            >
              Remove 1000
            </button>
          )}
          {count <= 0 ? (
            ""
          ) : (
            <button
              onClick={() => setCount(count - count)}
              className='bg-orange-500 rounded-lg p-2 text-white'
            >
              Reset
            </button>
          )}
        </div>
        <h2 className='text-3xl'>Count: {count}</h2>
      </div>
      {count <= 0 ? (
        ""
      ) : (
        <>
          <h3 className='text-2xl'>Flex</h3>
          <p>
            Code example:{" "}
            <Button onClick={() => setcode3show(!code3show)} variant={"ghost"}>
              {code3show ? <>Hide code</> : <>Show code</>}
            </Button>
          </p>
          {code3show && (
            <CopyBlock text={code3} theme={solarizedDark} language='html' />
          )}
        </>
      )}
      <div className='flex justify-center gap-3 flex-wrap flex-row'>
        {Array(count)
          .fill(0)
          .map((_, i) => {
            i = i + 1;
            if (i % 1000 === 0) {
              return (
                <div
                  key={i}
                  className='bg-emerald-500 rounded-lg flex-grow flex-shrink text-center min-w-16'
                >
                  {i}
                </div>
              );
            } else if (i % 100 === 0) {
              return (
                <div
                  key={i}
                  className='bg-rose-500 rounded-lg flex-grow flex-shrink text-center min-w-16'
                >
                  {i}
                </div>
              );
            } else if (i % 10 === 0) {
              return (
                <div
                  key={i}
                  className='bg-yellow-500 rounded-lg flex-grow flex-shrink text-center min-w-16'
                >
                  {i}
                </div>
              );
            } else if (i % 2 === 0) {
              return (
                <div
                  key={i}
                  className='bg-pink-500 rounded-lg flex-grow flex-shrink text-center min-w-16'
                >
                  {i}
                </div>
              );
            } else {
              return (
                <div
                  key={i}
                  className='bg-blue-500 rounded-lg flex-grow flex-shrink text-center min-w-16'
                >
                  {i}
                </div>
              );
            }
          })}
      </div>
      {count <= 0 ? (
        ""
      ) : (
        <>
          <h3 className='text-2xl'>Grid</h3>
          <p>
            Code example:{" "}
            <Button onClick={() => setcode3show(!code3show)} variant={"ghost"}>
              {code3show ? <>Hide code</> : <>Show code</>}
            </Button>
          </p>
          {code3show && (
            <CopyBlock text={code3} theme={solarizedDark} language='html' />
          )}
        </>
      )}
      <div className='grid grid-cols-10 gap-3'>
        {Array(count)
          .fill(0)
          .map((_, i) => {
            i = i + 1;
            if (i % 1000 === 0) {
              return (
                <div
                  key={i}
                  className='bg-emerald-500 rounded-lg text-center min-w-16'
                >
                  {i}
                </div>
              );
            } else if (i % 100 === 0) {
              return (
                <div
                  key={i}
                  className='bg-rose-500 rounded-lg text-center min-w-16'
                >
                  {i}
                </div>
              );
            } else if (i % 10 === 0) {
              return (
                <div
                  key={i}
                  className='bg-yellow-500 rounded-lg text-center min-w-16'
                >
                  {i}
                </div>
              );
            } else if (i % 2 === 0) {
              return (
                <div
                  key={i}
                  className='bg-pink-500 rounded-lg text-center min-w-16'
                >
                  {i}
                </div>
              );
            } else {
              return (
                <div
                  key={i}
                  className='bg-blue-500 rounded-lg text-center min-w-16'
                >
                  {i}
                </div>
              );
            }
          })}
      </div>
      {count <= 0 ? (
        ""
      ) : (
        <>
          <h3 className='text-2xl'>Grid (Screen Width Dependent)</h3>
          <p>
            Code example:{" "}
            <Button onClick={() => setcode3show(!code3show)} variant={"ghost"}>
              {code3show ? <>Hide code</> : <>Show code</>}
            </Button>
          </p>
          {code3show && (
            <CopyBlock text={code3} theme={solarizedDark} language='html' />
          )}
        </>
      )}
      <div className='grid grid-cols-5 sm:grid-cols-10 gap-3'>
        {Array(count)
          .fill(0)
          .map((_, i) => {
            i = i + 1;
            if (i % 1000 === 0) {
              return (
                <div
                  key={i}
                  className='bg-emerald-500 rounded-lg text-center min-w-16'
                >
                  {i}
                </div>
              );
            } else if (i % 100 === 0) {
              return (
                <div
                  key={i}
                  className='bg-rose-500 rounded-lg text-center min-w-16'
                >
                  {i}
                </div>
              );
            } else if (i % 10 === 0) {
              return (
                <div
                  key={i}
                  className='bg-yellow-500 rounded-lg text-center min-w-16'
                >
                  {i}
                </div>
              );
            } else if (i % 2 === 0) {
              return (
                <div
                  key={i}
                  className='bg-pink-500 rounded-lg text-center min-w-16'
                >
                  {i}
                </div>
              );
            } else {
              return (
                <div
                  key={i}
                  className='bg-blue-500 rounded-lg text-center min-w-16'
                >
                  {i}
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}

export default App;
