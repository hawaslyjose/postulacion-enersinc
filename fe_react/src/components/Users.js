import React, {useState, useEffect} from "react";

const API = process.env.REACT_APP_API;

export const Users = () =>{

  const [apellido, setApellido] = useState('')
  const [cedula, setCedula] = useState('')
  const [nombre, setNombre] = useState('')
  const [hobbie, setHobbie] = useState('')

  const [editar, setEditar] = useState(false)
  const [id, setId] = useState('')
  
  const[usuarios, setUsuarios] = useState([])

  const handleSubmit = async (e) =>{
    e.preventDefault();

    if (!editar){
          const res = await fetch(`${API}/usuarios`,{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        apellido,
        cedula,
        nombre,
        hobbie
      })
    })
    const data = await res.json();
    console.log(data)
    } else {
      const res = await fetch(`${API}/usuarios/${id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          apellido,
          cedula,
          nombre,
          hobbie
        })
      })
      const data = await res.json();
      console.log(data)
      setEditar(false);
      setId('')
    }

    await getUsers();

    setApellido('');
    setCedula('');
    setNombre('')
    setHobbie('');
  }

  const getUsers = async () =>{
    const res = await fetch(`${API}/usuarios`)
    const data = await res.json();
    setUsuarios(data)
  }

  useEffect(() => {
    getUsers();
  }, [])

  const editUser = async(id) =>{
    const res = await fetch(`${API}/usuarios/${id}`)
    const data = await res.json();

    setEditar(true);
    setId(data._id)

    setApellido(data.apellido)
    setCedula(data.cedula)
    setNombre(data.nombre)
    setHobbie(data.hobbie)
  }

  const deleteUser = async (id) =>{
    const userResponse = window.confirm('Estas seguro de que lo quieres eliminar')
    if(userResponse){
      const res = await fetch(`${API}/usuarios/${id}`,{
        method: 'DELETE'
      })
     await res.json;
     await getUsers();
    }
  }

  return(
    <div class="row">
      <div class="col-md-4">
        <form onSubmit={handleSubmit} className="card card-body">
            <div class="form group">
                <input type="text" onChange={e => setApellido(e.target.value)} value={apellido} className="form-control" placeholder="Apellido" autoFocus/>
            </div>
            <div class="form group">
                <input type="text" onChange={e => setCedula(e.target.value)} value={cedula} className="form-control" placeholder="Cedula" autoFocus/>
            </div>
            <div class="form group">
                <input type="text" onChange={e => setNombre(e.target.value)} value={nombre} className="form-control" placeholder="Nombre" autoFocus/>
            </div>
            <div class="form group">
                <input type="text" onChange={e => setHobbie(e.target.value)} value={hobbie} className="form-control" placeholder="Hobbie" autoFocus/>
            </div>
            <button className="btn btn-primary btn-blok">
              {editar ? 'Editar' : 'Crear'}
            </button>
        </form>
      </div>
      <div class="col-md-6">
        <table className="table table-striped">
          <thead>
              <tr>
                <th>Apellido</th>
                <th>Cedula</th>
                <th>Nombre</th>
                <th>hobbie</th>
                <th>Operaciones</th>
              </tr>
          </thead>
          <tbody>
            {usuarios.map(user =>(
              <tr key={user._id}>
                <td>{user.apellido}</td>
                <td>{user.cedula}</td>
                <td>{user.nombre}</td>
                <td>{user.hobbie}</td>
                <td>
                   <button className="btn btn-secondary btn-sm btn-block" onClick={(e) => editUser(user._id)}>
                        Editar
                    </button>
                    <button className="btn btn-danger btn-sm btn-block" onClick={(e) => deleteUser(user._id)}>
                        Eliminar
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}