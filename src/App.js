import { useEffect, useState } from "react";



function App() {

  const [ listaTarefas, setListaTarefas ] = useState( [] );
  const [ tarefa, setTarefa ] = useState( { id : '' , texto: "", status: ""} );

  function addTarefa()
  {
    if( tarefa.texto !==""){
      setListaTarefas([...listaTarefas, tarefa]);
    }
  }
  function excluirTarefa( id )
  {
      const novaLista = listaTarefas.filter( (tarefa)  => tarefa.id !== id );
      setListaTarefas( novaLista );
  }
  function statusTarefa (id, status )
  {
      const index = listaTarefas.findIndex( (tarefa) => tarefa.id === id);
      listaTarefas[index].status = !status;
      setListaTarefas( [...listaTarefas] );
  }
  

  useEffect( () => {
    setTarefa( { id: "" , texto: "", status: ""});
  }, [listaTarefas])

  return (
    <>

    <header>
      <h1>React DO</h1>
    </header>
    <div className="bloconotas">
      <div className="lista">
          <ul>
            {listaTarefas.map( (item, index ) => (
              <li className={item.status ? 'itemAtivo' : 'itemInativo'} key={index}>{item.texto} <button onClick={ () => statusTarefa(item.id, item.status) }>{item.status ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-check"></i>  }</button> <button onClick={ () => excluirTarefa(item.id) }><i class="fa-solid fa-trash"></i></button></li>
            ))}
          </ul>
      </div>
      <div className="addtarefa">
          <input type="text" name="tarefa" placeholder="Digite sua tarefa" value={tarefa.texto} onChange={ (e) => setTarefa( { id: Math.random(), texto: e.target.value, status: false} ) }></input>
          <button onClick={addTarefa}>Adicionar</button>
      </div>
      <div className="diario">
        <h1>Como você esta se sentindo hoje?</h1>
        <input type="text"></input>
      </div>
    </div>
    </>
  );
}

export default App;
