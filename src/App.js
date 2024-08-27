import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Chess Board</h1>
      <table>
        <tr>
          <td className='white' align='center'>♜</td>
          <td className='black' align='center'>♞</td>
          <td className='white' align='center'>♝</td>
          <td className='black' align='center'>♛</td>
          <td className='white' align='center'>♚</td>
          <td className='black' align='center'>♝</td>
          <td className='white' align='center'>♞</td>
          <td className='black' align='center'>♜</td>
        </tr>
        <tr>
        <td className='black' align='center'>♟</td>
          <td className='white' align='center'>♟</td>
          <td className='black' align='center'>♟</td>
          <td className='white' align='center'>♟</td>
          <td className='black' align='center'>♟</td>
          <td className='white' align='center'>♟</td>
          <td className='black' align='center'>♟</td>
          <td className='white' align='center'>♟</td>
        </tr>
        <tr>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
        </tr>
        <tr>
        <td className='black' align='center'></td>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
          <td className='white' align='center'></td>
        </tr>
        <tr>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
        </tr>
        <tr>
        <td className='black' align='center'></td>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
          <td className='white' align='center'></td>
          <td className='black' align='center'></td>
          <td className='white' align='center'></td>
        </tr>
        <tr>
          <td className='white' align='center'>♙</td>
          <td className='black' align='center'>♙</td>
          <td className='white' align='center'>♙</td>
          <td className='black' align='center'>♙</td>
          <td className='white' align='center'>♙</td>
          <td className='black' align='center'>♙</td>
          <td className='white' align='center'>♙</td>
          <td className='black' align='center'>♙</td>
        </tr>
        <tr>
          <td className='black' align='center'>♖</td>
          <td className='white' align='center'>♘</td>
          <td className='black' align='center'>♗</td>
          <td className='white' align='center'>♕</td>
          <td className='black' align='center'>♔</td>
          <td className='white' align='center'>♗</td>
          <td className='black' align='center'>♘</td>
          <td className='white' align='center'>♖</td>
        </tr>
      </table>
    </div>
  );
}

export default App;