import styles from "./index.module.css"
import { useMemo, useState, useEffect, useRef, type ReactNode } from "react";

import { Title } from "./fundamental.tsx";

type p_TicTacToe = {
	level?: number;
	children? : ReactNode;
};
enum e_ttt {
	null,
	x,
	o,
};
export function TicTacToe({ level = 1 } : p_TicTacToe = {}) {
	type p_Cell = {
		v: e_ttt,
		i: number,
		onClick: (i: number) => void,
	};
	const { Cell } = useMemo(() => ({
		Cell: function ({ i, v, onClick }: p_Cell) {

			function handleClick() {
				if (v !== e_ttt.null)
					return;

				onClick(i);
			};

      const content = {
        [e_ttt.o] : 'O',
        [e_ttt.x] : 'X',
        [e_ttt.null] : null,
      }[v];

			return (
				<button
					onClick={handleClick}
					className="cell">
					{content}
				</button>
			);

		},
	}), []);

	const [cells, s_cells] = useState<e_ttt[]>(Array(9).fill(e_ttt.null));

	const r_turn = useRef(true);
  const [winner, s_winner] = useState<null | e_ttt>(null);

	const {
		checkForWinner,
    reset,
	} = useMemo(() => ({
		checkForWinner: (cells: e_ttt[]) : e_ttt | null => {
      const combinations : [number,number,number][] = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
      ]

    if (combinations.some(combo => combo.map(i => cells[i]).every((v,_,[a]) => v !== e_ttt.null && v === a)))
        return r_turn.current ? e_ttt.x : e_ttt.o;
      
      if(cells.every(c => c !== e_ttt.null))
        return e_ttt.null;
      
      return null;
		},
    reset : () : void => {
      s_cells(Array(9).fill(e_ttt.null));
      s_winner(null);
      r_turn.current = !r_turn.current;
    }
	}), [])

  function handleClick(i : number) : void {
    if (winner !== null)
      return;

    const n_cells = [
      ...cells.slice(0, i),
      r_turn.current ? e_ttt.x : e_ttt.o,
      ...cells.slice(i + 1, 9),
    ];
    s_cells(n_cells);
    const n_winner = checkForWinner(n_cells);

    if (n_winner === null) 
      return void (r_turn.current = !r_turn.current);
    
    s_winner(n_winner);
  }
  const r_eldialog = useRef<null | HTMLDialogElement>(null);
  
  useEffect(() => {
    if (winner === null)
      return;

    r_eldialog.current?.showModal();
    
    console.log(winner === e_ttt.null ? 'no hay ganador' : `el ganador es ${r_turn.current ? e_ttt.x : e_ttt.o}`);
  }, [winner])


	return (
    <>
      <article className={styles["article-ttt"]}>
        <header >
          <Title level={level}>Tic Tac Toe, en tu cara!</Title>
        </header>

        <section className="board">
          {cells.map((v, i) => <Cell key={i} onClick={handleClick} v={v} i={i} />)}
        </section>

        {winner !== null && (
          <section className="results"> 
            <Title level={ level + 1 }>
              {winner === e_ttt.null ? `No hay ganador` : `El ganador es el jugador ${r_turn.current ? e_ttt.x : e_ttt.o}!`}
            </Title>
            <div>
              <button className={styles['btn'] + " ml-auto"} onClick={reset}>reset</button>
            </div>
          </section>
        )}
      </article>

      <dialog ref={r_eldialog} className={styles["dialog-ttt"]}>
        <form>
          <header>
            <Title level={ level + 1}>¡El juego terminó!</Title>
          </header>
          <div>
            {winner === e_ttt.null ? (
              <p className="text-sm">No hay ganador</p>
            ):(
              <p className="text-sm">El ganador es el jugador {r_turn.current ? e_ttt.x : e_ttt.o}!</p>
            )}
          </div>
          <div>
            <button className={styles['btn'] + " block ml-auto"} formMethod="dialog">ok</button>
          </div>
        </form>
      </dialog>
    </>
  )
}