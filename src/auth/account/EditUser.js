import { useEffect, useState } from "react";
import TextInput from "../../components/TextInput";
import api from "../../apis/api";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function EditUser(props) {
  const history = useHistory();

  const [state, setState] = useState({
    name: "",
    document: "",
    pis: "",
    address: {
      street: "",
      complement: "",
      country: "",
      city: "",
      district: "",
      postalCode: "",
      number: "",
    },
  });

  const { id } = useParams();

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  useEffect(() => {
    async function fetchEditUser() {
      try {
        const foundUser = await api.get("/profile");

        const addressObj = { ...foundUser.data.address };

        delete foundUser.data.address;
        delete addressObj._id;

        setState({
          ...foundUser.data,
          ...addressObj,
        });
      } catch (err) {
        console.log(err);
      }
    }
    fetchEditUser();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const {
        street,
        complement,
        city,
        country,
        district,
        postalCode,
        number,
      } = state;

      const response = await api.put(`/editUser/${id}`, {
        ...state,
        address: {
          street,
          complement,
          country,
          city,
          district,
          postalCode,
          number,
        },
      });

      console.log("eu sou handleSubmit --> ", response);

      history.push(`/profile/${id}`);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Nome"
        type="text"
        required={false}
        value={state.name}
        onChange={handleChange}
        name="name"
      />

      <TextInput
        label="CPF"
        type="text"
        required={false}
        value={state.document}
        onChange={handleChange}
        name="document"
      />

      <TextInput
        label="PIS"
        type="number"
        required={false}
        value={state.pis}
        onChange={handleChange}
        name="pis"
      />

      <h2 className="mb-4 mt-4">Address</h2>

      <TextInput
        label="CEP"
        type="text"
        required={false}
        value={state.postalCode}
        onChange={handleChange}
        name="postalCode"
      />

      <TextInput
        label="Rua"
        type="text"
        required={false}
        value={state.street}
        onChange={handleChange}
        name="street"
      />

      <TextInput
        label="Numero"
        type="text"
        required={false}
        value={state.number}
        onChange={handleChange}
        name="number"
      />

      <TextInput
        label="Cidade"
        type="text"
        required={false}
        value={state.city}
        onChange={handleChange}
        name="city"
      />

      <TextInput
        label="Estado"
        type="text"
        required={false}
        value={state.district}
        onChange={handleChange}
        name="district"
      />

      <TextInput
        label="País"
        type="text"
        required={false}
        value={state.country}
        onChange={handleChange}
        name="country"
      />

      <TextInput
        label="Complemento"
        type="text"
        required={false}
        value={state.complement}
        onChange={handleChange}
        name="complement"
      />

      <button type="submit" className="btn btn-warning">
        Salvar
      </button>

      <Link type="button" to="/" className="btn btn-warning">
        Cancelar
      </Link>

      <Link type="button" to={`/deleteUser/${id}`} className="btn btn-danger">
        Deletar Conta
      </Link>
    </form>
  );
}

export default EditUser;
