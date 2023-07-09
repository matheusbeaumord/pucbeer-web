// import { useState } from 'react';
// import { updateUserName } from '../../services/Api/user';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ClientProfileForm = () => {
  // const email = JSON.parse(localStorage.getItem('email'));
  // const name = JSON.parse(localStorage.getItem('name'));
  // const token = JSON.parse(localStorage.getItem('token'));
  // const [newName, setNewName] = useState('');
  // const [showSuccess, setShowSuccess] = useState(false);

  // const validatename = () => {
  //   const nameLength = 12;
  //   const regexNameValidation = /^[a-z ,.'-]+$/i;
  //   return (
  //     newName.length >= nameLength
  //     && name !== newName
  //     && regexNameValidation.test(newName)
  //   );
  // };

  // const saveNewName = async (e) => {
  //   e.preventDefault();
  //   await updateUserName(newName, token);
  //   localStorage.setItem('name', JSON.stringify(newName, token));
  //   setShowSuccess(true);
  // };

  return (
    <Box
    component="form"
    noValidate
    autoComplete="off"
    sx={{ display: 'flex', flexWrap: 'wrap' }}
  >
  <h1 data-testid="top-title">
    Perfil
  </h1>
    <div className='div_geral'>
      <TextField
        className='lbl_nome'
        id="outlined"
        label="Nome"
        sx={{ m: 1, width: '50ch' }}
      />
      <TextField
        className='lbl_email'
        id="outlined"
        label="E-mail"
        sx={{ m: 1, width: '40ch' }}
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
      <Button variant="contained">
      <SaveIcon/>
        Salvar
      </Button>
    </Stack>
  </div>
  </Box>
    // <div>
    //   <h1 data-testid="top-title">
    //     Meu perfil
    //   </h1>
    //   <form>
    //     <label
    //       htmlFor="name"
    //     >
    //       Name
    //       <input
    //         data-testid="profile-name-input"
    //         type="text"
    //         id="name"
    //         placeholder={ name }
    //         onChange={ ({ target: { value } }) => setNewName(value) }
    //       />
    //     </label>
    //     <label
    //       htmlFor="email"
    //     >
    //       Email
    //       <input
    //         readOnly
    //         data-testid="profile-email-input"
    //         type="email"
    //         id="email"
    //         value={ email }
    //       />
    //     </label>
    //     <button
    //       data-testid="profile-save-btn"
    //       type="submit"
    //       disabled={ !validatename() }
    //       onClick={ (e) => saveNewName(e) }
    //     >
    //       Salvar
    //     </button>
    //     {showSuccess && <p>Atualização concluída com sucesso.</p>}
    //   </form>
    // </div>
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
