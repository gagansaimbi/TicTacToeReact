import { useCallback, useEffect, useState } from "react"


function Home() {
    const [val11, setVal11] = useState('')
    const [val12, setVal12] = useState('')
    const [val13, setVal13] = useState('')
    const [val21, setVal21] = useState('')
    const [val22, setVal22] = useState('')
    const [val23, setVal23] = useState('')
    const [val31, setVal31] = useState('')
    const [val32, setVal32] = useState('')
    const [val33, setVal33] = useState('')
    // const [nextTurn, setNextTurn] = (1)
    const [turn, setTurn] = useState(0)
    const [win, setWin] = useState(false)
    const [winner, setWinner] = useState(0)
    const [winRow, setWinRow] = useState(0)

    const CheckWin = useCallback(() => {
        if (val11 === 'O' && val22 === 'O' && val33 === 'O') {
            console.log('Player 1 wins');
            setWinRow(112233)
            setWinner(1)
            setWin(true)
        } else if (val11 === 'X' && val22 === 'X' && val33 === 'X') {
            console.log('Player 2 wins');
            setWinRow(112233)
            setWinner(2)
            setWin(true)
        } else if (val13 === 'O' && val22 === 'O' && val31 === 'O') {
            console.log('Player 1 wins');
            setWinRow(132231)
            setWinner(1)
            setWin(true)
        } else if (val13 === 'X' && val22 === 'X' && val31 === 'X') {
            console.log('Player 2 wins');
            setWinRow(132231)
            setWinner(2)
            setWin(true)
        } else if (val11 === 'O' && val12 === 'O' && val13 === 'O') {
            console.log('Player 1 wins');
            setWinRow(111213)
            setWinner(1)
            setWin(true)
        } else if (val11 === 'X' && val12 === 'X' && val13 === 'X') {
            console.log('Player 2 wins');
            setWinRow(111213)
            setWinner(2)
            setWin(true)
        } else if (val21 === 'O' && val22 === 'O' && val23 === 'O') {
            console.log('Player 1 wins');
            setWinRow(212223)
            setWinner(1)
            setWin(true)
        } else if (val21 === 'X' && val22 === 'X' && val23 === 'X') {
            console.log('Player 2 wins');
            setWinRow(212223)
            setWinner(2)
            setWin(true)
        } else if (val31 === 'O' && val32 === 'O' && val33 === 'O') {
            console.log('Player 1 wins');
            setWinRow(313233)
            setWinner(1)
            setWin(true)
        } else if (val31 === 'X' && val32 === 'X' && val33 === 'X') {
            console.log('Player 2 wins');
            setWinRow(313233)
            setWinner(2)
            setWin(true)
        } else if (val11 === 'O' && val21 === 'O' && val31 === 'O') {
            console.log('Player 1 wins');
            setWinRow(112131)
            setWinner(1)
            setWin(true)
        } else if (val11 === 'X' && val21 === 'X' && val31 === 'X') {
            console.log('Player 2 wins');
            setWinRow(112131)
            setWinner(2)
            setWin(true)
        }else if (val12 === 'O' && val22 === 'O' && val32 === 'O') {
            console.log('Player 1 wins');
            setWinRow(122232)
            setWinner(1)
            setWin(true)
        } else if (val22 === 'X' && val32 === 'X' && val12 === 'X') {
            console.log('Player 2 wins');
            setWinRow(122232)
            setWinner(2)
            setWin(true)
        }	else if (val13 === 'O' && val23 === 'O' && val33 === 'O') {
            console.log('Player 1 wins');
            setWinRow(132333)
            setWinner(1)
            setWin(true)
        } else if (val23 === 'X' && val33 === 'X' && val13 === 'X') {
            console.log('Player 2 wins');
            setWinRow(132333)
            setWinner(2)
            setWin(true)
        }

    }, [val11, val12, val13, val21, val22, val23, val31, val32, val33]);

    useEffect(() => {
        console.log(turn);
        CheckWin();
    }, [turn, CheckWin])

    useEffect(() => {
        // handleReset();
        setTurn(0);
        // console.log(win);
    }, [win])

    const handleReset = () => {
        setWinRow(0)
        setWin(false)
        setWinner(0)
        setTurn(0);
        setVal11('');
        setVal12('');
        setVal13('');
        setVal21('');
        setVal22('');
        setVal23('');
        setVal31('');
        setVal32('');
        setVal33('');
    }



    const handlePlayerInput = (id) => {
        if(!win){
        switch (id) {
            case 11:
                if (turn === 0 && val11 === '') {
                    setVal11('O');
                    setTurn(1);
                } else if (val11 === '') {
                    setVal11('X');
                    setTurn(0);
                }
                break;
            case 12:
                if (turn === 0 && val12 === '') {
                    setVal12('O');
                    setTurn(1);

                } else if (val12 === '') {
                    setVal12('X');
                    setTurn(0);

                }
                break;
            case 13:
                if (turn === 0 && val13 === '') {
                    setVal13('O');
                    setTurn(1);

                } else if (val13 === '') {
                    setVal13('X');
                    setTurn(0);

                }
                break;
            case 21:
                if (turn === 0 && val21 === '') {
                    setVal21('O');
                    setTurn(1);

                } else if (val21 === '') {
                    setVal21('X');
                    setTurn(0);

                }
                break;
            case 22:
                if (turn === 0 && val22 === '') {
                    setVal22('O');
                    setTurn(1);

                } else if (val22 === '') {
                    setVal22('X');
                    setTurn(0);

                }
                break;
            case 23:
                if (turn === 0 && val23 === '') {
                    setVal23('O');
                    setTurn(1);

                } else if (val23 === '') {
                    setVal23('X');
                    setTurn(0);

                }
                break;
            case 31:
                if (turn === 0 && val31 === '') {
                    setVal31('O');
                    setTurn(1);

                } else if (val31 === '') {
                    setVal31('X');
                    setTurn(0);

                }
                break;
            case 32:
                if (turn === 0 && val32 === '') {
                    setVal32('O');
                    setTurn(1);

                } else if (val32 === '') {
                    setVal32('X');
                    setTurn(0);

                }
                break;
            case 33:
                if (turn === 0 && val33 === '') {
                    setVal33('O');
                    setTurn(1);

                } else if (val33 === '') {
                    setVal33('X');
                    setTurn(0);

                }
                break;
            default:
                break;
        }
    }
    };


    return (<>
        <br />

        {/* heading  */}
        <h1 className="display-1"> Tic Tac Toe Game</h1>
        <br />

        {/* game info  */}
        <h5>Player-1 plays 'O'    |    Player-2 plays 'X'</h5>
        <br />
        {/* <p>Click on 'Start the Game' button below to start</p> */}
        <span className="turn">
            { !win &&
                <span><span className={`turn-span ${turn===0 ? 'text-success-emphasis fs-1':'text-body-tertiary fs-3'}`}>Player-1 Go!</span>
            <span className={`turn-span`}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className={`turn-span ${turn===1 ? 'text-success-emphasis fs-1':'text-body-tertiary fs-3'}`}>Player-2 Go!</span>
            </span>
            }
            { win &&
                <span className={`turn-span text-success-emphasis fs-1`}>Player {winner} wins!</span>
            }
        </span>
        
        {/* game grid  */}
        <br />
        <div className="game-container">
            <div className="game">
                <table id="mytable" border="1" className="table" >
                    <tbody className="input" id="mytable">
                        <tr>
                            <td className={`border border-3 border-dark border-top-0 border-start-0 ${winRow === 112233 || winRow === 111213 || winRow === 112131 ? 'bg-success text-white' : ''} `} onClick={() => { handlePlayerInput(11) }} id="11"><span className="">{val11}</span></td>
                            <td className={`border border-3 border-dark border-top-0 border-start-0 ${winRow === 111213 || winRow === 122232 ? 'bg-success text-white' : ''} `} onClick={() => { handlePlayerInput(12) }} id="12"><span>{val12}</span></td>
                            <td className={`border border-3 border-dark border-top-0 border-end-0 ${winRow === 111213 || winRow === 132333 || winRow === 132231 ? 'bg-success text-white' : ''} `} onClick={() => { handlePlayerInput(13) }} id="13"><span>{val13}</span></td>
                        </tr>
                        <tr>
                            <td className={`border border-3 border-dark border-top-0 border-start-0 ${winRow === 212223 || winRow === 112131 ? 'bg-success text-white' : ''} `} onClick={() => { handlePlayerInput(21) }} id="21"><span>{val21}</span></td>
                            <td className={`border border-3 border-dark border-top-0 border-start-0 ${winRow === 112233 || winRow === 132231 || winRow === 212223 || winRow === 122232 ? 'bg-success text-white' : ''} `} onClick={() => { handlePlayerInput(22) }} id="22"><span>{val22}</span></td>
                            <td className={`border border-3 border-dark border-top-0 border-end-0 ${winRow === 212223 || winRow === 132333 ? 'bg-success text-white' : ''} `} onClick={() => { handlePlayerInput(23) }} id="23"><span>{val23}</span></td>
                        </tr>
                        <tr>
                            <td className={`border border-3 border-dark border-top-0 border-start-0 border-bottom-0 ${winRow === 132231 || winRow === 112131 || winRow === 313233  ? 'bg-success text-white' : ''} `} onClick={() => { handlePlayerInput(31) }} id="31"><span>{val31}</span></td>
                            <td className={`border border-3 border-dark border-top-0 border-start-0 border-bottom-0 ${winRow === 313233 || winRow === 122232  ? 'bg-success text-white' : ''} `} onClick={() => { handlePlayerInput(32) }} id="32"><span>{val32}</span></td>
                            <td className={`${winRow === 112233 || winRow === 313233 || winRow === 132333  ? 'bg-success text-white' : ''} `} onClick={() => { handlePlayerInput(33) }} id="33"><span>{val33}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <br /><br />

        {/* Reset button  */}
        <div className="col text-center">
            <button type="button" className="btn btn-warning" onClick={handleReset}
                disabled={val11 !== '' || val12 !== '' || val13 !== '' ||
                    val21 !== '' || val22 !== '' || val23 !== '' ||
                    val31 !== '' || val32 !== '' || val33 !== '' ? false : true}
            >
                Restart
            </button>
        </div>

    </>)
}

export default Home;