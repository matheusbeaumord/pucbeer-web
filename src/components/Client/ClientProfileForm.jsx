import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './ClientProfileForm.css'
import {updateUserName} from '../../services/Api/user'


const ClientProfileForm = () => {
  const email = JSON.parse(localStorage.getItem('email'));
  const name = JSON.parse(localStorage.getItem('name'));
  const token = JSON.parse(localStorage.getItem('token'));
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const validatename = () => {
    const nameLength = 4;
    const regexNameValidation = /^[a-z ,.'-]+$/i;
    return (
      newName.length >= nameLength
      && name !== newName
      && regexNameValidation.test(newName)
    );
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await updateUserName({newName, newEmail}, token);
      localStorage.setItem('name', JSON.stringify(newName, token));
      localStorage.setItem('email', JSON.stringify(newEmail, token));
    } catch (error) {
      throw new Error(error)
    }
  };
  return (
    <div className="profile-component" >
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ display: 'flex', flexWrap: 'wrap' }}
    >
        <TextField
          className='lbl_nome'
          id="outlined"
          label="Nome"
          sx={{ m: 1, width: '50ch' }}
          placeholder={name}
          onChange={ ({ target: { value } }) => setNewName(value) }
        />
        <TextField
          className='lbl_email'
          id="outlined"
          label="E-mail"
          sx={{ m: 1, width: '38ch' }}
          placeholder={email}
          onChange={ ({ target: { value } }) => setNewEmail(value) }
        />
        {/* <TextField
          className='lbl_password'
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          sx={{ m: 1, width: '25ch' }}
        />
        <TextField
          className='lbl_end'
          id="outlined"
          label="Endereço"
          sx={{ m: 1, width: '60ch' }}
        />
        <TextField
          className='lbl_numero'
          id="outlined-number"
          label="Número"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ m: 1, width: '15ch' }}
        />
        <TextField
          className='lbl_cidade'
          id="outlined"
          label="Cidade"
          sx={{ m: 1, width: '30ch' }}
        />
        <Autocomplete
        className='lbl_estado'
        disablePortal
        id="combo-box-demo"
        options={estados}
        sx={{ m: 1, width: '40ch' }}
        renderInput={(params) => <TextField {...params} label="Estado" />}
      /> */}
      <Stack spacing={1} direction="row" className='btn_salvar'>
        <Button variant="contained"
        disabled={ !validatename() }
        onClick={ (e) => updateUser(e) }
        color='inherit'
        >
        <SaveIcon/>
          Salvar
        </Button>
      </Stack>
    </Box>
      {/* <div>
      <h1 data-testid="top-title">
        Perfil
      </h1>
      <h1 data-testid="profile-name">
      {`Nome: ${name}`}
      </h1>
      <h1 data-testid="profile-email">
      {`Email: ${email}`}
      </h1>
       </div> */}
    </div>

  );
};

// const estados = [
//   { label: 'Acre – AC' },
//   { label: 'Alagoas – AL' },
//   { label: 'Amapá – AP' },
//   { label: 'Amazonas – AM' },
//   { label: 'Bahia – BA' },
//   { label: 'Ceará – CE' },
//   { label: 'Distrito Federal – DF' },
//   { label: 'Espírito Santo – ES' },
//   { label: 'Goiás – GO' },
//   { label: 'Maranhão – MA' },
//   { label: 'Mato Grosso – MT' },
//   { label: 'Mato Grosso do Sul – MS' },
//   { label: 'Minas Gerais – MG' },
//   { label: 'Pará – PA' },
//   { label: 'Paraíba – PB' },
//   { label: 'Paraná – PR' },
//   { label: 'Pernambuco – PE' },
//   { label: 'Piauí – PI' },
//   { label: 'Rio de Janeiro – RJ' },
//   { label: 'Rio Grande do Norte – RN' },
//   { label: 'Rio Grande do Sul – RS' },
//   { label: 'Rondônia – RO' },
//   { label: 'Roraima – RR' },
//   { label: 'Santa Catarina – SC' },
//   { label: 'São Paulo – SP' },
//   { label: 'Sergipe – SE' },
//   { label: 'Tocantins – TO' },
// ];

export default ClientProfileForm;
